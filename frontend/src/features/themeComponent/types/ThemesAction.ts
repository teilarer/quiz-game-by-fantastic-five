import Theme from './Theme';

interface ThemesAction { type: '/themes/loaded'; payload: Theme[] }

export default ThemesAction;
