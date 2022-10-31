import React from 'react'
import styles from "./StudyOverview.module.css"

function CardOverview({ values }: any) {
    return (
        <div className={styles.deckOverview}>
            <div className={styles.item}>
                <p>New:</p>
                <span style={{ color: "#3A86FF" }}>{values.new}</span>
            </div>
            <div className={styles.item}>
                <p>To learn:</p>
                <span style={{ color: "#FF3A3A" }}>{values.learning}</span>
            </div>
            <div className={styles.item}>
                <p>To review:</p>
                <span style={{ color: "#11CC19" }}>{values.review}</span>
            </div>
        </div>
    )
}

export default CardOverview
