import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import allReducers from './reducers';

const logger = createLogger({
  collapsed: logEntry => !logEntry.error,
});

const persistConfig = {
  timeout: 0,
  key: 'persist',
  storage,
  stateReconciler: hardSet,
};

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, allReducers);
const enhancers = compose(applyMiddleware(...middleware));

const store = (initialState = {}) => {
  const store = createStore(persistedReducer, initialState, enhancers);

  const persistor = persistStore(store);

  return { store, persistor };
};

export default store;
