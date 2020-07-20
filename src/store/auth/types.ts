export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export interface AuthState {
  logged: boolean,
};

interface LoginAction {
  type: typeof LOGIN
}

interface LogoutAction {
  type: typeof LOGOUT
}

export type AuthActionTypes = LoginAction | LogoutAction;