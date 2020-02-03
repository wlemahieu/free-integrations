import { join } from 'path';

const roseModule = join(global.dirname, 'modules/Chat/rose/index.js');
const synthModule = join(global.dirname, 'modules/Chat/ibm-watson/synthesize/index.js');

let rose;
let synth;

(async () => {
  rose = await import(roseModule);
  synth = await import(synthModule);
})();

export const postInput = async (payload, res) => {
  const { getRoseResponse } = rose;
  const { synthesizeText } = synth;
  const roseResponse = await getRoseResponse(payload);
  if (roseResponse) {
    payload.roseResponse = roseResponse;
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
