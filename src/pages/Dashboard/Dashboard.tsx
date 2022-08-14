import React from 'react'
import styles from './Dashboard.module.css'
import search from "../../assets/search.png";
import plus from "../../assets/plus.png";

function Dashboard() {
    return (
        <div>
            <div className={styles.buttonsBar}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder='Search' />
                    <img className={styles.searchImg} src={search} alt="search" />
                </div>
            </div>
            <button>
                <img src={plus} alt="" />
            </button>
            <div className={styles.decksContainer}>

            </div>
        </div>
    )
}

export default Dashboard
