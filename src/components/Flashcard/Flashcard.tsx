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

function Flashcard({ card: { question, answer }, type, onSubmit }: FlashcardProps) {

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
                        {cardContent("Question", question)}
                        <div className={styles.toolbar}>
                            <button onClick={flip} className={styles.mainBtn}>
                                {type == FlashcardType.view ? 'Flip' : 'Show answer'}
                            </button>
                        </div>
                    </div>
                    <div className={styles.cardBack}>
                        {cardContent("Answer", answer)}
                        <div className={styles.toolbar}>
                            {type == FlashcardType.view
                                ? <button onClick={flip} className={styles.mainBtn}>Flip</button>
                                : <div className={styles.resultBtns}>
                                    <div className={styles.btnContainer}>
                                        <button onClick={() => submit(1)} className={styles.btn1}>1</button>
                                        <span>Again</span>
                                    </div>
                                    <div className={styles.btnContainer}>
                                        <button onClick={() => submit(2)} className={styles.btn2}>2</button>
                                        <span>Hard</span>
                                    </div>
                                    <div className={styles.btnContainer}>
                                        <button onClick={() => submit(3)} className={styles.btn3}>3</button>
                                        <span>Medium</span>
                                    </div>
                                    <div className={styles.btnContainer}>
                                        <button onClick={() => submit(4)} className={styles.btn4}>4</button>
                                        <span>Easy</span>
                                    </div>
                                    <div className={styles.btnContainer}>
                                        <button onClick={() => submit(5)} className={styles.btn5}>5</button>
                                        <span>Perfect</span>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div >
            <EditCard open={editOpen} onClose={toggleEditor} content={{ question, answer }} />
        </>
    )
}

export default Flashcard
