export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export interface AuthState {
  logged: boolean,
  token: string,
};

interface LoginAction {
  type: typeof LOGIN,
  payload: string,
}

interface LogoutAction {
  type: typeof LOGOUT
}

export type AuthActionTypes = LoginAction | LogoutAction;