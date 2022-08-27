import React from 'react'
import data from "../data/MockData.json";
import { createContext, useContext, useReducer, useState } from 'react';

const DeckContext = createContext<any>(null);

const DeckProvider = (props: any) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case "ADD_DECK":
                console.log("ADD_DECK");
                return [...state, action.payload];
            case "REMOVE_DECK":
                console.log("REMOVE_DECK");
                return state.filter((notification: any) =>
                    notification.id !== action.payload.id);
            default:
                return state;
        }
    }, data.decks);

    return (
        <DeckContext.Provider value={{ state, dispatch }}>
            {props.children}
        </DeckContext.Provider>
    )
}

export const useDeck = () => {
    return useContext(DeckContext);
}

export default DeckProvider;