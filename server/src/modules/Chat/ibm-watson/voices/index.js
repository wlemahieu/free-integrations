import ted from 'tedis';
import { join } from 'path';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1.js';

const { Tedis } = ted;
const authModule = join(global.dirname, 'modules', 'Chat', 'ibm-watson', 'auth', 'index.js');
const tedis = new Tedis();
const instance = process.env.WATSON_TTS_INSTANCE;
const baseUrl = process.env.WATSON_TTS_URL;
const url = `https://${baseUrl}/instances/${instance}`;

let textToSpeech;

(async () => {
  const authenticator = await import(authModule);
  textToSpeech = new TextToSpeechV1({ authenticator: authenticator.default, url });
})();

const getCachedVoices = async () => tedis.get('CHAT_TTS_VOICES');

const setCachedVoices = async voices => tedis.set('CHAT_TTS_VOICES', voices);

export const getVoices = async () => {
	try {
	  const cachedVoices = await getCachedVoices();
	  if (cachedVoices && cachedVoices.length) {
	    return cachedVoices;
	  }
	  const { result: { voices } } = await textToSpeech.listVoices();
		const voiceNames = voices.map(obj => {
			return obj.name;
		}).toString();
	  await setCachedVoices(voiceNames);
	  return voiceNames;
	} catch (e) {
		console.log(e);
	}
};
