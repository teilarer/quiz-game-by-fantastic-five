import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../cardList/types/Card';

interface ModalProps {
  card: Card;
  active: boolean;
  setActive: (card: Card) => void;
}

function Modal({
  card,
  active,
  setActive,
}: ModalProps): JSX.Element {
    const [time, setTime] = useState(30);
    const [activeb, setActiveb] = useState(false);
    const [showAnswer, setShowAnswer] = useState('');

    // const { sessionUser } = useSelector((state) => state.userState);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (card.answer === e.target.question.value) {
        setShowAnswer(`Правильно. + ${card.points} очков`);
        const response = await fetch('/users', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: sessionUser.id, price: card.price })
        });
        const data = await response.json();
        dispatch({ type: ADD_USER, payload: data });
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
          className={active ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h2>Вопрос:</h2>
            <br />
            {' '}
            <p>{card.content}</p>
          </div>
          <div>
            <form className="form" action="/game" type="submit" onSubmit={handleSubmit}>
              <h2>Введите ответ:</h2>
              <input type="text" name="quest" autoComplete="off" />
              <button
                type="submit"
                onMouseEnter={() => setActiveb(true)}
                onMouseLeave={() => setActiveb(false)}
                className={activeb ? 'buttonb activeb' : 'buttonb'}
              >
                Ответить
              </button>
              { showAnswer && (
              <div>
                <p className="red">{showAnswer}</p>
              </div>
              )}
              <div className="answDiv">
                Оставшееся время:
                {' '}
                {time}
                {' '}
                секунд
              </div>
            </form>
          </div>
          <button className="buttonb activeb" type="button" onClick={() => setActive(false)}>Закрыть</button>
        </div>
      </div>
    );
  }
  export default Modal;
