import React, { useState } from 'react'
import styles from "./EditCard.module.css"
import close from "../../assets/close.png"
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import CardEditor from './CardEditor/CardEditor';

type EditCardProps = {
    open: boolean;
    onClose: Function;
    content: {
        question: string;
        answer: string;
    }
};

function EditCard({ open, onClose, content }: EditCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    if (!open) return null;

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    const emptyContent = {
        question: "",
        answer: ""
    }

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <img src={close} alt="close" onClick={() => onClose()} className={styles.close} />
                <h3 className={styles.title}>{content == null ? "Add card" : "Edit card"}</h3>
                <ToggleSwitch onClick={flipCard} />
                <CardEditor isFlipped={isFlipped} content={content == null ? emptyContent : content} />
                <div className={styles.buttons}>
                    <button onClick={() => onClose()} className={styles.cancel}>Cancel</button>
                    <button className={styles.save}>{content == null ? "Create" : "Save"}</button>
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
