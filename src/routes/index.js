import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';

import NoRoute from '../pages/NoRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';

const Routes = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />

        <PrivateRoute path="/:username" exact component={Main} />
        <Route component={NoRoute} />
      </Switch>
    </main>
  </Router>
);

export default Routes;
