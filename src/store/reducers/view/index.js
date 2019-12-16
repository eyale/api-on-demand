import { COMMON } from '../types';
import CONSTANTS from './constants';

const defaultState = {
  serverError: null,
};

export default function view(state = defaultState, action = {}) {
  switch (action.type) {
    case `${CONSTANTS.VIEW_SERVER_ERROR}${COMMON.CLEAR}`:
      return {
        serverError: action.payload,
      };
    case CONSTANTS.VIEW_SERVER_ERROR:
      return {
        serverError: action.payload,
      };

    default:
      return state;
  }
}
