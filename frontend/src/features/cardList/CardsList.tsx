import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as api from './api';
import Card from './Card';

function CardsList(): JSX.Element {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);


    useEffect(() => {
        api
        .cardsLoaded()
        .then((loadedCards) => {
            dispatch(cardsLoaded(loadedCards));
        });
    }), [dispatch];

    return (
        <div className="cardlist">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onChange={cardClick}
          />
        ))}
      </div>
    );
}

export default CardsList;
