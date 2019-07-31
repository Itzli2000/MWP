import { LOGIN, LOGIN_TYPE } from './../constants';

export const login = payload => ({ type: LOGIN, payload });
export const login_type = payload => ({ type: LOGIN_TYPE, payload });