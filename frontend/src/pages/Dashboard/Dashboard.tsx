import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import search from "../../assets/search.png";
import plus from "../../assets/plus.png";
import Deck from './Deck/Deck';
import DeckEditor from './DeckEditor/DeckEditor';
import { useDeck } from '../../context/DecksProvider';
import { useAuth } from '../../context/AuthProvider';
import axios from 'axios';

function Dashboard() {
    const [editorOpen, setEditorOpen] = useState(false);
    const [deck, setDeck] = useState(null);
    const decks = useDeck().state;
    const auth = useAuth();

    useEffect(() => {
        if (auth.token) {
            fetchData(auth.token);
        }
    }, [auth.token]);

    const fetchData = async (token: String) => {
        const res = await axios.get('https://blipquiz.onrender.com/api/decks', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        console.log(res.data);
    }

    const toggleEditor = (deck: any) => {
        // if deckName is passed, it means we are editing an existing deck
        if (deck) {
            setDeck(deck);
        } else {
            setDeck(null);
        }

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
                <button className={styles.addBtn} onClick={() => toggleEditor(null)}>
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
                            toggleDeckEditor={toggleEditor}
                        />
                    )
                })}
            </div>
            {editorOpen ? <DeckEditor open={editorOpen} onClose={toggleEditor} deck={deck} /> : null}
        </div>
    )
}

export default Dashboard