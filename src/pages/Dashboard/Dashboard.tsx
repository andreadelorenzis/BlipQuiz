import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import search from "../../assets/search.png";
import plus from "../../assets/plus.png";
import data from "../../data/MockData.json";
import Deck from './Deck/Deck';
import DeckEditor from './DeckEditor/DeckEditor';

function Dashboard() {

    const [editorOpen, setEditorOpen] = useState(false);

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
                    <img src={plus} alt="" />
                </button>
            </div>
            <div className={styles.decksContainer}>
                {data.decks.length == 0
                    ? <div className={styles.noDecks}>
                        <p className={styles.noDecks}>No decks yet</p>
                        <button className={styles.mainBtn}>Add a deck</button>
                    </div>
                    : null}
                {data.decks.map((deck: any) => {
                    return (
                        <Deck
                            id={deck.id}
                            name={deck.name}
                            nCards={deck.nCards}
                            nCardsStudied={deck.nCardsStudied}
                        />
                    )
                })}
            </div>
            <DeckEditor open={editorOpen} onClose={toggleEditor} isNew={true} />
        </div>
    )
}

export default Dashboard