import { combineReducers } from 'redux';
import signUp from './signUp';

const appReducer = combineReducers({
  signUp,
});

const allReducers = (state, action) => {
  if (action.type === 'SIGNUP_CLEAR_USER_INFO') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default allReducers;
