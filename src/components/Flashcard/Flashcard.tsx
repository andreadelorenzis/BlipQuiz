import React, { useState } from 'react'
import styles from './Flashcard.module.css'
import edit from '../../assets/edit.png';
import trash from '../../assets/trash.png';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import EditCard from "../EditCard/EditCard";

type FlashcardProps = {
    card: any
}

function Flashcard({ card: { question, answer } }: FlashcardProps) {

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
                <div className={styles.toolbar}>
                    <button onClick={flip} className={styles.mainBtn}>Flip</button>
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
                    </div>
                    <div className={styles.cardBack}>
                        {cardContent("Answer", answer)}
                    </div>
                </div>
            </div >
            <EditCard open={editOpen} onClose={toggleEditor} content={{ question, answer }} />
        </>
    )
}

export default Flashcard
