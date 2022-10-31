import React from 'react'
import styles from './DeckResults.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import CircularProgressBar from './CircularProgressBar/CircularProgressBar'

type QuizResultsProps = {
    open: boolean,
    onClose: any,
}

function DeckResults({ open, onClose }: QuizResultsProps) {
    const { deckID } = useParams();
    const navigate = useNavigate();

    if (!open) return null;

    return (
        <div className={styles.results}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <h2>Deck finished!</h2>
                <p>You have studied all the cards in this deck.</p>
                <p>Your knowledge of the cards in this deck is:</p>
                <CircularProgressBar />
                <em>Cards with less than perfect will be added to the review section</em>
                <div className={styles.buttons}>
                    {<button onClick={() => { navigate(`/deck${deckID}`) }} className={styles.btn}>Finish</button>}
                </div>
                <span>How does all cards work?</span>
            </div>
        </div>
    )
}

export default DeckResults
