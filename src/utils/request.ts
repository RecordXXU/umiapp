import axios from 'axios';
import { message } from 'antd';

export default function request(url: any, params: any) {
  return axios(url, params)
    .then((response) => {
      // const { statusText, status, data } = response;
      // return response;
      return Promise.resolve({
        success: false,
        ...response,
      });
    })
    .catch((error) => {
      const { response, message } = error;

      let msg;
      let statusCode;

      if (response && response instanceof Object) {
        const { data, statusText } = response;
        statusCode = response.status;
        msg = data.message || statusText;
      } else {
        statusCode = 600;
        msg = error.message || 'Network Error';
      }

      /* eslint-disable */
      return Promise.reject({
        success: false,
        statusCode,
        message: msg,
      });
    });
}
