import React, { useState, useEffect } from 'react'
import styles from "./EditCard.module.css"
import close from "../../assets/close.png"
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import CardEditor from './CardEditor/CardEditor';
import { useDeck } from "../../context/DecksProvider";
import { useParams } from "react-router-dom";

type EditCardProps = {
    open: boolean;
    onClose: Function;
    card: any
};

function EditCard({ open, onClose, card }: EditCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const dispatch = useDeck().dispatch;
    const { deckID } = useParams() as any;

    useEffect(() => {
        if (card) {
            setQuestion(card.question);
            setAnswer(card.answer);
        }
    }, [card]);

    if (!open) return null;

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    const closeEditor = () => {
        onClose();
        setIsFlipped(false);
        if (!card) {
            setQuestion("");
            setAnswer("");
        }
    }

    const handleChange = (event: any) => {
        if (isFlipped) {
            setAnswer(event.target.value);
        } else {
            setQuestion(event.target.value);
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (card) {
            dispatch({
                type: "EDIT_CARD",
                payload: {
                    deckID,
                    card: {
                        id: card.id,
                        question,
                        answer
                    }
                }
            });
        } else {
            dispatch({
                type: "ADD_CARD",
                payload: {
                    deckID,
                    card: {
                        id: Math.floor(Math.random() * 1000),
                        question,
                        answer
                    }
                }
            });
        }
        closeEditor();
    }

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <img src={close} alt="close" onClick={() => closeEditor()} className={styles.close} />
                <h3 className={styles.title}>{card ? "Edit card" : "Add card"}</h3>
                <ToggleSwitch onClick={flipCard} value1={"Front"} value2={"Back"} />
                <CardEditor isFlipped={isFlipped} content={{ question, answer }} handleChange={handleChange} />
                <div className={styles.buttons}>
                    <button onClick={() => closeEditor()} className={styles.cancel}>Cancel</button>
                    <button onClick={handleSubmit} className={styles.save}>{card ? "Save" : "Create"}</button>
                </div>
                <div className={styles.note}>
                    <p>This editor uses Markdown.
                        Don’t know how it works?</p>
                    <span>Quick tutorial</span>
                </div>
            </div>
        </div>
    )
}

export default EditCard
