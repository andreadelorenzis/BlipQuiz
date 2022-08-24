import React from 'react'
import styles from './Settings.module.css'
import info from "../../assets/info.png";
import ToggleSwitch from '../../components/EditCard/ToggleSwitch/ToggleSwitch';

function Settings() {
    return (
        <div className={styles.container}>
            <button className={styles.mainBtn}>Save options</button>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <h3>Daily limits</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>New cards x day</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={20} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Max reviews x day</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={100} />
                    </div>
                    <p className={styles.note}>If adding 20 new cards each day,
                        your review limit should be at least 200.</p>
                    <h3>New cards</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Learning steps</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="text" value={"1m 10m"} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Interval graduation</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={1} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Easy interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={4} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Insertion order</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <select name="" id="">
                            <option value="Random">Random</option>
                            <option value="">Oldest first (sequential)</option>
                        </select>
                    </div>
                    <h3>Lapses</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Relearning steps</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="text" value={"10m"} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Maximum interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={1} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Leaches limit</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={8} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Insertion order</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <select name="" id="">
                            <option value="Suspend card">Suspend card</option>
                            <option value="">Mark only</option>
                        </select>
                    </div>
                </div>
                <div className={styles.column}>
                    <h3>Timer</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Max answer seconds</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={60} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Max answer seconds</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <div className={styles.toggle}>
                            <ToggleSwitch
                                onClick={() => console.log("clicked")}
                                value1=''
                                value2='' />
                        </div>
                    </div>
                    <h3>Advanced</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Max interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={36500} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Initial ease</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={2.50} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Ease bonus</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={1.30} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Interval modifier</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={1.00} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Fixed interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={1.00} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>New interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <span className={styles.hide}>
                                    How many new cards can you memorize in one day?
                                </span>
                            </div>
                        </div>
                        <input type="number" value={0.00} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
