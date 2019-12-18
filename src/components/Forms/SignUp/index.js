import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import DimmerLoader from '../../DimmerLoader';

import {
  signUpValidationSchema as validationSchema,
  getSignUpDisabledStatus,
} from '../../../utils/helpers';
import {
  signUpPlaceholders as placeholders,
  signUpFields as fields,
} from '../../../utils/constants';

import '../Form.scss';

const SignUp = ({ onSubmit, loading, serverErrors }) => {
  const [isPassHidden, handleIsPassHidden] = useState(true);
  const [isRepeatPassHidden, handleIsRepeatPassHidden] = useState(true);
  const togglePassEye = () => handleIsPassHidden(!isPassHidden);
  const toggleRepeatPassEye = () =>
    handleIsRepeatPassHidden(!isRepeatPassHidden);
  const iconName = isPassHidden ? 'eye' : 'eye slash';
  const repeatIconName = isRepeatPassHidden ? 'eye' : 'eye slash';
  const type = isPassHidden ? 'password' : 'input';
  const typeRepeat = isRepeatPassHidden ? 'password' : 'input';

  const handleSubmit = values => {
    return onSubmit && onSubmit(values);
  };
  const errorMessage = serverErrors && serverErrors.data.error_description;

  return (
    <Formik initialValues={fields} validationSchema={validationSchema}>
      {props => {
        const isDisabled = getSignUpDisabledStatus(props);
        const { values, handleChange, handleBlur, errors, touched } = props;
        const onSubmit = () => handleSubmit(values);

        return (
          <div className="login-form">
            <Form error={!!errors}>
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
                type={type}
                error={touched.password && errors.password}
                action={{ icon: iconName, onClick: togglePassEye }}
              />
              <Form.Input
                fluid
                label="Repeat password"
                placeholder={placeholders.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="repeatPassword"
                type={typeRepeat}
                error={touched.password && errors.password}
                action={{ icon: repeatIconName, onClick: toggleRepeatPassEye }}
              />

              <Message error content={errorMessage} />
              <div className="btn-container btn-container__center">
                <Button
                  size="big"
                  type="submit"
                  loading={loading}
                  disabled={isDisabled}
                  content="Sign up"
                  onClick={onSubmit}
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
