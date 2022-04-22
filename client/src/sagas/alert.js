import { all, call, fork, put, takeLatest, delay } from 'redux-saga/effects';
import { AlertActionType } from 'myRedux/constants';
import { closeAlert } from 'myRedux/actions/AlertActions';

function* closeShowAlert() {
  try {
    yield delay(2000);
    yield put(closeAlert());
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
