import Card from './types/Card';

export default async function getCards(): Promise<Card[]> {
    return (await fetch('/cards/loaded')).json();
  }
