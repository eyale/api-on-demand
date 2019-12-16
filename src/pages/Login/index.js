import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from '../../components/Forms/LoginForm';

import { getToken } from '../../store/reducers/signUp/actions';

const Login = ({ signUp, getToken, history }) => {
  const redirectToUsers = () => {
    history.push('/users');
  };

  const handleSubmit = async values => {
    await getToken(values);
    redirectToUsers();
  };
  const { error, loading } = signUp;

  return (
    <div className="container">
      <Grid>
        <Grid.Row centered>
          <Grid.Column largeScreen={6} mobile={16}>
            <LoginForm
              onSubmit={handleSubmit}
              loading={loading}
              serverErrors={error}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
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
