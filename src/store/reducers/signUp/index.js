import jwt from 'jwt-decode';
import { COMMON } from '../types';
import CONSTANTS from './constants';

const defaultState = {
  loading: false,
  loaded: false,
  error: null,
  token: null,
  data: null,
  decodedToken: {},
};

export default function signUp(state = defaultState, action = {}) {
  switch (action.type) {
    case CONSTANTS.SIGNUP_CLEAR_USER_INFO:
      return defaultState;

    case CONSTANTS.SIGNUP_CLEAR_USER_ERROR:
      return {
        ...state,
        error: defaultState.error,
      };

    case `${CONSTANTS.SIGNUP_GET_TOKEN}${COMMON.START}`:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };

    case `${CONSTANTS.SIGNUP_GET_TOKEN}${COMMON.SUCCESS}`:
      localStorage.setItem('token', action.payload.access_token);
      return {
        ...state,
        loading: defaultState.loading,
        error: defaultState.error,
        token: action.payload,
        loaded: true,
        decodedToken: jwt(action.payload.access_token),
      };

    case `${CONSTANTS.SIGNUP_GET_TOKEN}${COMMON.ERROR}`:
      return {
        ...state,
        loading: defaultState.loading,
        error: action.payload,
      };

    default:
      return state;
  }
}
