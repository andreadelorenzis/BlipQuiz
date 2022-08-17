import React, { useState } from 'react'
import data from "../../data/MockData.json";
import arrow from "../../assets/arrow.png";
import list from "../../assets/list.png";
import search from "../../assets/search.png";
import plus from "../../assets/plus_blue.png";
import styles from "./DeckDetails.module.css";
import Flashcard from '../../components/Flashcard/Flashcard';
import { useParams } from 'react-router-dom';
import ModalityChoice from '../ModalityChoice/ModalityChoice';

function DeckDetails() {
    const { deckID } = useParams();

    const [choiceModal, setChoiceModal] = useState(false);

    const toggleChoiceModal = () => {
        setChoiceModal(!choiceModal);
    }

    return (
        <div className={styles.container}>
            <div className={styles.navBtn}>
                <img src={arrow} alt="arrow" />
                <span>Dashboard</span>
            </div>
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
                <div className={styles.addBtn}>
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
                    return <Flashcard key={card.id} card={card} />
                })}
            </div>
            <ModalityChoice
                open={choiceModal}
                onClose={toggleChoiceModal}
                deck={data.decks[deckID]} />
        </div>
    )
}

export default DeckDetails
