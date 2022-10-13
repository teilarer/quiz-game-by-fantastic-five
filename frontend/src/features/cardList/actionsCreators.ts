export const cardsLoaded = (cards: Card[]): CardsAction => ({
    type: 'cards/loaded',
    payload: cards,
})

export const cardsUpdated = (newCards: Card): CardsAction => ({
    type: 'cards/updated',
    payload: newCards,
})