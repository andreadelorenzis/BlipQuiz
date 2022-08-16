import React, { useEffect } from 'react'
import data from "../../data/MockData.json";
import arrow from "../../assets/arrow.png";
import list from "../../assets/list.png";
import search from "../../assets/search.png";
import plus from "../../assets/plus_blue.png";
import styles from "./DeckDetails.module.css";
import Flashcard from '../../components/Flashcard/Flashcard';
import { useParams } from 'react-router-dom';

function DeckDetails() {
    const { deckID } = useParams();

    useEffect(() => {
        console.log(deckID);
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.navBtn}>
                <img src={arrow} alt="arrow" />
                <span>Dashboard</span>
            </div>
            <h3>Sistemi operativi</h3>
            <button className={styles.mainBtn}>Study</button>
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
                {data.decks[deckID - 1].cards.length == 0
                    ? <div className={styles.noCards}>
                        <p>No Cards in this deck yet</p>
                        <button className={styles.mainBtn}>Create a card</button>
                    </div>
                    : null}
                {data.decks[deckID - 1].cards.map((card) => {
                    return <Flashcard key={card.id} card={card} />
                })}
            </div>
        </div>
    )
}

export default DeckDetails
