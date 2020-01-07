import redis from 'redis';
import AuthorizationV1 from 'ibm-watson/authorization/v1.js';
import WatsonAuth from 'ibm-watson/auth/index.js';
import authenticator from '../authenticator/index.js';

const client = redis.createClient();
// build authorization URL
const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = `https://${baseUrl}/instances/${instance}`;
// build authorization instantiator
const authorization = new AuthorizationV1({ authenticator, url });

export const createAccessToken = () => {
	return new Promise((resolve, reject) => {
		authorization.getToken((err, token) => {
		  if (!token) {
		    reject(err);
		  }
			resolve(token);
		});
	});
};

export const getAccessToken = () => {
	return new Promise((resolve, reject) => {
		client.get("WATSON_ACCESS_TOKEN", (err, token) => {
			if (err) {
				reject(err);
			}
			resolve(token.toString());
		});
	});
};

export const setAccessToken = (newToken) => client.set("WATSON_ACCESS_TOKEN", newToken);
