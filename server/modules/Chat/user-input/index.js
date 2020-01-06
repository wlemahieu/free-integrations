import fs from 'fs';
import { rose } from '../rose-response/index.js';
import textToSpeech from '../ibm-watson/text-to-speech/index.js';

export const processInput = async (payload, res) => {
	const uuid = payload.name;
	const audioFileName = `./conversations/${uuid}-audio.wav`;
	const roseResponse = await rose(payload);
	const params = {
	  text: roseResponse,
	  accept: 'audio/wav',
	  voice: 'en-US_AllisonVoice',
	};
	// const accessToken = await getAccessToken();
	// console.log('accessToken ', accessToken);
	textToSpeech.synthesize(params)
		.then(response => {
			const audio = response.result;
			return textToSpeech.repairWavHeaderStream(audio);
		})
		.then(repairedFile => {
			if (fs.existsSync(audioFileName)) {
				fs.unlinkSync(audioFileName);
			}
			fs.writeFileSync(audioFileName, repairedFile);
			res.send(roseResponse);
		})
		.catch(err => {
			console.log(err);
		});
};
