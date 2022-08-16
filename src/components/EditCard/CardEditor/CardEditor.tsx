import React, { useState } from 'react'
import styles from "./CardEditor.module.css"
import italic from "../../../assets/italic.png";
import bold from "../../../assets/bold.png";
import imgIcon from "../../../assets/img_icon.png";
import eye from "../../../assets/eye.png";
import eyeClosed from "../../../assets/eye_closed.png";

type FlashcardProps = {
    isFlipped: boolean
}

function Flashcard({ isFlipped }: FlashcardProps) {

    const [text, setText] = useState('');
    const [textCopy, setTextCopy] = useState('');
    const [isPreview, setIsPreview] = useState(false);

    const handleInputChange = (event: any) => {
        console.log(event.target.innerHTML);
        setText(event.target.value);
    }

    const preview = () => {
        if (isPreview) {
            setIsPreview(false);
            setText(textCopy);
        } else {
            setIsPreview(true);
            setTextCopy(text);
            const altText = text.toUpperCase();
            setText(altText);
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <p>{isFlipped ? "Answer" : "Question"}</p>
                <span onClick={preview} className={styles.preview}>
                    {isPreview ? "Editor" : "Preview"}
                    <img src={isPreview ? eyeClosed : eye} />
                </span>
            </div>
            {/*}
            <textarea
                name="" id=""
                placeholder='Type in here...'
                onChange={handleInputChange}
                value={text} />{*/}
            <div className={styles.content}
                contentEditable={true}
                onInput={(e) => handleInputChange(e)}
                placeholder="Type in here..."
                defaultValue={text}>
            </div>
            <div className={styles.toolbar}>
                <img src={bold} />
                <img src={italic} />
                <img src={imgIcon} />
                <select>
                    <option selected value="paragraph">Paragraph</option>
                    <option value="h1">H1</option>
                    <option value="h2">H2</option>
                    <option value="h3">H3</option>
                </select>
            </div>
        </div >
    )
}

export default Flashcard
