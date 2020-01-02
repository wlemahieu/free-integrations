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

/*
const success = res => {
	const resp = res.data;
	const code = resp.code;
	console.log('succes resp ', resp);
	return resp;
}
*/

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
		console.log('post');
		console.log('url ', url);
		console.log('params ', params);
		console.log('options ', options);
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
