import Card from './Card';

type CardsAction =
{ type: 'cards/loaded'; payload: Card[] }
| { type: 'cards/updated'; payload: Card };

export default CardsAction;
