import React, { useState } from 'react'
import styles from "./ToggleSwitch.module.css"

type ToggleSwitchProps = {
    onClick: Function;
}

function ToggleSwitch({ onClick }: ToggleSwitchProps) {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
        onClick();
    }

    return (
        <div className={styles.container}>
            <span className={!isOn ? styles.active : ''}>Front</span>
            <div onClick={handleClick} className={styles.toggleSwitch}>
                <div className={`${isOn ? styles.on : ''} ${styles.knob}`}></div>
            </div>
            <span className={isOn ? styles.active : ''}>Back</span>
        </div>
    )
}

export default ToggleSwitch
