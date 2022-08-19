import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './QuizResults.module.css'

type QuizResultsProps = {
    open: boolean,
    onClose: any,
    finished: boolean
}

function QuizResults({ open, onClose, finished }: QuizResultsProps) {
    const { deckID } = useParams();
    const navigate = useNavigate();

    if (!open) return null;

    return (
        <div className={styles.results}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <h2>Ottimo lavoro, Andrea!</h2>
                <p>You studied 10 elements.</p>
                <p>There are 23 other cards to study.</p>
                <div className={styles.buttons}>
                    {!finished ? <button onClick={onClose} className={styles.btn}>Continue to study</button> : null}
                    <button onClick={() => { navigate(`/deck${deckID}`) }} className={styles.btn2}>Close</button>
                </div>
                <span>How does spaced repetition work?</span>
            </div>
        </div>
    )
}

export default QuizResults
