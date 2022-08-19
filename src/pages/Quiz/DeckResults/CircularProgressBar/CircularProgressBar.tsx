import React from 'react'
import styles from './CircularProgressBar.module.css'

function CircularProgressBar() {
    return (
        <>
            <div className={styles.progress}>
                <svg className={styles.progressCircle} width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
                    <circle className={styles.progressCircleBack}
                        cx="80" cy="80" r="72"></circle>
                    <circle className={styles.progressCircleProg} style={{ strokeDasharray: "120 999" }}
                        cx="80" cy="80" r="72"></circle>
                </svg>
                <div className={styles.progressText} data-progress="0">23%</div>
            </div>
        </>
    )
}

export default CircularProgressBar
