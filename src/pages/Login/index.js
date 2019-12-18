import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from '../../components/Forms/Login';
import GridWrapper from '../../components/GridWrapper';

import { getToken } from '../../store/reducers/signUp/actions';

const Login = ({ signUp, getToken, history }) => {
  const redirectToUsers = () => {
    history.push('/');
  };

  const handleSubmit = async values => {
    await getToken(values);
    redirectToUsers();
  };
  const { error, loading } = signUp;

  return (
    <GridWrapper>
      <LoginForm
        onSubmit={handleSubmit}
        loading={loading}
        serverErrors={error}
      />
    </GridWrapper>
  );
};

const mapStateToProps = ({ signUp }) => ({ signUp });

const mapDispatchToProps = {
  getToken,
};

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
  signUp: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
