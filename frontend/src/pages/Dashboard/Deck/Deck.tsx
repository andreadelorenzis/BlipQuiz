import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Deck.module.css"
import dots from "../../../assets/dots.png"
import tickBlue from "../../../assets/tick_blue.png"
import tickWhite from "../../../assets/tick_white.png"
import plus from "../../../assets/plus2.png"
import trash from "../../../assets/trash.png"
import edit from "../../../assets/edit.png"
import CardOverview from '../../../components/CardOverview/StudyOverview'
import { useDeck } from '../../../context/DecksProvider'

type DeckProps = {
    deck: any;
    toggleDeckEditor: Function;
};

function Deck({ deck, toggleDeckEditor }: DeckProps) {
    const [editMenu, setEditMenu] = React.useState(false);
    const nCards = deck.cards.length;
    let content;
    const navigate = useNavigate();
    const dispatch = useDeck().dispatch;

    const calculateProgress = () => {
        return (deck.nCardsStudied / nCards) * 100;
    }

    const openDeck = () => {
        navigate("/deck" + deck.id);
    }

    const toggleEditMenu = (e: any) => {
        // prevent event from bubbling up to the parent
        e.stopPropagation();
        setEditMenu(!editMenu);
        // close edit menu when clicking outside or on another deck
        document.addEventListener("click", (e) => {
            if (e.target != document.getElementById("editMenu")) {
                setEditMenu(false);
            }
        });
    }

    const deleteDeck = () => {
        dispatch({ type: "REMOVE_DECK", payload: { id: deck.id } });
    }

    const editDeck = () => {
        toggleDeckEditor(deck);
    }

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
                <div className={styles.edit} onClick={toggleEditMenu}>
                    <img className={styles.dots} src={dots} alt="edit" />
                    <div id='editMenu' className={styles.editMenu} style={editMenu ? { display: 'block' } : { display: 'none' }}>
                        <button onClick={editDeck}><img src={edit} /> Edit</button>
                        <button onClick={deleteDeck}><img src={trash} /> Delete</button>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                {content}
            </div>
        </div>
    )
}

export default Deck
