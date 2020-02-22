import React, { useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { useToasts } from 'react-toast-notifications';

import DimmerLoader from '../../DimmerLoader';

import {
  getToken,
  clearUserInfo,
} from '../../../store/reducers/signUp/actions';
import {
  loginValidationSchema as validationSchema,
  getLoginDisabledStatus,
} from '../../../utils/helpers';
import {
  loginPlaceholders as placeholders,
  loginFields as fields,
} from '../../../utils/constants';

import '../Form.scss';

const Login = ({ signUp, getToken, history, clearUserInfo }) => {
  // const { addToast } = useToasts();
  const { error, loading } = signUp;
  const onDismiss = () => clearUserInfo();

  useEffect(() => {
    if (error) {
      console.info('onDismiss: ', onDismiss);
      // addToast(signUp.error.message, { appearance: 'error', onDismiss });
      history.push(`/${signUp.data.username}`);
    }
  }, [signUp]);

  const handleSubmit = values => {
    return getToken(values);
  };

  return (
    <Formik initialValues={fields} validationSchema={validationSchema}>
      {props => {
        const isDisabled = getLoginDisabledStatus(props);
        const { values, handleChange, handleBlur, errors, touched } = props;
        const onSubmit = () => handleSubmit(values);

        return (
          <div className="login-form">
            <Form onSubmit={onSubmit} error={!!errors}>
              <DimmerLoader active={loading} />
              <Form.Input
                fluid
                label="Username"
                placeholder={placeholders.username}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="username"
                type="email"
                error={touched.username && props.errors.username}
              />
              <Form.Input
                fluid
                label="Password"
                placeholder={placeholders.password}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="password"
                type="password"
                error={touched.password && errors.password}
              />

              <div className="btn-container btn-container__center">
                <Button
                  size="big"
                  type="submit"
                  loading={loading}
                  disabled={isDisabled}
                  content="Login"
                />
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = ({ signUp }) => ({ signUp });

const mapDispatchToProps = {
  getToken,
  clearUserInfo,
};

Login.defaultProps = {
  handleChange: () => null,
  handleBlur: () => null,
  values: {
    username: '',
    password: '',
  },
  touched: {
    username: '',
  },
  errors: {
    username: '',
  },
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  getToken: PropTypes.func.isRequired,
  clearUserInfo: PropTypes.func.isRequired,
  signUp: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  values: PropTypes.exact({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  touched: PropTypes.exact({
    username: PropTypes.string,
  }),
  errors: PropTypes.exact({
    username: PropTypes.string,
  }),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
