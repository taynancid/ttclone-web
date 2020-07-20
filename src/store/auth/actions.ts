import { LOGIN, LOGOUT } from './types'

export const logIn = () => ({
  type: LOGIN,
});

export const logOut = () => ({
  type: LOGOUT,
});

export default {
  logIn,
  logOut,
};
