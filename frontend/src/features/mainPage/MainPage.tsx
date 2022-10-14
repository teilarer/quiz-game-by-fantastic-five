import React from 'react';
import { useSelector } from 'react-redux';
import ThemeComponent from '../themeComponent/ThemeComponent';

function MainPage(): JSX.Element {
    const { themes } = useSelector((store) => store.themesState);

  return (
    <div className="themes-container">
      {
        themes.map((theme) => <div className="cards-container" key={theme.id}><ThemeComponent theme={theme} /></div>)
      }
    </div>
  );
}

export default MainPage;
