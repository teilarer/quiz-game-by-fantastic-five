// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './rootReducer';

const store = createStore(reducer, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof store.getState>;