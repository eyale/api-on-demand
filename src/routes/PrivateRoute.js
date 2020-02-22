import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as R from 'ramda';

const PrivateRoute = ({ component: Component, signUp, ...rest }) => {
  const isAuthenticated = R.isNil(signUp.token);
  // const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
const mapStateToProps = ({ signUp }) => ({
  signUp,
});

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  signUp: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {})(PrivateRoute);
