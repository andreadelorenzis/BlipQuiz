import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import styles from './Account.module.css'

function Account() {
    const user = useAuth().user;
    const [inputs, setInputs] = useState({
        'newEmail': '',
        'email': '',
        'password1': '',
        'password2': '',
        'newUsername': '',
    });

    // use name of input to set the value of the state
    const handleChange = (e: any) => {
        setInputs((prevstate: any) => {
            return {
                ...prevstate,
                [e.target.name]: e.target.value
            }
        });
    }

    const changeEmail = (e: any) => {
        e.preventDefault();
        console.log("New email: " + inputs.newEmail);
    }

    const changePassword = (e: any) => {
        e.preventDefault();
        console.log("New password: " + inputs.password2);
    }

    const changeUsername = (e: any) => {
        e.preventDefault();
        console.log("New username: " + inputs.newUsername);
    }

    const deleteAccount = (e: any) => {
        e.preventDefault();
        console.log("Delete account");
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Change your email</h3>
                </div>
                <div className={styles.cardContent}>
                    <p className={styles.email}>Your email is currently <span>{user.email}</span></p>
                    <form>
                        <input name='newEmail' value={inputs.newEmail || ''} type='email' placeholder='New email' onChange={handleChange} />
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
                        <input name='password2' value={inputs.password2 || ''} type='password' placeholder='password' onChange={handleChange} />
                        <input type='confirmPassword' value={inputs.password2 || ''} placeholder='password' onChange={handleChange} />
                        <button className={styles.mainBtn} type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Change your username</h3>
                </div>
                <div className={styles.cardContent}>
                    <p className={styles.name}>Your current username is <span>{user.username}</span></p>
                    <form>
                        <input name='username1' value={inputs.newUsername || ''} type='text' placeholder='New username' onChange={handleChange} />
                        <button className={styles.mainBtn} type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Delete your account</h3>
                </div>
                <div className={styles.cardContent}>
                    <p>Careful! This will delete all of your data and cannote be undone.</p>
                    <p className={styles.confirm}>Please, type <span>{user.email}</span> to confirm</p>
                    <form>
                        <input name='email' value={inputs.email || ''} type='text' placeholder='Type email' onChange={handleChange} />
                        <button
                            className={styles.deleteBtn}
                            type='submit'
                            disabled={inputs.email !== user.email}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account
