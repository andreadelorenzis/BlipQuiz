import React, { useEffect, useState } from 'react'
import styles from "./Signup.module.css";
import close from "../../assets/close.png";
import wave from "../../assets/wave4.svg";
import google from "../../assets/google.png";
import { useAuth } from '../../context/AuthProvider';

type SignupProps = {
    open: boolean;
    onClose: Function;
    openLogin: Function;
};

function Signup({ open, onClose, openLogin }: SignupProps) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const auth = useAuth();

    if (!open) return null;

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const signupWithEmailAndPass = async (e: any) => {
        e.preventDefault();
        const user = await auth.signupWithEmailAndPass(email, password, () => {
            console.log("Signed in");
        });
        console.log(user);
        onClose();
    }

    const signupWithGoogle = (e: any) => {
        e.preventDefault();
    }

    const handleLogin = () => {
        openLogin();
        onClose();
    }

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <img src={close} alt="close" onClick={() => onClose()} className={styles.close} />
                <div className={styles.header} style={{ backgroundImage: "url(" + wave + ")" }}>
                    <h1>Signup and start learning today</h1>
                </div>
                <div className={styles.body}>
                    <button className={styles.googleBtn}>
                        <img src={google} />
                        Sign in with Google
                    </button>
                    <span className={styles.divider}>or</span>
                    <form className={styles.form}>
                        <input onChange={handleChange} name='email' value={email} type="email" placeholder='Email' />
                        <input onChange={handleChange} name='password' value={password} type="password" placeholder='Password' />
                        <button onClick={signupWithEmailAndPass} type='submit' className={styles.mainBtn}>Signup</button>
                    </form>
                </div>
                <div className={styles.footer}>
                    <p onClick={handleLogin}>Create an account?</p>
                    <p>Forgot password?</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;

