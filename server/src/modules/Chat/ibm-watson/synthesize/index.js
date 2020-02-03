import fs from 'fs';
import { join } from 'path';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1.js';

const authModule = join(global.dirname, 'modules', 'Chat', 'ibm-watson', 'auth', 'index.js');
const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = `https://${baseUrl}/instances/${instance}`;

let textToSpeech;

(async () => {
  let authenticator = await import(authModule);
	textToSpeech = new TextToSpeechV1({ authenticator: authenticator.default, url });
})();

export const doSynthesizeText = (payload) => {
	return new Promise ((resolve, reject) => {
		const uuid = payload.name;
		const audioFileName = `./src/conversations/${uuid}-audio.wav`;
		const params = {
			text: payload.roseResponse,
			accept: 'audio/wav',
			// voice: 'en-GB_KateVoice'
			voice: 'en-US_LisaVoice'
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

export const synthesizeText = async payload => await doSynthesizeText(payload);
