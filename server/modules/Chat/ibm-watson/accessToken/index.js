import { Tedis } from 'tedis';
import AuthorizationV1 from 'ibm-watson/authorization/v1.js';
import WatsonAuth from 'ibm-watson/auth/index.js';
import authenticator from '../authenticator/index.js';

const tedis = new Tedis();
// build authorization URL
const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = `https://${baseUrl}/instances/${instance}`;
// build authorization instantiator
const authorization = new AuthorizationV1({ authenticator, url });

export const createAccessToken = async () => {
	return await authorization.getToken((err, token) => token ? token : null);
};

export const getAccessToken = async () => {
	const token = await tedis.get("WATSON_ACCESS_TOKEN");
	return token.toString();
};

export const setAccessToken = async newToken => {
	return await tedis.set("WATSON_ACCESS_TOKEN", newToken);
};
