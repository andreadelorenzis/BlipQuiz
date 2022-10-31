import React, { useState } from 'react'
import styles from './Flashcard.module.css'
import edit from '../../assets/edit.png';
import trash from '../../assets/trash.png';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import EditCard from "../EditCard/EditCard";
import { FlashcardType } from "./FlashcardType";

type FlashcardProps = {
    card: any,
    type: string,
    onSubmit: any
}

function Flashcard({ card, type, onSubmit }: FlashcardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [editOpen, setEditOpen] = useState(false);

    const flip = () => {
        setIsFlipped(!isFlipped);
    }

    const toggleEditor = () => {
        if (editOpen) {
            setEditOpen(false);
            document.body.style.overflow = "auto";
        } else {
            setEditOpen(true);
            document.body.style.overflow = "hidden";
        }
    }

    const submit = (result: number) => {
        flip();
        onSubmit(result);
    }

    function cardContent(type: string, content: string): JSX.Element {
        return (
            <div className={styles.cardContent}>
                <div className={styles.header}>
                    <p>{type}</p>
                    <img src={edit} alt="edit" onClick={toggleEditor} />
                    <img src={trash} alt="trash" />
                </div>
                <div className={styles.body}>
                    <ReactMarkdown>
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={`${isFlipped ? styles.flipped : ''} ${styles.card}`}>
                <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                        {cardContent("Question", card.question)}
                        <div className={styles.toolbar}>
                            <button onClick={flip} className={styles.mainBtn}>
                                {type == FlashcardType.view ? 'Flip' : 'Show answer'}
                            </button>
                        </div>
                    </div>
                    <div className={styles.cardBack}>
                        {cardContent("Answer", card.answer)}
                        <div className={styles.toolbar}>
                            {type == FlashcardType.view
                                ? <button onClick={flip} className={styles.mainBtn}>Flip</button>
                                : <div className={styles.resultBtns}>
                                    <div className={styles.btnContainer}>
                                        <span>1min</span>
                                        <button onClick={() => submit(1)} className={styles.btn1}>Again</button>
                                    </div>
                                    <div className={styles.btnContainer}>
                                        <span>6min</span>
                                        <button onClick={() => submit(2)} className={styles.btn2}>Hard</button>
                                    </div>
                                    <div className={styles.btnContainer}>
                                        <span>10min</span>
                                        <button onClick={() => submit(3)} className={styles.btn3}>Good</button>
                                    </div>
                                    <div className={styles.btnContainer}>
                                        <span>3d</span>
                                        <button onClick={() => submit(4)} className={styles.btn4}>Easy</button>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div >
            <EditCard open={editOpen} onClose={toggleEditor} card={card} />
        </>
    )
}

export default Flashcard
