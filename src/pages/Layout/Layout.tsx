import React, { useEffect, useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import { useAuth } from '../../auth/AuthProvider';

export default function Layout() {
    const linksRef: any = React.useRef(null);
    let auth = useAuth();
    let navigate = useNavigate();
    const location = useLocation();

    const [menuOpened, setMenuOpened] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    // da cancellare
    useEffect(() => {
        auth.signin("sdf", "sdf", () => {
            console.log("signed in");
        });
    }, []);
    // -----------------

    useEffect(() => {
        // check if the url is /login and the user is not logged in
        if (location.pathname === "/login" && !auth.user) {
            setLoginOpen(true);
        }

        // check if the url is /login and the user is logged in (redirect to dashboard)
        if (location.pathname === "/login" && auth.user) {
            setLoginOpen(false);
            navigate("/dashboard");
        }
    }, [auth.user, location]);

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

        if (loginOpen && menuOpened) {
            toggleMenu();
        }
    }

    const toggleSignup = () => {
        if (!loginOpen) {
            setSignupOpen(!signupOpen);
        }

        if (signupOpen && menuOpened) {
            toggleMenu();
        }
    }

    const handleLogout = () => {
        auth.signout(() => {
            console.log("logged out");
            navigate("/");
        });
        toggleMenu();
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
            {auth.user
                ? (<nav className={styles.nav}>
                    <Link to="/">
                        <img src={logo} alt="BlipQuiz" className={styles.logo} />
                    </Link>
                    <div className={styles.userButton} onClick={toggleMenu}>
                        <div className={styles.circle}>
                            A
                        </div>
                        <img src={arrow} />
                        <div ref={linksRef} className={styles.linksLogged} style={menuOpened
                            ? { display: "block" }
                            : { display: "none" }}>
                            <ul>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li className={styles.dot}><Link to="/review">Review</Link></li>
                                <li><Link to="/profile">View profile</Link></li>
                                <li><Link to="/account">Manage account</Link></li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                            <div className={styles.navFooter}>
                                <button>Go premium</button>
                            </div>
                        </div>
                    </div>
                </nav>)
                : (<nav className={styles.nav}>
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
                </nav>)}

            <Outlet />
            <Login open={loginOpen} onClose={toggleLogin} />
            <Signup open={signupOpen} onClose={toggleSignup} />
        </div>
    )
}
