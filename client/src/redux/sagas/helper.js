import startCase from 'lodash/startCase';

export const processVoices = voices => {
  return voices.split(',').map(voice => {
    const [language, remainder] = voice.split('-');
    const [country, voiceName] = remainder.split('_');
    const name = startCase(voiceName.replace('V2', '').replace('V3', '').replace('Voice', ''));
    return {
      language,
      country,
      name,
      voice
    };
  });
};
