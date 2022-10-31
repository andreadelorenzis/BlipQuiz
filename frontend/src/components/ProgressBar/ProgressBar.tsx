import React from 'react'
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
    nCards: number;
    currentCard: number;
}

function ProgressBar({ nCards, currentCard }: ProgressBarProps) {

    const calculateProgress = () => {
        return (currentCard / nCards) * 100;
    }

    return (
        <div className={styles.progress}>
            <div className={styles.bar}>
                <div style={{
                    width: calculateProgress() + "%",
                    borderRadius: calculateProgress() == 100.0
                        ? "5px"
                        : "5px 1px 1px 5px"
                }}></div>
            </div>
            <span>{currentCard}/{nCards}</span>
        </div>
    )
}

export default ProgressBar
