import { Reducer } from 'react';
import CardsAction from './types/CardsAction';
import CardsState from './types/CardsState';

const initialState: CardsState = {
    cards: [],
};
const cardsReducer: Reducer<CardsState, CardsAction> = (state = initialState, action) => {
    switch (action.type) {
        case 'cards/loaded': {
            return { ...state, cards: action.payload };
        }
        case 'btn/updated': {
            const newCardlist = action.payload;
            return {
                ...state,
                cards: state.cards.map((el) => el.id !== action.payload.card.id)
                console.log(action.payload);
                
            };
        }
    }
};

export default cardsReducer;
