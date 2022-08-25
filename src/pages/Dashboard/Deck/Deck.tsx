import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Deck.module.css"
import dots from "../../../assets/dots.png"
import tickBlue from "../../../assets/tick_blue.png"
import tickWhite from "../../../assets/tick_white.png"
import plus from "../../../assets/plus2.png"
import CardOverview from '../../../components/CardOverview/StudyOverview'

type DeckProps = {
    deck: any;
};

function Deck({ deck }: DeckProps) {

    const navigate = useNavigate();

    const calculateProgress = () => {
        return (deck.nCardsStudied / nCards) * 100;
    }

    const openDeck = () => {
        navigate("/deck" + deck.id);
    }

    const nCards = deck.cards.length;

    let content;
    if (nCards > 0) {
        content = (
            <div className={styles.data}>
                {deck.nCardsStudied == nCards
                    ? <span>You studied all the cards of this deck!</span>
                    : <span>{deck.nCardsStudied} of {nCards} card{nCards > 0 ? "s" : ""} studied</span>}
                <div className={styles.progress}>
                    <div className={styles.bar}>
                        <div style={{
                            width: calculateProgress() + "%",
                            borderRadius: calculateProgress() == 100.0
                                ? "5px"
                                : "5px 1px 1px 5px"
                        }}></div>
                    </div>
                    {calculateProgress() == 100.0
                        ? <img src={tickBlue} className={styles.tickImg} />
                        : <img src={tickWhite} className={styles.tickImg} />}
                </div>
                <div className={styles.deckOverview}>
                    <CardOverview values={{
                        new: 0,
                        learning: 0,
                        review: 0
                    }} />
                </div>
            </div>
        )
    } else {
        content =
            <div>
                <p className={styles.noCards}>No cards in this deck.</p>
                <button className={styles.addBtn}>
                    Add cards
                    <img src={plus} alt="" />
                </button>
            </div>
    }

    return (
        <div onClick={openDeck} className={styles.deck}>
            <div className={styles.top}>
                <h3>{deck.name}</h3>
                <span>{nCards} card{nCards > 0 ? "s" : ""}</span>
                <img src={dots} alt="edit" className={styles.editImg} />
            </div>
            <div className={styles.bottom}>
                {content}
            </div>
        </div>
    )
}

export default Deck
