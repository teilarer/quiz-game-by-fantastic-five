import Card from './Card';

type CardsAction =
| { type: 'cards/loaded'; payload: Card[] }
| { type: 'btn/updated'; payload: Card[] }

export default CardsAction;
