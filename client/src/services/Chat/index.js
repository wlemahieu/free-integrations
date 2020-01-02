import Api from '../Api';

export const sendInput = input => Api.post('/', { input });
