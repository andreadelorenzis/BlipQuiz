import React, { useState } from 'react'
import data from "../../data/MockData.json";
import arrow from "../../assets/arrow.png";
import list from "../../assets/list.png";
import search from "../../assets/search.png";
import plus from "../../assets/plus_blue.png";
import styles from "./DeckDetails.module.css";
import Flashcard from '../../components/Flashcard/Flashcard';
import { useParams, Link } from 'react-router-dom';
import ModalityChoice from '../ModalityChoice/ModalityChoice';
import EditCard from '../../components/EditCard/EditCard';
import { FlashcardType } from '../../components/Flashcard/FlashcardType';

function DeckDetails() {
    const { deckID } = useParams() as any;

    const [choiceModal, setChoiceModal] = useState(false);
    const [cardEditorOpen, setCardEditorOpen] = useState(false);

    const toggleChoiceModal = () => {
        if (choiceModal) {
            setChoiceModal(false);
            document.body.style.overflow = "auto";
        } else {
            setChoiceModal(true);
            document.body.style.overflow = "hidden";
        }
    }

    const toggleEditor = () => {
        if (cardEditorOpen) {
            setCardEditorOpen(false);
            document.body.style.overflow = "auto";
        } else {
            setCardEditorOpen(true);
            document.body.style.overflow = "hidden";
        }
    }

    return (
        <div className={styles.container}>
            <Link to={"/dashboard"} className={styles.navBtn}>
                <img src={arrow} alt="arrow" />
                <span>Dashboard</span>
            </Link>
            <h3>Sistemi operativi</h3>
            <button onClick={toggleChoiceModal} className={styles.mainBtn}>Study</button>
            <div className={styles.searchBar}>
                <input type="text" placeholder='Search' />
                <img className={styles.searchImg} src={search} alt="search" />
            </div>
            <div className={styles.buttonBar}>
                <select name="" id="">
                    <option value="list" >
                        <img src={list} /> List view
                    </option>
                </select>
                <div onClick={toggleEditor} className={styles.addBtn}>
                    <span>Add</span>
                    <img src={plus} />
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {data.decks[deckID].cards.length == 0
                    ? <div className={styles.noCards}>
                        <p>No Cards in this deck yet</p>
                        <button className={styles.mainBtn}>Create a card</button>
                    </div>
                    : null}
                {data.decks[deckID].cards.map((card) => {
                    return <div className={styles.card}>
                        <Flashcard
                            key={card.id}
                            card={card}
                            type={FlashcardType.view}
                            onSubmit={null} />
                    </div>
                })}
            </div>
            <ModalityChoice
                open={choiceModal}
                onClose={toggleChoiceModal}
                deck={data.decks[deckID]} />
            <EditCard
                open={cardEditorOpen}
                onClose={toggleEditor}
                content={null} />
        </div>
    )
}

export default DeckDetails
