import Api from '../Api';

export const sendInput = input => Api.post('/', { payload: input });
