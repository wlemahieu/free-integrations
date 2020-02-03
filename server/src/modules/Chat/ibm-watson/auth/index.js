import WatsonAuth from 'ibm-watson/auth/index.js';

const { IamAuthenticator } = WatsonAuth;
const apikey = process.env.WATSON_TTS_API_KEY;

export default new IamAuthenticator({ apikey });
