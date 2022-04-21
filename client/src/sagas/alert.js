import { all, call, fork, put, takeLatest, delay } from 'redux-saga/effects';
import { AlertActionType } from 'myRedux/constants';

function* closeShowAlert() {
  try {
    yield delay(2000);
    yield put({ type: AlertActionType.CLOSE_ALERT, status: false });
  } catch (e) {
    console.log(e);
  }
}

function* watchAlert() {
  yield takeLatest(AlertActionType.OPEN_ALERT, closeShowAlert);
}

export default function* alertSaga() {
  yield all([fork(watchAlert)]);
}
