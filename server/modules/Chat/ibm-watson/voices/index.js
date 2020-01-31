import fs from 'fs';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1.js';
import authenticator from 'modules/Chat/ibm-watson/auth/index.js';

const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = `https://${baseUrl}/instances/${instance}`;
const textToSpeech = new TextToSpeechV1({ authenticator, url });

export const getAllVoices = async () => {
	const res = await textToSpeech.getVoices();
  return res;
};
