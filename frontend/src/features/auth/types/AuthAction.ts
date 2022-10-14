import User from './User';

type AuthAction =
  | { type: 'auth/login/success'; payload: User }
  | { type: 'auth/login/error'; payload: string }
  | { type: 'auth/login/reset/error' }
  | { type: 'auth/registration/success'; payload: User }
  | { type: 'auth/registration/error'; payload: string }
  | { type: 'auth/register/reset/error' }
  | { type: 'auth/user/checked'; payload: User | undefined }
  | { type: 'auth/user/logout' }
  | { type: '/user/changed', payload: User };

export default AuthAction;
