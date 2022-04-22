import { all, call } from 'redux-saga/effects';
import alert from './alert';
export default function* rootSaga() {
  yield all([call(alert)]);
}
