import { useState } from 'react';
import Card from '../cardList/types/Card';
import Modal from '../modal/Modal';

function CardComponent({ card }: { card: Card }): JSX.Element {
    const [actives, setActives] = useState(false);
    return (
      <>
        <div className="cardItem" onClick={() => setActives(true)}>
          {card.points}
        </div>
        {actives && <Modal active={actives} setActive={setActives} card={card} />}
      </>
    );
  }

  export default CardComponent;
