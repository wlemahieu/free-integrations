import dotenv from 'dotenv';
dotenv.config();

import Watson from 'ibm-watson/sdk.js';
import WatsonAuth from 'ibm-watson/auth/index.js';

const { TextToSpeechV1 } = Watson;
const { IamAuthenticator } = WatsonAuth;

const apikey = process.env.WATSON_KEY;
const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;

const authenticator = new IamAuthenticator({ apikey });
const url = baseUrl.concat('/instances/').concat(instance);
const textToSpeech = new TextToSpeechV1({ authenticator, url });

export default textToSpeech;
