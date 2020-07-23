import { LOGIN, LOGOUT } from './types'

export const logIn = (accessToken : string) => ({
  type: LOGIN,
  payload: accessToken,
});

export const logOut = () => ({
  type: LOGOUT,
});

export default {
  logIn,
  logOut,
};
