import styles from "./Login.module.css";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import close from "../../assets/close.png";
import wave from "../../assets/wave4.svg";
import google from "../../assets/google.png";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";

type LoginProps = {
    open: boolean;
    onClose: Function;
    openSignup: Function;
};

function Login({ open, onClose, openSignup }: LoginProps) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    let location: any = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();
    let from = location.state?.from?.pathname || "/";

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const loginWithEmailAndPassword = (e: any) => {
        e.preventDefault();
        auth.signinWithEmailAndPass(email, password, () => {
            console.log('Signed in');
            onClose();
        })
    }

    const loginWithGoogle = () => {

    }

    const handleSignup = () => {
        openSignup();
        onClose();
    }

    if (!open) return null;

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <img src={close} alt="close" onClick={() => onClose()} className={styles.close} />
                <div className={styles.header} style={{ backgroundImage: "url(" + wave + ")" }}>
                    <h1>Login and start learning today</h1>
                </div>
                <div className={styles.body}>
                    <button onClick={loginWithGoogle} className={styles.googleBtn}>
                        <img src={google} />
                        Sign in with Google
                    </button>
                    <span className={styles.divider}>or</span>
                    <form className={styles.form}>
                        <input onChange={handleChange} value={email} name="email" type="email" placeholder='Email' />
                        <input onChange={handleChange} value={password} name="password" type="password" placeholder='Password' />
                        <button onClick={loginWithEmailAndPassword} type='submit' className={styles.mainBtn}>Login</button>
                    </form>
                </div>
                <div className={styles.footer}>
                    <p onClick={handleSignup}>Create an account?</p>
                    <p>Forgot password?</p>
                </div>
            </div>
        </div>
    )
}

export default Login;

