import { combineReducers } from 'redux';
import authReducer from './features/auth/authReducer';
import cardsReducer from './features/cardComponent/cardReducer';
import themesReducer from './features/themeComponent/themesReducer';

export default combineReducers({
  auth: authReducer,
  themesState: themesReducer,
  cardsState: cardsReducer,
});
