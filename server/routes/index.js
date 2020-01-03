import cors from 'cors';
import express from 'express';
import fs from 'fs';
import scraper from '../scraper/index.js';
import textToSpeech from '../watson/text-to-speech/index.js';

const router = express.Router();
const corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 200
};

router.post('/', cors(corsOptions), (req, res, next) => {
	const input = req.query.payload;
	scraper(input)
		.then(response => {
			const params = {
			  text: response,
			  accept: 'audio/wav',
			  voice: 'en-US_AllisonVoice',
			};
			textToSpeech.synthesize(params)
				.then(response => {
					const audio = response.result;
					return textToSpeech.repairWavHeaderStream(audio);
				})
				.then(repairedFile => {
					fs.writeFileSync('audio.wav', repairedFile);
					res.send(response);
				})
				.catch(err => {
					console.log(err);
				});
	});
});

export default router;
