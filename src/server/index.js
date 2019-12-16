import axios from 'axios';
import { apiUrl } from './config';
import { paramsSerializer } from '../utils/helpers';

// eslint-disable-next-line consistent-return
const requestWidth = (method, route, params = {}, headers) => {
  if (method === 'POST') {
    return axios({
      method,
      url: `${apiUrl}/${route}`,
      data: params,
      paramsSerializer,
      headers,
    });
  }
  return axios({
    method,
    url: `${apiUrl}/${route}`,
    params,
    paramsSerializer,
  });
};

export const get = (route, params) =>
  requestWidth('GET', route, params).then(res => res.data);

export const post = (route, params, headers = {}) =>
  requestWidth('POST', route, params, headers).then(res => res.data);

export const requestContainer = params => axios(params).then(res => res.data);
