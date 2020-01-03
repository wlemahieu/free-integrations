import Watson from 'ibm-watson/sdk.js';
import WatsonAuth from 'ibm-watson/auth/index.js';

const { TextToSpeechV1 } = Watson;
const { IamAuthenticator } = WatsonAuth;
const instance = '56a70a2c-3d2a-4e45-b6cf-30f14d3fd42f';
const baseUrl = 'https://api.us-south.text-to-speech.watson.cloud.ibm.com';

const authenticator = new IamAuthenticator({ apikey: 'ykt7UIE7Kw_ALOxjfTiAlwG2xYrS98l5iRW6i_UXtzoR' });
const url = baseUrl.concat('/instances/').concat(instance);
const textToSpeech = new TextToSpeechV1({ authenticator, url });

export default textToSpeech;
