import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

import GridWrapper from '../../components/GridWrapper';

import { getToken } from '../../store/reducers/signUp/actions';

const Home = () => {
  return (
    <GridWrapper>
      <Message>
        <p>
          <Link
            to={{
              pathname: '/login',
            }}>
            Login
          </Link>{' '}
          or{' '}
          <Link
            to={{
              pathname: '/signup',
            }}>
            Sign up
          </Link>
        </p>
      </Message>
    </GridWrapper>
  );
};

const mapStateToProps = ({ signUp }) => ({ signUp });

const mapDispatchToProps = {
  getToken,
};

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
