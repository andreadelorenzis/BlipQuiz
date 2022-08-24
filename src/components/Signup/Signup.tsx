import React, { useEffect, useState } from 'react'
import styles from "./Signup.module.css";
import close from "../../assets/close.png";
import wave from "../../assets/wave4.svg";
import google from "../../assets/google.png";

type SignupProps = {
    open: boolean;
    onClose: Function;
    openLogin: Function;
};

function Signup({ open, onClose, openLogin }: SignupProps) {

    if (!open) return null;

    const handleSubmit = (event: any) => {

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
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button type='submit' className={styles.mainBtn}>Signup</button>
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

