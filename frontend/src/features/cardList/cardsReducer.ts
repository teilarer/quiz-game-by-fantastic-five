const initialState: CardsState = {
    cards: [],
}
const cardsReducer: Reducer<CardsState, CardsAction> = (state = initialState, action) => {
    switch (action.type) {
        case 'cards/loaded': {
            return {...state, cards: action.payload}
        }
        case 'cards/updated': {
            const newCard = action.playload
            return {
                ...state,
                cards: state.cards.map((newUpdatedCard) => (newUpdatedCard.id === newCard.id ? newCard : newUpdatedCard))
            };
        }
    }
    return state;
}

export default cardsReducer;
