import * as yup from 'yup';
import * as D from 'date-fns';

// https://github.com/jquense/yup#mixedlabellabel-string-schema

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .label('Username')
    .email('Incorrect Username')
    .required(),
  password: yup
    .string()
    .label('Password')
    .required('Please Enter your password'),
});

// eslint-disable-next-line func-names
export const paramsSerializer = params => {
  if (typeof params === 'object') {
    return Object.keys(params)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
      )
      .join('&');
  }
  return null;
};

export const getLoginDisabledStatus = ({ values }) => {
  const isValidUsername = values.username.length === 0;

  const isValidPassword = values.password.length < 1;

  const validationArr = [isValidUsername, isValidPassword];

  return !validationArr.every(field => !field);
};

export const getHomeBaseParams = (params, initialLocation) =>
  params && {
    homeBasePlaceId: params.place_id || '',
    homeBaseAddress: params.formatted_address || initialLocation,
    homeBaseLat: params.geometry.lat || 0,
    homeBaseLong: params.geometry.lng || 0,
  };
export const dateFormat = date => {
  const d = D.parseISO(date);
  const datePattern = `MM/dd/yyyy`;

  return D.format(d, datePattern);
};
