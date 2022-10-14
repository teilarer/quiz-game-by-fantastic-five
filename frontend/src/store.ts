// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof store.getState>;
