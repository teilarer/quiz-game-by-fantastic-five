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

export async function login(credentials: Credentials): Promise<{user?: User, message?: string}> {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const data = await response.json();
  
    if (response.status >= 400) {
      const { error } = data;
      console.log(error)
      throw error;
    }

      return data
}

export async function register(resData: RegisterData): Promise<{user?: User, message?: string}> {
  console.log(resData)
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(resData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
  
    if (response.status >= 400) {
      const { error } = data;
      console.log(error)
      throw error;
    }

      return data
  }
  
  export async function logout(): Promise<void> {
    await fetch('/api/auth/logout', { method: 'POST' });
  }