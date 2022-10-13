import { Reducer } from 'redux'
import AuthAction from "./types/AuthAction";
import AuthState from "./types/AuthState";

const initialState: AuthState = {
    authChecked: false,
  };

const authReducer: Reducer<AuthState, AuthAction> = (state: AuthState = initialState, action: AuthAction) => {
    switch(action.type) {
        case ('auth/login/success'): {
            return {
                ...state, user: action.payload, loginFormError: undefined 
            }
        }

        case 'auth/login/error': {
            return {
                ...state, loginFormError: action.error
            }
        }

        case 'auth/login/reset/error': {
            return {
                ...state, loginFormError: undefined
            }
        }

        case 'auth/registration/success': {
            return {
                ...state, user: action.payload, registerFormError: undefined
            }
        }

        case 'auth/registration/error': {
            return {
                ...state, registerFormError: action.error,
            }
        }

        case 'auth/register/reset/error': {
            return {
                ...state, registerFormError: undefined,
            }
        }

        case 'auth/user/checked': {
            return {
                ...state, authChecked: true, user: action.payload,
            }
        }

        case 'auth/user/logout': {
            return {
                ...state, user: undefined
            }
        }
    }
}