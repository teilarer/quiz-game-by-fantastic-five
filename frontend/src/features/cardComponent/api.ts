import Card from './types/Card';

export async function getCards(): Promise<Card[]> {
    return (await fetch('/cards/loaded')).json();
  }
