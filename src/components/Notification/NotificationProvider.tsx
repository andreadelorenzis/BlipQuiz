import React from 'react'
import { createContext, useContext, useReducer, useState } from 'react';
import Notification from './Notification';
import styles from "./Notification.module.css";

const NotificationContext = createContext<any>(null);

const NotificationProvider = (props: any) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, action.payload];
            case "REMOVE_NOTIFICATION":
                return state.filter((notification: any) =>
                    notification.id !== action.payload.id);
            default:
                return state;
        }
    }, []);

    return (
        <NotificationContext.Provider value={dispatch}>
            <div className={styles.notificationWrapper}>
                {
                    state.map((note: any) => {
                        return <Notification
                            dispatch={dispatch}
                            key={note.id}
                            {...note}
                        />
                    })
                }
            </div>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    return (props: any) => {
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: Math.random(),
                ...props
            }
        });
    }
}

export default NotificationProvider;