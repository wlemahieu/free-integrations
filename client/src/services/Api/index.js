import axios from 'axios';

export const baseURL = 'http://localhost:3000';
const apiConfig = {
  baseURL,
  timeout: 100000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

class Api {
  constructor(config) {
    if (!this.instance) {
      this.instance = axios.create({
        ...apiConfig,
        ...config
      });
    }
  }

  req(defaultOptions, options) {
    return this.instance.request({ ...defaultOptions, ...options });
  }

  get(url, params, options = {}) {
    const defaultOptions = {
      url,
      params,
      method: 'get'
    };
    return this.req(defaultOptions, options);
  }

  post(url, params, options = {}) {
    const defaultOptions = {
      url,
      params,
      method: 'post'
    };
    return this.req(defaultOptions, options);
  }
}

const api = new Api();

export default api;
