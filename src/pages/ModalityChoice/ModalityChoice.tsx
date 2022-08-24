import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from "./ModalityChoice.module.css";
import close from "../../assets/close.png";
import hourglass from "../../assets/hourglass_white.png";
import cards from "../../assets/cards.png";

type ModalityChoiceProps = {
    open: boolean;
    onClose: Function;
    deck: any;
}

function ModalityChoice({ open, onClose, deck }: ModalityChoiceProps) {
    const navigate = useNavigate();

    if (!open) return null;

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <img src={close} alt="close" onClick={() => onClose()} className={styles.close} />
                <h2 className={styles.title}>Choose the modality</h2>
                <div className={styles.choices}>
                    <div className={styles.choice}>
                        <div onClick={() => navigate(`/deck${deck.id}/spaced_repetition`)} className={styles.button}>
                            <img src={hourglass} alt="hourglass" />
                            <p>Spaced repetition</p>
                        </div>
                        <div className={styles.text}>
                            <p>Study only the cards you don’t know very well. Maximum study efficacy!</p>
                            <p className={styles.cardsToStudy}>You have <span>{deck.cardsStudied}</span> cards to study.</p>
                        </div>
                    </div>
                    <div className={styles.choice}>
                        <div onClick={() => navigate(`/deck${deck.id}/all_cards`)} className={styles.button}>
                            <img src={cards} alt="cards" />
                            <p>All cards</p>
                        </div>
                        <div className={styles.text}>
                            <p>Repeat all the cards in the deck. Check your knowledge of this deck!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalityChoice
