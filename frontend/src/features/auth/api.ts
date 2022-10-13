import Credentials from './types/Credentials';
import User from './types/User'

export async function checkUser(): Promise<
{
    isUser: true,
    user: User
} | {
    isUser: false,
}> {
    return (await fetch('/api/auth/user')).json();
}

export async function login(creedentials: Credentials) {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {'Content-type': 'Application/json'},
        body: JSON.stringify(creedentials)
    })
    if (response.status >= 400) {
        const { error } = await response.json();
        console.log(error)
        throw error;
      }
      const data = await response.json();
      console.log(data)
      return data
}