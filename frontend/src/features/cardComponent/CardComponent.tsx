import { useState } from 'react';
import Card from './types/Card';
import Modal from '../modal/Modal';

function CardComponent({ card }: { card: Card }): JSX.Element {
    const [actives, setActives] = useState(false);
    return (
      <>
        <div className="cardItem" onClick={() => setActives(true)}>
          {card.points}
        </div>
      <div> {actives && <Modal active={actives} setActive={setActives} card={card} />}</div>
       {/* <div> {actives && <div>1111</div>}</div> */}
      </>
    );
  }

  export default CardComponent;
