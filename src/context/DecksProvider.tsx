import React from 'react'
import data from "../data/MockData.json";
import { createContext, useContext, useReducer, useState } from 'react';

const DeckContext = createContext<any>(null);

const DeckProvider = (props: any) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case "ADD_DECK":
                return [...state, action.payload];
            case "REMOVE_DECK":
                return state.filter((deck: any) => deck.id !== action.payload.id);
            case "EDIT_DECK":
                return state.map((deck: any) => {
                    if (deck.id == action.payload.id) {
                        return {
                            ...deck,
                            name: action.payload.name
                        }
                    }
                    return deck;
                });
            case "ADD_CARD":
                return state.map((deck: any) => {
                    if (deck.id == action.payload.deckID) {
                        deck.cards.push(action.payload.card);
                    }
                    return deck;
                });
            case "EDIT_CARD":
                return state.map((deck: any) => {
                    if (deck.id == action.payload.deckID) {
                        let cards = deck.cards.map((card: any) => {
                            if (card.id == action.payload.card.id) {
                                card.question = action.payload.card.question;
                                card.answer = action.payload.card.answer;
                            }
                            return card;
                        });
                        deck.cards = cards;
                    }
                    return deck;
                });
            case "REMOVE_CARD":
                return state.map((deck: any) => {
                    if (deck.id == action.payload.deckID) {
                        deck.cards = deck.cards.filter((card: any) => card.id !== action.payload.cardId);
                    }
                    return deck;
                });
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