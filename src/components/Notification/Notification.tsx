import React from 'react'
import styles from "./Notification.module.css";

function Notification(props: any) {
    const [exit, setExit] = React.useState(false);

    React.useEffect(() => {
        handleCloseNotification();
    }, []);

    const handleCloseNotification = () => {
        setTimeout(() => {
            setExit(true);
        }, 1600);
        setTimeout(() => {
            props.dispatch({
                type: "REMOVE_NOTIFICATION",
                payload: {
                    id: props.id
                }
            });
        }, 2000);
    };

    return (
        <div className={`${styles.notificationItem} ${exit ? styles.exit : ''}`}
            style={{ backgroundColor: props.color }}>
            {props.message}
        </div>
    )
}

export default Notification
