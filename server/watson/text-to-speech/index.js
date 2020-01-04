import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1.js';
import authenticator from '../authenticator/index.js';

const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = baseUrl.concat('/instances/').concat(instance);

export default new TextToSpeechV1({ authenticator, url });
