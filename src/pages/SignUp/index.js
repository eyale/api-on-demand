import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUpForm from '../../components/Forms/SignUp';
import GridWrapper from '../../components/GridWrapper';

import { getToken } from '../../store/reducers/signUp/actions';

const SignUp = ({ signUp, getToken, history }) => {
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
      <SignUpForm
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

SignUp.propTypes = {
  getToken: PropTypes.func.isRequired,
  signUp: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
