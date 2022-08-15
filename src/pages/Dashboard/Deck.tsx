import React from 'react'
import styles from "./Deck.module.css"
import dots from "../../assets/dots.png"
import tickBlue from "../../assets/tick_blue.png"
import tickWhite from "../../assets/tick_white.png"

type DeckProps = {
    name: string;
    nCards: number;
    nCardsStudied: number;
};

function Deck({ name, nCards, nCardsStudied }: DeckProps) {

    const calculateProgress = () => {
        return (nCardsStudied / nCards) * 100;
    }

    let content;
    if (nCards > 0) {
        content = (
            <div className={styles.data}>
                {nCardsStudied == nCards
                    ? <span>You studied all the cards of this deck!</span>
                    : <span>{nCardsStudied} of {nCards} card{nCards > 0 ? "s" : ""}</span>}
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
            </div>
        )
    } else {
        content = <button className={styles.addBtn}>Add cards</button>
    }


    return (
        <div className={styles.deck}>
            <div className={styles.top}>
                <h3>{name}</h3>
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
