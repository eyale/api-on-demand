import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
// import PrivateRoute from './PrivateRoute';

import NoRoute from '../pages/NoRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => (
  <Router>
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        {/* <PrivateRoute path="/users" exact component={Users} /> */}
        <Route component={NoRoute} />
      </Switch>
    </main>
  </Router>
);

export default Routes;
