import API from 'services/API';

export const getVoices = () => API.get('/chat');
export const sendInput = payload => API.post('/chat', payload);
