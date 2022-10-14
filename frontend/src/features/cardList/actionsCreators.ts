import Card from './types/Card';
import CardsAction from './types/CardsAction';

export const cardsLoaded = (cards: Card[]): CardsAction => ({
    type: 'cards/loaded',
    payload: cards,
});

export const btnState = (newBtns: Card[]): CardsAction => ({
    type: 'btn/updated',
    payload: newBtns,
});
