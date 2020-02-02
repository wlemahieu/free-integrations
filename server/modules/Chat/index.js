import fs from 'fs';
import { getRoseResponse } from '../../modules/Chat/rose/index.js';
import { synthesizeText } from '../../modules/Chat/ibm-watson/synthesize/index.js';
// import { getAllVoices } from '../../modules/Chat/ibm-watson/voices/index.js';

export const postInput = async (payload, res) => {
	const roseResponse = await getRoseResponse(payload);
	if (roseResponse) {
		payload.roseResponse = roseResponse
		const synthesizedText = await synthesizeText(payload);
		if (synthesizedText) {
			res.send(roseResponse);
		}
	}
	res.status(404).end();
};

/*
export const getVoices = async res => {
	const voices = await getVoices();
	if (voices) {
    res.send(voices);
	}
	res.status(404).end();
};

*/
