import { useAuth } from "../context/AuthProvider";

export const parseInterval = (interval: string): number => {
    // parse value
    let value = parseInt(interval.substring(0, interval.length - 1));
    // parse unit
    let unit = interval.substring(interval.length - 1, interval.length);

    if (unit === "d") {
        return value * 24 * 60 * 60 * 1000;
    }
    if (unit === "hours") {
        return value * 60 * 60 * 1000;
    }
    if (unit === "minutes") {
        return value * 60 * 1000;
    }
    if (unit === "seconds") {
        return value * 1000;
    }
    return 0;
}

type Card = {
    id: number,
    question: string,
    answer: string,
    state: string,
    currInterval: string,
    ease: number
}
const studySettings = useAuth().studySettings;

// Algorithm to calculate new interval based on the current interval, ease, and the number of
// times the card has been studied
export const calculateInterval = (card: Card, result: number): number => {
    let newInterval: number = 0;
    let currInterval: number = parseInterval(card.currInterval);

    if (result === 1) {
        newInterval = currInterval * card.ease * studySettings.intervalModifier;
    } else if (result === 2) {

    }

    return newInterval;
}