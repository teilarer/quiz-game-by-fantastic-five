import User from './User';

type AuthAction =
  | { type: 'auth/login/success'; payload: User }
  | { type: 'auth/login/error'; error: string }
  | { type: 'auth/login/reset/error' }
  | { type: 'auth/registration/success'; payload: User }
  | { type: 'auth/registration/error'; error: string }
  | { type: 'auth/register/reset/error' }
  | { type: 'auth/user/checked'; payload: User | undefined }
  | { type: 'auth/user/logout' };

export default AuthAction;