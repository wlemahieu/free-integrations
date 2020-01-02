import { call, put, takeLatest } from 'redux-saga/effects';
import * as ChatApi from '../../services/Chat';

export function* sendInput(action) {
	console.log('sendInput action ', action);
   try {
      const inputResponse = yield call(ChatApi.sendInput, action.payload.input);
			console.log('inputResponse ', inputResponse);
      yield put({ type: 'USER_INPUT_SUCCEEDED', response: inputResponse });
   } catch (e) {
		 console.log('error ', e);
      yield put({ type: 'USER_INPUT_FAILED', message: e.message });
   }
}

function* watchSendInput() {
  yield takeLatest('USER_INPUT', sendInput);
}

export default watchSendInput;
