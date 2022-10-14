import CardComponent from '../cardComponent/CardComponent';
import Theme from './types/Theme';

function ThemeComponent({ theme }: { theme: Theme }): JSX.Element {
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
