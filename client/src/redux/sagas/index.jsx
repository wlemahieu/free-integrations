import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as ChatAPI from 'services/Chat';
import * as types from 'redux/actionTypes';
import * as helper from './helper.js';

export function* getVoices() {
  try {
    const response = yield call(ChatAPI.getVoices);
    const payload = helper.processVoices(response.data);
    yield put({ type: 'SAVE_VOICES', payload });
  } catch (e) {
    const payload = e.message;
    yield put({ type: 'SAVE_ERROR', payload });
  }
}

function* watchGetVoices() {
  yield takeLatest(types.GET_VOICES, getVoices);
}

export function* sendInput(action) {
  try {
    const response = yield call(ChatAPI.sendInput, action.payload);
    const payload = response.data;
    yield put({ type: 'SAVE_AI_RESPONSE', payload });
  } catch (e) {
    const payload = e.message;
    yield put({ type: 'SAVE_ERROR', payload });
  }
}

function* watchSendInput() {
  yield takeLatest(types.SEND_INPUT, sendInput);
}

export default function* rootSaga() {
  yield all([
    watchGetVoices,
    watchSendInput
  ].map(saga => fork(saga)));
}
