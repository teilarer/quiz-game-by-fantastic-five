import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../cardComponent/CardComponent';
import Theme from './types/Theme';
import * as api from '../cardComponent/api';

function ThemeComponent({ theme }: { theme: Theme }): JSX.Element {
  const dispatch = useDispatch();
  const selector = useSelector((globalState: RootState) => globalState.cardsState);
  const { cards } = selector;


  useEffect(() => {
    api.getCards()
     .then((cards) => dispatch({ type: '/cards/loaded', payload: cards }));
   }, []);
    return (
      <div className="themelist">
        <div className="themeItem">
          {theme.title}
        </div>
        <div className="questionsContainer">
          {cards.map((card) => card.theme_id === theme.id
            && <CardComponent card={card} key={card.id} />
          )}
        </div>
      </div>
    );
  }

  export default ThemeComponent;
