import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../../auth/AuthProvider';
import styles from "./LandingPage.module.css";
import wave from "../../assets/wave.svg";
import wave2 from "../../assets/wave4.svg";
import card from "../../assets/flash-cards.png";
import hourglass from "../../assets/hourglass.png";
import stats from "../../assets/stats.png";
import offline from "../../assets/offline.png";
import key from "../../assets/key.png";
import share from "../../assets/share.png";
import balls from "../../assets/balls.png";
import balls2 from "../../assets/balls2.png";
import balls3 from "../../assets/balls3.png";

export default function LandingPage({ desktop }: { desktop: boolean }) {
    const [desktopDevice, setDesktopDevice] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateDeviceSize);
        updateDeviceSize();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateDeviceSize);
        }
    }, []);

    // TODO: add device detection in global state
    const updateDeviceSize = () => {
        if (window.innerWidth > 800) {
            setDesktopDevice(true);
        } else {
            setDesktopDevice(false);
        }
    }

    function handleScroll() {
        setTopOffset(topOffset - window.pageYOffset);
        if (bottomRef.current != null && bottomRef.current.getBoundingClientRect().top < 700) {
            setBottomOffset(bottomOffset - bottomRef.current.getBoundingClientRect().top + 645);
        }
    }

    const [topOffset, setTopOffset] = useState(60);
    const [bottomOffset, setBottomOffset] = useState(0);
    const bottomRef = useRef<any>(null);

    let auth = useAuth();
    const navigate = useNavigate();
    if (auth.user) {
        return <Navigate to={"/dashboard"} />
    }


    const callToAction = () => {
        navigate("/login");
    }

    return (
        <div className={styles.landing}>
            <header style={{ backgroundImage: "url(" + wave + ")" }}>
                <div className={styles.container}>
                    <h1>Create and learn flashcards easily with BlipQuiz</h1>
                    <button onClick={callToAction} className="mainBtn">Get started</button>
                </div>
            </header>
            <img className={styles.balls} src={desktopDevice ? balls2 : balls} style={{ top: topOffset }} />
            <section className={styles.section1}>
                <div className={styles.container}>
                    <h4>Main features</h4>
                    <h2>We offer the easiest tools to create and study flashcards</h2>
                    <button onClick={callToAction} className="mainBtn">I want to try it!</button>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <img src={card} alt="flashcard image" />
                            <h3>Create flashcards</h3>
                            <p>Creating your own set of flashcards is simple with our free flashcard maker
                                — just add a term and definition. You can even add an image from our library.
                                Once your flashcard set is complete, you can study and share it with friends.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src={hourglass} alt="hourglass image" />
                            <h3>Spaced repetition</h3>
                            <p>At QuizBlip, the online flashcards function uses spaced repetition to save you
                                time and achieve the best learning efficiency. With QuizBlip you can create as
                                many flashcards as you need and want, and they will always be in your pocket.
                                Start making one now!
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src={stats} alt="stats image" />
                            <h3>Watch the statistics</h3>
                            <p>Creating your own set of flashcards is simple with our free flashcard maker
                                — just add a term and definition. You can even add an image from our library.
                                Once your flashcard set is complete, you can study and share it with friends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 319"><path fill="#D8E7FF" fill-opacity="1" d="M0,64L34.3,96C68.6,128,137,192,206,234.7C274.3,277,343,299,411,282.7C480,267,549,213,617,208C685.7,203,754,245,823,261.3C891.4,277,960,267,1029,224C1097.1,181,1166,107,1234,80C1302.9,53,1371,75,1406,85.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <section className={styles.section2} style={{ backgroundImage: "url(" + wave2 + ")" }}>
                <div className={styles.container}>
                    <h4>Other features</h4>
                    <h2>Offering you an app experience, with web technologies</h2>
                    <div className={styles.itemsContainer}>
                        <div className={styles.item}>
                            <img src={offline} alt="offline" />
                            <h3>Works offline</h3>
                            <p>To use QuizBlip offline, add the website to you mobile homepage. Then you can
                                start reviewing your cards in offline mode. At QuizBlip, the online flashcards
                                cane be shared with your friends.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <img src={key} alt="key" />
                            <h3>Passwordless login</h3>
                            <p>Making sure your personal details are safe and not having to use a password helps
                                to keep your data safe. We can’t lose your password if you do not have one.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <img src={share} alt="share" />
                            <h3>Share with friends</h3>
                            <p>At QuizBlip, the online flashcards cane be shared with your friends. That won’t have
                                to create an account, they can just study your cards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section3} ref={bottomRef}>
                <div className={styles.container}>
                    <h2>Maximise your learning outcome today</h2>
                    <button onClick={callToAction} className="mainBtn">Get started</button>
                </div>
            </section>
            <footer>BlipQuiz.io 2022</footer>
            <img className={styles.balls} src={desktopDevice ? balls3 : balls} style={{ bottom: bottomOffset }} />
        </div>
    )
}
