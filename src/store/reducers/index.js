import { combineReducers } from 'redux';
import signUp from './signUp';
import view from './view';

const appReducer = combineReducers({
  signUp,
  view,
});

const allReducers = (state, action) => {
  if (action.type === 'SIGNUP_CLEAR_USER_INFO') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default allReducers;
