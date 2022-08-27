import styles from "./Login.module.css";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import close from "../../assets/close.png";
import wave from "../../assets/wave4.svg";
import google from "../../assets/google.png";
import { useAuth } from "../../context/AuthProvider";
import { useEffect } from "react";

type LoginProps = {
    open: boolean;
    onClose: Function;
    openSignup: Function;
};

function Login({ open, onClose, openSignup }: LoginProps) {
    let auth = useAuth();
    let location: any = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let email = formData.get("email")?.toString() || "";
        let password = formData.get("password")?.toString() || "";

        auth.signin(email, password, () => {
            navigate(from, { replace: true });
            onClose();
        });
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
                    <button className={styles.googleBtn}>
                        <img src={google} />
                        Sign in with Google
                    </button>
                    <span className={styles.divider}>or</span>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input name="email" type="email" placeholder='Email' />
                        <input name="password" type="password" placeholder='Password' />
                        <button type='submit' className={styles.mainBtn}>Login</button>
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

