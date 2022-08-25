import React from 'react'
import styles from './Account.module.css'

function Account() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Change your email</h3>
                </div>
                <div className={styles.cardContent}>
                    <p>Your email is currently</p>
                    <p className={styles.email}>andredelo99@gmail.com</p>
                    <form>
                        <input type='email' placeholder='email' />
                        <input type='password' placeholder='password' />
                        <span>Forgot password?</span>
                        <button className={styles.mainBtn} type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Change your password</h3>
                </div>
                <div className={styles.cardContent}>
                    <form>
                        <input type='password' placeholder='password' />
                        <input type='password' placeholder='password' />
                        <button className={styles.mainBtn} type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Change your username</h3>
                </div>
                <div className={styles.cardContent}>
                    <form>
                        <input type='text' placeholder='username' />
                        <button className={styles.mainBtn} type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account
