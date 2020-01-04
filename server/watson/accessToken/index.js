import AuthorizationV1 from 'ibm-watson/authorization/v1.js';
import authenticator from '../authenticator/index.js';
const apikey = process.env.WATSON_KEY;

const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = baseUrl.concat('/instances/').concat(instance);

// to get an IAM Access Token
const authorization = new AuthorizationV1({ authenticator, url });

export const getAccessToken = () => {
	return new Promise((resolve, reject) => {
		authorization.getToken((err, token) => {
		  if (!token) {
		    reject(err);
		  }
			resolve(token);
		});
	});
};
