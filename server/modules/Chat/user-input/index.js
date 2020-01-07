import fs from 'fs';
import rose from '../rose/index.js';
import { handleInput } from '../ibm-watson/synthesize-text/index.js';

export const processInput = async (payload, res) => {
	const roseResponse = await rose(payload);
	if (roseResponse) {
		payload.roseResponse = roseResponse
		const synthesizedText = await handleInput(payload);
		if (synthesizedText) {
			res.send(roseResponse);
		}
	}
	res.status(404).end();
};
