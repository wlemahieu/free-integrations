import fs from 'fs';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1.js';
import authenticator from '../authenticator/index.js';
// import { createAccessToken, getAccessToken, setAccessToken } from '../accessToken/index.js';

const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = `https://${baseUrl}/instances/${instance}`;
const textToSpeech = new TextToSpeechV1({ authenticator, url });

export const synthesizeText = (payload) => {
	return new Promise ((resolve, reject) => {
		const uuid = payload.name;
		const audioFileName = `./conversations/${uuid}-audio.wav`;
		const params = {
			text: payload.roseResponse,
			accept: 'audio/wav'
		};
		const synthesizedStream = textToSpeech.synthesizeUsingWebSocket(params);
		synthesizedStream.pipe(fs.createWriteStream(audioFileName));
		synthesizedStream.on('error', (err) => {
			reject(err);
		});
		synthesizedStream.on('close', (code, reason) => {
			resolve(payload.roseResponse);
		});
	});
};

export const handleInput = async payload => {
	const synthesizedText = await synthesizeText(payload);
	return synthesizedText;
};
