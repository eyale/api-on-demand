import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import DimmerLoader from '../../DimmerLoader';

import {
  loginValidationSchema as validationSchema,
  getLoginDisabledStatus,
} from '../../../utils/helpers';
import {
  loginPlaceholders as placeholders,
  loginFields as fields,
} from '../../../utils/constants';

import '../Form.scss';

const SignUp = ({ onSubmit, loading, serverErrors }) => {
  const handleSubmit = values => {
    return onSubmit && onSubmit(values);
  };
  const errorMessage = serverErrors && serverErrors.data.error_description;

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

              <Message error content={errorMessage} />
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

SignUp.defaultProps = {
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
  serverErrors: null,
};

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
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
  serverErrors: PropTypes.oneOfType([() => null, PropTypes.object]),
};
export default SignUp;
