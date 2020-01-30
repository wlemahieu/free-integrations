import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as ChatApi from 'services/Chat';
import * as types from 'redux/actionTypes';

export function* sendInput(action) {
  try {
    const response = yield call(ChatApi.sendInput, action.payload);
    const payload = response.data;
    yield put({ type: 'SAVE_AI_RESPONSE', payload });
  } catch (e) {
    const payload = e.message;
    yield put({ type: 'SAVE_AI_ERROR', payload });
  }
}

function* watchSendInput() {
  yield takeLatest(types.SEND_USER_INPUT, sendInput);
}

export default function* rootSaga() {
  yield all([
    watchSendInput
  ].map(saga => fork(saga)));
}
