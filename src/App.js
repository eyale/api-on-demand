import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'semantic-ui-css/semantic.min.css';

import './styles/default.scss';

import configureStore from './store';

import Routes from './routes';
import DimmerLoader from './components/DimmerLoader';

const { store, persistor } = configureStore();

const Application = () => (
  <div className="wrapper">
    <Routes />
  </div>
);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<DimmerLoader active />} persistor={persistor}>
      <Application />
    </PersistGate>
  </Provider>
);

export default App;
