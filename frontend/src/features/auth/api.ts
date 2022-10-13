import Credentials from './types/Credentials';
import RegisterData from './types/RegisterData';
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

export async function login(credentials: Credentials): Promise<User> {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });

    if (response.status >= 400) {
        const { error } = await response.json();
        console.log(error)
        throw error;
      }
      const data = await response.json();
      console.log(data)
      return data.user
}

export async function register(resData: RegisterData): Promise<User> {
  console.log(resData)
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(resData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.status >= 400) {
      const { error } = await response.json();
      console.log(error)
      throw error;
    }
    
    const data = await response.json();
      console.log(data.user)
      return data.user
  }
  
  export async function logout(): Promise<void> {
    await fetch('/api/auth/logout', { method: 'POST' });
  }