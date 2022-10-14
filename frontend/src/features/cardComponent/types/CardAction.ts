import Card from './Card';

interface CardsAction { type: '/cards/loaded'; payload: Card[] }

export default CardsAction;
