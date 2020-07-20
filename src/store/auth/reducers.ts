import { AuthState, AuthActionTypes, LOGIN, LOGOUT } from './types'

const initialState: AuthState = {
  logged: false,
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
      }
    }
    case LOGOUT: {
      return {
        ...state,
        logged: false,
      }
    }
    default:
      return state
  }
}