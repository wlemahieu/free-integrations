import API from 'services/API';

export const sendInput = payload => API.post('/chat', payload);
