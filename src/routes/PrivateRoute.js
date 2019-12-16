import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as R from 'ramda';

const PrivateRoute = ({ component: Component, signUp, ...rest }) => {
  const isNotAuthenticated = R.isNil(signUp.token);

  return (
    <Route
      {...rest}
      render={props =>
        isNotAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
const mapStateToProps = ({ signUp }) => ({
  signUp,
});

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  signUp: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {})(PrivateRoute);
