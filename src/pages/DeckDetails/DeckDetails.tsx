import React, { useState } from 'react'
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
import CardOverview from '../../components/CardOverview/StudyOverview';
import { useDeck } from '../../context/DecksProvider';

function DeckDetails() {
    const [choiceModal, setChoiceModal] = useState(false);
    const [cardEditorOpen, setCardEditorOpen] = useState(false);
    const { deckID } = useParams() as any;
    const decks = useDeck().state;
    const deck: any = decks.find((deck: any) => deck.id == deckID);

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
            <div className={styles.header}>
                <h3>{deck.name}</h3>
                <div className={styles.deckOverview}>
                    <CardOverview values={{
                        new: 0,
                        learning: 0,
                        review: 0
                    }} />
                </div>
                <button onClick={toggleChoiceModal} className={styles.mainBtn}>Study</button>
            </div>
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
                {deck.cards.length == 0
                    ? <div className={styles.noCards}>
                        <p>No Cards in this deck yet</p>
                        <button className={styles.mainBtn}>Create a card</button>
                    </div>
                    : null}
                {deck.cards.map((card: any) => {
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
                deck={decks[deckID]} />
            <EditCard
                open={cardEditorOpen}
                onClose={toggleEditor}
                content={null} />
        </div>
    )
}

export default DeckDetails
