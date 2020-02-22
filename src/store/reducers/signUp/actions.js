import { COMMON } from '../types';
import { post } from '../../../server';
import { tokenHeaders as headers, tokenParams } from '../../../utils/constants';
import CONSTANTS from './constants';

// import { serverError } from '../view/actions';

export const clearSignUpError = () => {
  return dispatch => {
    dispatch({
      type: CONSTANTS.SIGNUP_CLEAR_USER_ERROR,
    });
  };
};

export const clearUserInfo = () => {
  return dispatch => {
    dispatch({
      type: CONSTANTS.SIGNUP_CLEAR_USER_INFO,
    });
  };
};

export const getToken = params => {
  const adjustedParams = {
    ...tokenParams,
    ...params,
  };

  return async dispatch => {
    dispatch({
      type: `${CONSTANTS.SIGNUP_GET_TOKEN}${COMMON.START}`,
      payload: adjustedParams,
    });
    try {
      const formData = new URLSearchParams();

      formData.append('grant_type', adjustedParams.grant_type);
      formData.append('client_id', adjustedParams.client_id);
      formData.append('client_secret', adjustedParams.client_secret);
      formData.append('scope', adjustedParams.scope);
      formData.append('username', adjustedParams.username);
      formData.append('password', adjustedParams.password);

      const res = await post('connect/token', formData, headers);

      dispatch({
        type: `${CONSTANTS.SIGNUP_GET_TOKEN}${COMMON.SUCCESS}`,
        payload: res,
      });
    } catch (err) {
      console.info('err: ', JSON.stringify(err));
      // if (err.response && err.response.status === 500) {
      //   serverError(err.response);
      // } else {
      dispatch({
        type: `${CONSTANTS.SIGNUP_GET_TOKEN}${COMMON.ERROR}`,
        payload: err,
      });
      // }
    }
  };
};
