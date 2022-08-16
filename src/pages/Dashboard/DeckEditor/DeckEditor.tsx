import React, { useState } from 'react'
import styles from "./DeckEditor.module.css"
import close from "../../../assets/close.png"

type DeckEditorProps = {
    open: boolean;
    onClose: Function;
    isNew: boolean;
};

function DeckEditor({ open, onClose, isNew }: DeckEditorProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    if (!open) return null;

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <img src={close} alt="close" onClick={() => onClose()} className={styles.close} />
                <h3 className={styles.title}>{isNew ? "Create new deck" : "Edit deck"}</h3>
                <p>A deck is a set of card, for example a particular class</p>
                <form className={styles.form}>
                    <input type="text" placeholder='E.g General Physics' />
                    <button type='submit' className={styles.mainBtn}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default DeckEditor
