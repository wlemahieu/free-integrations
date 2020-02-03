/*
import { Tedis } from 'tedis';
import fs from 'fs';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1.js';
import authenticator from '../auth/index.js';

const tedis = new Tedis();
const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = `https://${baseUrl}/instances/${instance}`;
const textToSpeech = new TextToSpeechV1({ authenticator, url });

const getCachedVoices = async () => {
	const voices = await tedis.get("CHAT_TTS_VOICES");
	return voices.toString();
};

const setCachedVoices = async voices => {
	return await tedis.set("CHAT_TTS_VOICES", voices);
};

export const getAllVoices = async () => {
	const cachedVoices = await getCachedVoices();
	if (cachedVoices.length) {
		console.log('FOUND CACHED!');
		return cachedVoices;
	} else {
		console.log('NO CACHED!');
		const voices = await textToSpeech.listVoices();
		await setCachedVoices(voices);
		return voices;
	}
}
*/
