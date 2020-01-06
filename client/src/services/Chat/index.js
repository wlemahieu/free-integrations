import Api from '../Api';

export const sendInput = payload => Api.post('/chat', payload);
