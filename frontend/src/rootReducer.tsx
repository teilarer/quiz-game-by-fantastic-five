import { combineReducers } from 'redux';
import cardsReducer from './features/cardList/cardsReducer';
import themesReducer from './features/themeComponent/ThemesReducer';

const rootReducer = combineReducers({
    themesState: themesReducer,
    cardsState: cardsReducer,
});

export default rootReducer;
