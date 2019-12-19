import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
// import PrivateRoute from './PrivateRoute';

import NoRoute from '../pages/NoRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes = () => (
  <Router basename="/">
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        {/* <PrivateRoute path="/users" exact component={Users} /> */}
        <Route component={NoRoute} />
      </Switch>
    </main>
  </Router>
);

export default Routes;
