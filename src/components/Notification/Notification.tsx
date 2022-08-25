import React from 'react'
import styles from "./Notification.module.css";

function Notification({ props }: any) {
    React.useEffect(() => {
        handleStartTimer();
    }, []);

    const handleStartTimer = () => {
        setInterval(() => {
            handleCloseNotification();
        }, 4000);
    };

    const handleCloseNotification = () => {
        setTimeout(() => {
            props.dispatch({
                type: 'REMOVE_NOTIFICATION', id: props.id
            });
        }, 500);
    };

    return (
        <div className={styles.notification} style={{ backgroundColor: props.note.color }}>
            <p>{props.note.message}</p>
        </div>
    )
}

export default Notification
