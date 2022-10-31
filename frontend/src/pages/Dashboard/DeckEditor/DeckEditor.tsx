import React, { useEffect, useState } from 'react'
import styles from "./DeckEditor.module.css"
import close from "../../../assets/close.png"
import { useDeck } from '../../../context/DecksProvider';

type DeckEditorProps = {
    open: boolean;
    onClose: Function;
    deck: any;
};

function DeckEditor({ open, onClose, deck }: DeckEditorProps) {
    const [name, setName] = useState("");
    const dispatch = useDeck().dispatch;

    useEffect(() => {
        if (deck) {
            setName(deck.name);
        }
    }, [deck]);

    if (!open) return null;

    const handleChange = (e: any) => {
        setName(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (deck) {
            dispatch({
                type: "EDIT_DECK",
                payload: {
                    id: deck.id,
                    name: name
                }
            });
        } else {
            dispatch({
                type: "ADD_DECK",
                payload: {
                    id: Math.floor(Math.random() * 1000),
                    name: name,
                    cards: []
                }
            });
        }

        onClose();
    }

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <img src={close} alt="close" onClick={() => onClose()} className={styles.close} />
                <h3 className={styles.title}>{deck === '' ? "Create new deck" : "Edit deck"}</h3>
                <p>A deck is a set of card, for example a particular class</p>
                <form className={styles.form}>
                    <input type="text" placeholder='E.g General Physics' onChange={handleChange} value={name} />
                    <button type='submit' className={styles.mainBtn} onClick={handleSubmit}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default DeckEditor
