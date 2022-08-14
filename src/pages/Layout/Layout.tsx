import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';

export default function Layout() {

    const [menuOpened, setMenuOpened] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const toggleMenu = () => {
        if (menuOpened) {
            setMenuOpened(false);
            document.body.style.overflow = "auto";
        }
        else {
            setMenuOpened(true);
            document.body.style.overflow = "hidden";
        }
    }

    const toggleLogin = () => {
        if (!signupOpen) {
            setLoginOpen(!loginOpen);
        }
    }

    const toggleSignup = () => {
        if (!loginOpen) {
            setSignupOpen(!signupOpen);
        }
    }

    const menuItems = [
        {
            link: "Flashcards",
            path: "/info1"
        },
        {
            link: "Spaced repetition",
            path: "/info2"
        }
    ];

    return (
        <div>
            <nav className={styles.nav}>
                <Link to="/">
                    <img src={logo} alt="BlipQuiz" className={styles.logo} />
                </Link>
                {menuOpened
                    ? <img src={close} alt="close" className={styles.close} onClick={toggleMenu} />
                    : <img src={menu} alt="menu" className={styles.menu} onClick={toggleMenu} />}
                <div>

                    <ul className={styles.links} style={menuOpened ? { right: "0" } : { right: "-100%" }}>
                        <li onClick={toggleLogin}>Login</li>
                        <li onClick={toggleSignup}>Signup</li>
                        {
                            menuItems.map(item =>
                                <li key={item.link}>
                                    <Link to={item.path} onClick={toggleMenu}>
                                        {item.link}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
            <Outlet />
            <Login open={loginOpen} onClose={toggleLogin} />
            <Signup open={signupOpen} onClose={toggleSignup} />
        </div>
    )
}
