import { useState } from 'react';
import Card from './types/Card';
import Modal from '../modal/Modal';

function CardComponent({ card }: { card: Card }): JSX.Element {
    const [actives, setActives] = useState(false);
    console.log(actives);
    return (
      <div className="container-card">
        <div className="cardItem" onClick={() => setActives(true)}>
          {card.points}
        </div>
        {actives && <Modal active={actives} setActive={setActives} card={card} />}
      </div>
    );
  }

  export default CardComponent;
