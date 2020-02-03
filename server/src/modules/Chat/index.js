import { join } from 'path';

const roseModule = join(global.dirname, 'modules/Chat/rose/index.js');
const synthModule = join(global.dirname, 'modules/Chat/ibm-watson/synthesize/index.js');
const voicesModule = join(global.dirname, 'modules/Chat/ibm-watson/voices/index.js');

let rose;
let synth;
let voices;

(async () => {
  rose = await import(roseModule);
  synth = await import(synthModule);
  voices = await import(voicesModule);
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

export const getAllVoices = async res => {
  const { getVoices } = voices;
  const allVoices = await getVoices();
  if (allVoices) {
    res.send(allVoices);
  }
  res.status(404).end();
};
