import React from 'react'
import { createContext, useContext, useReducer, useState } from 'react';
import Notification from './Notification';

const NotificationContext = createContext({});

const NotificationProvider = (props: any) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'ADD_NOTIFICATION':
                return [...state, { ...action.payload }];
            case 'REMOVE_NOTIFICATION':
                return state.filter((notification: any) => notification.id !== action.id);
            default:
                return state;
        }
    }, []);

    return (
        <NotificationContext.Provider value={{ dispatch }}>
            <div>
                {
                    state.map((note: any) => {
                        return <Notification dispatch={dispatch} key={note.id} {...note} />
                    })
                }
            </div>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const dispatch: any = useContext(NotificationContext);

    return (props: any) => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: {
                id: 1,
                note: props
            }
        });
    }
};

export default NotificationProvider;