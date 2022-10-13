import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from './api';

function CardsList(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        api
        .getCards()
        .then((loadedCards) => {
            dispatch(cardsLoaded(loadedCards));
        });
    }), [dispatch]

    return (
        <div>
            cards
        </div>
    );
}

export default CardsList;
