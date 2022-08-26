import React, { useEffect, useState } from 'react'
import data from "../../data/MockData.json";
import { Link, useParams } from "react-router-dom"
import styles from "./Quiz.module.css";
import arrow from "../../assets/arrow.png";
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Flashcard from '../../components/Flashcard/Flashcard';
import { FlashcardType } from '../../components/Flashcard/FlashcardType';
import QuizResults from './QuizResults/QuizResults';
import { QuizModality } from './QuizModality';
import DeckResults from "./DeckResults/DeckResults";
import StudyOverview from '../../components/CardOverview/StudyOverview';
import { useNotification } from '../../components/Notification/NotificationProvider';


type QuizProps = {
    quizModality: QuizModality
}

function Quiz({ quizModality }: QuizProps) {
    const SESSION = 10;

    const { deckID } = useParams() as any;
    const [cardCounter, setCardCounter] = useState(0);
    const [currentCard, setCurrentCard] = useState(1);
    const [nCardsToStudy, setNCardsToStudy] = useState(SESSION);
    const [showQuizResults, setShowQuizResults] = useState(false);
    const [showDeckResults, setShowDeckResults] = useState(false);
    const [finished, setFinished] = useState(false);
    const dispatch = useNotification();

    const handleNewNotification = (color: String, value: String) => {
        dispatch({
            color: color,
            message: "Card will be shown again in " + value
        });
    }

    useEffect(() => {
        if (nCards >= SESSION ? SESSION : nCards) {
            setNCardsToStudy(nCards >= SESSION ? SESSION : nCards);
        }
    }, []);

    const cards = quizModality == QuizModality.allCards
        ? data.decks[deckID].cards
        : data.decks[deckID].cardsToStudy;
    const nCards = cards.length;
    const card = cards[currentCard - 1];

    const submit = (result: any) => {
        // save result
        switch (result) {
            case 1:
                handleNewNotification("#FF523A", "1 min");
                break;
            case 2:
                handleNewNotification("#FFA43A", "5 min");
                break;
            case 3:
                handleNewNotification("#3A86FF", "1 hour");
                break;
            case 4:
                handleNewNotification("#91FF3A", "1 day");
                break;
        }

        // check end of session
        if (currentCard == nCards) {
            if (quizModality == QuizModality.allCards) {
                // after 0.2 seconds, show deck results
                setTimeout(() => {
                    setShowDeckResults(true);
                }, 200);
            } else {
                // after 0.2 seconds, show quiz results
                setTimeout(() => {
                    setFinished(true);
                    setShowQuizResults(true);
                }, 200);
            }
        } else {
            // check if session is finished
            if ((cardCounter + 1) % SESSION == 0) {
                // after 0.2 seconds, show results and reset counter
                setTimeout(() => {
                    setShowQuizResults(true);
                    setCardCounter(0);
                    setNCardsToStudy(nCards - currentCard >= SESSION
                        ? SESSION
                        : nCards - currentCard);
                }, 200);
            }
        }

        // update card counters
        if (currentCard < nCards) {
            setCurrentCard(currentCard + 1);
        }
        setCardCounter(cardCounter + 1);
    }

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link to="/Dashboard" className={styles.navBtn}>
                    <img src={arrow} alt="arrow" />
                    <p>Sistemi operativi</p>
                </Link>
            </nav>
            <div className={styles.content}>
                <div className={styles.studyOverview}>
                    <StudyOverview values={{
                        new: 0,
                        learning: 0,
                        review: 0
                    }} />
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar nCards={nCardsToStudy} currentCard={cardCounter} />
                </div>
                <div className={styles.card}>
                    <Flashcard card={card} type={FlashcardType.quiz} onSubmit={submit} />
                </div>
            </div>
            <QuizResults
                open={showQuizResults}
                onClose={() => setShowQuizResults(false)}
                finished={finished} />
            <DeckResults
                open={showDeckResults}
                onClose={() => setShowDeckResults(false)} />
        </div>
    )
}

export default Quiz
