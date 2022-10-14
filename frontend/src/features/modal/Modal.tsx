import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../cardComponent/types/Card';
import './Modal.css'

interface ModalProps {
  card: Card;
  active: boolean;
  setActive: any
}

function Modal({
  card,
  active,
  setActive,
}: ModalProps): JSX.Element {
    const selector = useSelector((globalState: any) => globalState.auth);
    const [time, setTime] = useState(30);
    const [activeb, setActiveb] = useState(false);
    const [showAnswer, setShowAnswer] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async (e: any): Promise<void> => {
      e.preventDefault();
      if (card.answer === e.target.quest.value) {
        setShowAnswer(`Правильно. + ${card.points} очков`);
        const response = await fetch('/user/changed', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: selector.user.id, points: card.points })
        });
        const data = await response.json();
        if (data.status === 'success') {
        dispatch({ type: '/user/changed', payload: data.user });
}
      } else {
        setShowAnswer(`Вы ошиблись. Правильный ответ: ${card.answer}`);
      }
    };
    useEffect(() => {
      const interval = setTimeout(() => {
        setTime(() => time - 1);
      }, 1000);

      if (time === 0) {
        clearTimeout(interval);
        setShowAnswer('Время вышло');
      }
      return () => clearTimeout(interval);
    }, [time]);
    return (
      <div
        className={active ? 'modal active' : 'modal'}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? 'modal-content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h2>Вопрос:</h2>
            <br />
            <p>{card.content}</p>
            <form className="form" action="/game" onSubmit={handleSubmit}>
              <h2>Введите ответ:</h2>
              <input type="text" name="quest" autoComplete="off" />
              <button
                type="submit"
                onMouseEnter={() => setActiveb(true)}
                onMouseLeave={() => setActiveb(false)}
                className={activeb ? 'buttonb activeb' : 'buttonb'}
              > Ответить
              </button>
              <div className="answDiv">
              Оставшееся время:
               {' '}
              {time}
              {' '}
              секунд
              </div>

              {showAnswer && (
              <div>
                <p className="red">{showAnswer}</p>
              </div>
)}
            </form>
          </div>
          <button className="buttonb activeb" type="button" onClick={() => setActive(false)}>Закрыть</button>
        </div>
      </div>
    );
  }
  export default Modal;
