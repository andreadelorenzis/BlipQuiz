import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import search from "../../assets/search.png";
import plus from "../../assets/plus.png";
import Deck from './Deck/Deck';
import DeckEditor from './DeckEditor/DeckEditor';
import { useDeck } from '../../context/DecksProvider';

function Dashboard() {
    const [editorOpen, setEditorOpen] = useState(false);
    const decks = useDeck().state;

    const toggleEditor = () => {
        if (editorOpen) {
            setEditorOpen(false);
            document.body.style.overflow = "auto";
        } else {
            setEditorOpen(true);
            document.body.style.overflow = "hidden";
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.buttonsBar}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder='Search' />
                    <img className={styles.searchImg} src={search} alt="search" />
                </div>
                <button className={styles.addBtn} onClick={toggleEditor}>
                    <p>Add new deck</p>
                    <img src={plus} alt="" />
                </button>
            </div>
            <div className={styles.decksContainer}>
                {decks.length == 0
                    ? <div className={styles.noDecks}>
                        <p className={styles.noDecks}>No decks yet</p>
                        <button className={styles.mainBtn}>Add a deck</button>
                    </div>
                    : null}
                {decks.map((deck: any) => {
                    return (
                        <Deck
                            key={deck.id}
                            deck={deck}
                        />
                    )
                })}
            </div>
            <DeckEditor open={editorOpen} onClose={toggleEditor} isNew={false} />
        </div>
    )
}

export default Dashboard