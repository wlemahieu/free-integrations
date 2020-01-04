import { getAccessToken } from '../accessToken/index.js';

export const processInput = async (payload, res) => {
	const accessToken = await getAccessToken();
	console.log('accessToken ', accessToken);
});
var IAM_access_token = '{access_token}';
var wsURI = '{ws_url}/v1/synthesize'
  + '?access_token=' + accessToken
  + '&voice=en-US_AllisonVoice';
var websocket = new WebSocket(wsURI);

websocket.onopen = function(evt) { onOpen(evt) };
websocket.onclose = function(evt) { onClose(evt) };
websocket.onmessage = function(evt) { onMessage(evt) };
websocket.onerror = function(evt) { onError(evt) };
