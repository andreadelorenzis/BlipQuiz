import React, { useState } from 'react'
import styles from "./CardEditor.module.css"
import close from "../../assets/close.png"
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

type CardEditorProps = {
    open: boolean;
    onClose: Function;
    isNew: boolean;
};

function CardEditor({ open, onClose, isNew }: CardEditorProps) {
    const [isBack, setIsBack] = useState(false);

    if (!open) return null;

    const flipCard = () => {
        setIsBack(!isBack);
    }

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <img src={close} alt="close" onClick={() => onClose()} className={styles.close} />
                <h3>{isNew ? "Add card" : "Edit card"}</h3>
                <ToggleSwitch onClick={flipCard} />
            </div>
        </div>
    )
}

export default CardEditor
