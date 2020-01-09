import Api from 'services/Api';

export const sendInput = payload => Api.post('/chat', payload);
