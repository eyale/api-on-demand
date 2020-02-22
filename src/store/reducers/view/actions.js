import { COMMON } from '../types';
import CONSTANTS from './constants';

export const clearServerError = () => {
  return dispatch => {
    dispatch({
      type: `${CONSTANTS.VIEW_SERVER_ERROR}${COMMON.CLEAR}`,
    });
  };
};

export const serverError = payload => dispatch =>
  dispatch({
    type: CONSTANTS.VIEW_SERVER_ERROR,
    payload,
  });
