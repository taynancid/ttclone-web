import { AuthState, AuthActionTypes, LOGIN, LOGOUT } from './types'

const initialState: AuthState = {
  logged: false,
  token: '',
}

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        logged: true,
        token: action.payload,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        logged: false,
        token: '',
      }
    }
    default:
      return state
  }
}