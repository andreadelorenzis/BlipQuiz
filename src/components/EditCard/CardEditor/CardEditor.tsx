import React, { useEffect, useState } from 'react'
import styles from "./CardEditor.module.css"
import italic from "../../../assets/italic.png";
import bold from "../../../assets/bold.png";
import imgIcon from "../../../assets/img_icon.png";
import eye from "../../../assets/eye.png";
import eyeClosed from "../../../assets/eye_closed.png";
import ReactMarkdown from "react-markdown";

type FlashcardProps = {
    isFlipped: boolean,
    content: {
        question: string;
        answer: string;
    },
    handleChange: Function
}

function Flashcard({ isFlipped, content, handleChange }: FlashcardProps) {
    const [isPreview, setIsPreview] = useState(false);

    const handleInputChange = (event: any) => {
        handleChange(event);
    }

    const preview = () => {
        if (isPreview) {
            setIsPreview(false);
        } else {
            setIsPreview(true);
        }
    }

    function cardContent(type: string, content: string): JSX.Element {
        return (
            <div className={styles.cardContent}>
                <div className={styles.header}>
                    <p>{type}</p>
                    <span onClick={preview} className={styles.preview}>
                        {isPreview ? "Editor" : "Preview"}
                        <img src={isPreview ? eyeClosed : eye} />
                    </span>
                </div>
                <div className={styles.body}>
                    {!isPreview
                        ? <textarea
                            name="" id=""
                            placeholder='Type in here...'
                            onChange={handleInputChange}
                            value={content} />
                        : <ReactMarkdown>
                            {content}
                        </ReactMarkdown>}
                </div>
                <div className={styles.toolbar}>
                    <img src={bold} />
                    <img src={italic} />
                    <img src={imgIcon} />
                    <select>
                        <option defaultValue={"paragraph"}>Paragraph</option>
                        <option value="h1">H1</option>
                        <option value="h2">H2</option>
                        <option value="h3">H3</option>
                    </select>
                </div>
            </div>
        );
    }

    return (
        <div className={`${isFlipped ? styles.flipped : ''} ${styles.card}`}>
            <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                    {cardContent("Question", content.question)}
                </div>
                <div className={styles.cardBack}>
                    {cardContent("Answer", content.answer)}
                </div>
            </div>
        </div >
    )
}

export default Flashcard
