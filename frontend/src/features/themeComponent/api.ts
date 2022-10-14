import Theme from './types/Theme';

export default async function getThemes(): Promise<Theme[]> {
    return (await fetch('/themes/loaded')).json();
  }
