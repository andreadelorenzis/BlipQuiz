import React, { useState } from 'react'
import styles from './Settings.module.css'
import info from "../../assets/info.png";
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import { useAuth } from '../../context/AuthProvider';

function Settings() {
    const options = useAuth().studySettings;
    const [inputs, setInputs] = useState({ ...options }) as any;

    const handleChange = (e: any) => {
        setInputs((prevstate: any) => {
            return {
                ...prevstate,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleToggle = () => {
        setInputs((prevstate: any) => {
            return {
                ...prevstate,
                showAnswerTimer: !prevstate.showAnswerTimer
            }
        });
    }

    return (
        <div className={styles.container}>
            <button className={styles.mainBtn}>Save options</button>
            <div className={styles.columns}>
                <div className={styles.column}>

                    {/* DAILY LIMITS */}
                    <h3>Daily limits</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>New cards x day</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The maximum number of new cards to introduce in a day for each deck, if new cards for that deck
                                    are available. New material will increase your review work-load, so this should be at least 10x
                                    smaller than your review limit.
                                </p>
                            </div>
                        </div>
                        <input name="newCardsDay" type="number" value={inputs.newCardsDay} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Max reviews x day</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The maximum cards of review cards to show in a day, if cards are ready for review.
                                </p>
                            </div>
                        </div>
                        <input name="reviewsCardsDay" type="number" value={inputs.reviewsCardsDay} onChange={handleChange} />
                    </div>
                    {/*}<p className={styles.note}>If adding 20 new cards each day,
                        your review limit should be at least 200.</p>}{*/}

                    {/* NEW CARDS */}
                    <h3>New cards</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Learning steps</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The steps to learn a card, separated by spaces. After this steps the card will pass in 'review mode'. The first step
                                    is set if you press 'Again' on a new card. The 'Good' button will advance to the next step, until all
                                    steps are completed. After you press the 'Good' button on the last step, the card will pass in 'review mode',
                                    and will appear in a different day. The 'Easy' button will pass the card in 'review mode' immediately.
                                    Available delays units are: minutes(m), hours(h), days (d).
                                </p>
                            </div>
                        </div>
                        <input name="learningSteps" type="text" value={inputs.learningSteps} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Interval graduation</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The number of days to wait before showing a card again, after the card has been promoted in
                                    'Review mode'.
                                </p>
                            </div>
                        </div>
                        <input name="intervalGraduation" type="number" value={1} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Easy interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The number of days to wait before showing a card again, after the 'Easy' button is pressed to immediately
                                    pass a card in 'Review mode'.
                                </p>
                            </div>
                        </div>
                        <input name="easyInterval" type="number" value={inputs.easyInterval} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Insertion order</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    Controls the positions where new cards are assigned when you add new cards. If 'Random' is selected,
                                    new cards will be assigned to random positions. If 'FIFO' is selected, new cards will be ordered with
                                    'FIFO' policy (the first card introduced will be the first to be studied). If 'LIFO' is selected, new cards
                                    will be ordered with 'LIFO' policy (the last card introduced will be the first to be studied).
                                </p>
                            </div>
                        </div>
                        <select name="insertionOrder" value={inputs.insertionOrder} onChange={handleChange}>
                            <option value='FIFO'>FIFO (First in First out)</option>
                            <option value='LIFO'>LIFO (Last in First out)</option>
                            <option value='Random'>Random</option>
                        </select>
                    </div>

                    {/* LAPSES */}
                    <h3>Lapses</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Relearning steps</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    Zero or more delays separated by spaces. By defaul pressing the 'Again' button on a review card
                                    will show it again 10 minutes later. If no delays are provided the card will not enter 'Relearning mode' when
                                    you press 'Again' on a Review card. Available delays units are: minutes(m), hours(h), days (d).
                                </p>
                            </div>
                        </div>
                        <input name="relearningSteps" type="text" value={inputs.relearningSteps} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Minimum interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The minimum interval given to a review card given to a review card after answering.
                                </p>
                            </div>
                        </div>
                        <input name="minimumInterval" type="number" value={inputs.minimumInterval} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Leeches limit</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The number of times 'Again' need to be pressed on a review card before it is considered a leech.
                                    Leeches are cards that consume a lot of your time, and when a card is marked as a leech, it's a
                                    good idea to rewrite it, delete it, or think of a mnemonic to help you remember it.
                                </p>
                            </div>
                        </div>
                        <input name="leechesLimit" type="number" value={inputs.leechesLimit} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Leaches action</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    'Tag only' will add a 'leech' tag to the card and wil show a popup.
                                    'Suspend' in addition to tagging the card, will suspend it from reviews until it is manually unsuspended.
                                </p>
                            </div>
                        </div>
                        <select value={inputs.leachesAction} name="leachesAction" id="" onChange={handleChange}>
                            <option value="suspend">Suspend card</option>
                            <option value="tag">Tag only</option>
                        </select>
                    </div>
                </div>
                <div className={styles.column}>

                    {/* TIMER */}
                    <h3>Timer</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Max answer seconds</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The maximum number of seconds to record for a single review. If an answer exceeds this time
                                    (for example, because you stepped away from your computer), the time will be capped at this value.
                                </p>
                            </div>
                        </div>
                        <input name="maxAnswerSeconds" type="number" value={60} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Show answer timer</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    In the review screen, show a timer that counts the number of seconds you're taking to review each card.
                                </p>
                            </div>
                        </div>
                        <div className={styles.toggle}>
                            <ToggleSwitch
                                onClick={handleToggle}
                                value1=''
                                value2=''
                                checked={inputs.showAnswerTimer}
                            />
                        </div>
                    </div>

                    {/* ADVANCED */}
                    <h3>Advanced</h3>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Max interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The maximum number of days a review card can wait. When reviews reach the limit, 'Hard', 'Good' and 'Easy'
                                    will all give the same interval. The shorter you set this, the more your workload will increase.
                                </p>
                            </div>
                        </div>
                        <input name="maxInterval" type="number" value={inputs.maxInterval} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Initial ease</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The ease multiplier new cards start with. By default, the 'Good' button on a newly-learned card
                                    will delay the next review by 2.5x the previous interval.
                                </p>
                            </div>
                        </div>
                        <input name="initialEase" type="number" value={inputs.initialEase} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Ease bonus</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    An extra multiplier that is applied to a review card's interval when you rate it 'Easy'.
                                </p>
                            </div>
                        </div>
                        <input name="easeBonus" type="number" value={inputs.easeBonus} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Interval modifier</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    This multiplier is applied to all reviews, and minore adjustments can be made to be the scheduler
                                    more conservative or aggressive. For example, if you set it to 1.2, all reviews will be delayed by 20%.
                                </p>
                            </div>
                        </div>
                        <input name="intervalModifier" type="number" value={inputs.intervalModifier} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Hard interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The multiplier applied to a review interval when answering 'Hard'.
                                </p>
                            </div>
                        </div>
                        <input name="hardInterval" type="number" value={inputs.hardInterval} onChange={handleChange} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.text}>
                            <p>Again interval</p>
                            <div className={styles.info}>
                                <img src={info} alt="info" />
                                <p className={styles.hide}>
                                    The multiplier applied to a review interval when answering 'Again'.
                                </p>
                            </div>
                        </div>
                        <input name="againInterval" type="number" value={inputs.againInterval} onChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
