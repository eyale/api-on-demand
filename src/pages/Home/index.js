import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from '../../components/Forms/LoginForm';
import GridWrapper from '../../components/GridWrapper';

import { getToken } from '../../store/reducers/signUp/actions';

const Home = ({ signUp, getToken, history }) => {
  const redirectToUsers = () => {
    history.push('/users');
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

Home.propTypes = {
  getToken: PropTypes.func.isRequired,
  signUp: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
