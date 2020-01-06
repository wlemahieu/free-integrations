import cors from 'cors';
import express from 'express';
import fs from 'fs';
import { rose } from '../rose/index.js';
import { newsSources } from '../newsapi/index.js';
import textToSpeech from '../watson/text-to-speech/index.js';
import { getAccessToken } from '../watson/accessToken/index.js';

const router = express.Router();
const corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 200
};

const processInput = async (payload, res) => {
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

router.post('/', cors(corsOptions), (req, res) => processInput(req.query, res));
router.get('/news', (req, res) => newsSources(res));

export default router;
