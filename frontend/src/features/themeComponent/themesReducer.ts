import { Reducer } from 'react';
import ThemesAction from './types/ThemesAction';
import ThemesState from './types/ThemesState';

const initialState: ThemesState = {
    themes: [],
};
const themesReducer: Reducer<ThemesState, ThemesAction> = (state = initialState, action) => {
    switch (action.type) {
        case '/themes/loaded': {
            console.log(action.payload)
            return { ...state, themes: action.payload };
        }

        default: return state;
    }
};

export default themesReducer;
