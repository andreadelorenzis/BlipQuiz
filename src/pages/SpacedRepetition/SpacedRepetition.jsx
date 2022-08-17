import React from 'react'
import data from "../../data/MockData.json";
import { Link, useParams } from "react-router-dom"
import styles from "./SpacedRepetition.module.css";
import arrow from "../../assets/arrow.png";
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Flashcard from '../../components/Flashcard/Flashcard';

function SpacedRepetition() {
    const { deckID } = useParams();

    const nCards = data.decks[deckID].nCards;
    const card = data.decks[deckID].cards[0];
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
                    <ProgressBar nCards={nCards} currentCard={1} />
                </div>
                <div className={styles.card}>
                    <Flashcard card={card} />
                </div>
            </div>
        </div>
    )
}

export default SpacedRepetition
