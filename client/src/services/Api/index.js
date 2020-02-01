import axios from 'axios';
import axiosConfig from './axiosConfig';

const baseURL = 'http://localhost:3000';

class API {
  constructor(config) {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL,
        ...axiosConfig,
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

export default new API();
