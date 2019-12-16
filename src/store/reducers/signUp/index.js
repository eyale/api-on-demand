import jwt from 'jwt-decode';
import { COMMON } from '../types';
import CONSTANTS from './constants';

const defaultState = {
  loading: false,
  loaded: false,
  error: null,
  token: null,
  password: '',
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
        password: action.payload.password,
        loading: true,
      };

    case `${CONSTANTS.SIGNUP_GET_TOKEN}${COMMON.SUCCESS}`:
      return {
        ...state,
        loading: defaultState.loading,
        token: action.payload,
        error: defaultState.error,
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
