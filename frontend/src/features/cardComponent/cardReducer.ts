import { Reducer } from 'react';
import CardsAction from './types/CardAction';
import CardsState from './types/CardState';

const initialState: CardsState = {
    cards: [],
};
const cardsReducer: Reducer<CardsState, CardsAction> = (state = initialState, action) => {
    switch (action.type) {
        case '/cards/loaded': {
            return { ...state, themes: action.payload };
        }

        default: return state;
    }
};

export default cardsReducer;
