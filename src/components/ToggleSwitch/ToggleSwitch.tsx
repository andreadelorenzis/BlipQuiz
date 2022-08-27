import React, { useState } from 'react'
import styles from "./ToggleSwitch.module.css"

type ToggleSwitchProps = {
    onClick: Function;
    value1: string;
    value2: string;
    checked?: boolean;
}

function ToggleSwitch({ onClick, value1, value2, checked = false }: ToggleSwitchProps) {
    const [isOn, setIsOn] = useState(checked);

    const handleClick = () => {
        setIsOn(!isOn);
        onClick();
    }

    return (
        <div className={styles.container}>
            <span className={!isOn ? styles.active : ''}>{value1}</span>
            <div onClick={handleClick} className={styles.toggleSwitch}>
                <div className={`${isOn ? styles.on : ''} ${styles.knob}`}></div>
            </div>
            <span className={isOn ? styles.active : ''}>{value2}</span>
        </div>
    )
}

export default ToggleSwitch
