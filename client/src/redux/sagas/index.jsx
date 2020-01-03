import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ChatApi from '../../services/Chat';
import * as types from '../actionTypes';

export function* sendInput(action) {
	try {
		console.log('sendInput action ', action);
		const inputResponse = yield call(ChatApi.sendInput, action.payload);
		const payload = inputResponse.data;
		yield put({ type: 'SAVE_AI_RESPONSE', payload });
		yield put({ type: 'SAVE_USER_KEY', payload: '' });
	} catch (e) {
		console.log('error ', e);
		yield put({ type: 'AI_RESPONSE_FAILED', message: e.message });
	}
}

function* watchSendInput() {
	yield takeLatest(types.SAVE_USER_INPUT, sendInput);
}

export function* keyPress(action) {
	const payload = action.payload;
	yield put({ type: 'SAVE_USER_KEY', payload });
}

function* watchKeypress() {
	yield takeEvery(types.USER_KEY_PRESS, keyPress);
}

export default function* rootSaga() {
	yield all([
		watchKeypress,
		watchSendInput
	].map(saga => fork(saga)));
}
