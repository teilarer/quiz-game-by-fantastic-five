import Theme from './types/Theme';

export async function getThemes(): Promise<Theme[]> {
  console.log('api')
    const response = await fetch('/themes/loaded')
    const data = await response.json()
    return data
  }
