import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyMiddleware } from 'redux';
import ThemeComponent from '../themeComponent/ThemeComponent';
import * as api from '../themeComponent/api'
import Theme from '../themeComponent/types/Theme'

function MainPage(): JSX.Element {
  const dispatch = useDispatch()
   const selector = useSelector((globalState: RootState) => globalState.themesState)
   const themes = selector.themes
   console.log(themes)

   useEffect(() => {
    api.getThemes()
     .then((themes) => dispatch({type: '/themes/loaded', payload: themes}))
   }, [])

  return (
    <div className="themes-container">
      {
        themes.map((theme: Theme) => <div className="cards-container" key={theme.id}><ThemeComponent theme={theme} /></div>)
      }
    </div>
  );
}

export default MainPage;
