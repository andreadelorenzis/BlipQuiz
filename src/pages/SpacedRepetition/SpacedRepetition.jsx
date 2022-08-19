import React, { useEffect, useState } from 'react'
import data from "../../data/MockData.json";
import { Link, useParams } from "react-router-dom"
import styles from "./SpacedRepetition.module.css";
import arrow from "../../assets/arrow.png";
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Flashcard from '../../components/Flashcard/Flashcard';
import { FlashcardType } from '../../components/Flashcard/FlashcardType';
import QuizResults from './QuizResults/QuizResults';

function SpacedRepetition() {
    const SESSION = 10;

    const { deckID } = useParams();
    const [cardCounter, setCardCounter] = useState(0);
    const [currentCard, setCurrentCard] = useState(1);
    const [nCardsToStudy, setNCardsToStudy] = useState(SESSION);
    const [showResults, setShowResults] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (nCards >= SESSION ? SESSION : nCards) {
            setNCardsToStudy(nCards >= SESSION ? SESSION : nCards);
        }
    }, []);

    const submit = (result) => {
        console.log(result);
        if (currentCard == nCards) {
            setFinished(true);
        }
        if ((cardCounter + 1) % SESSION == 0 || currentCard == nCards) {
            // after 0.2 seconds, show results and reset counter
            setTimeout(() => {
                setShowResults(true);
                setCardCounter(0);
                setNCardsToStudy(nCards - currentCard >= SESSION
                    ? SESSION
                    : nCards - currentCard);
            }, 200);
        }
        if (currentCard < nCards) {
            setCurrentCard(currentCard + 1);
        }
        setCardCounter(cardCounter + 1);
    }

    const nCards = data.decks[deckID].cards.length;
    const card = data.decks[deckID].cards[currentCard - 1];

    return (
        <div>
            <nav className={styles.nav}>
                <Link to="/Dashboard">
                    <img src={arrow} alt="arrow" />
                    <p>Sistemi operativi</p>
                </Link>
            </nav>
            <div className={styles.content}>
                <div className={styles.progressBar}>
                    <ProgressBar nCards={nCardsToStudy} currentCard={cardCounter} />
                </div>
                <div className={styles.card}>
                    <Flashcard card={card} type={FlashcardType.quiz} onSubmit={submit} />
                </div>
            </div>
            <QuizResults open={showResults} onClose={() => setShowResults(false)} finished={finished} />
        </div>
    )
}

export default SpacedRepetition
