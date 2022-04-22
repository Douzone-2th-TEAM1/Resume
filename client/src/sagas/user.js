import { CommunicationType } from 'myRedux/constants';
import { all, call, fork, put, takeLatest, select } from 'redux-saga/effects';
import { openAlert } from 'myRedux/actions/AlertActions';
import axios from 'axios';
import { openModal } from 'myRedux/actions/ModalActions';
import { setInfo } from 'myRedux/actions/CommuicationAction';

axios.defaults.baseURL = 'http://192.168.2.26:8080';

function setLoaclStorate({ token, email }) {
  console.log(token, email);
  localStorage.setItem('TOKEN', token);
  localStorage.setItem('EMAIL', email);
}

function signupAPI(info) {
  const result = axios
    .post('/accounts/signup', info)
    .then((res) => {
      return res.data.resCode;
    })
    .catch((err) => {
      return err;
    });
  return result;
}

function signInAPI(info) {
  const result = axios
    .post('/accounts/login', info)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return result;
}

function* postData() {
  try {
    const data = yield select((state) => {
      return state.CommunicationReducer;
    });
    let resultCode = yield call(signupAPI, data);
    if (resultCode === 0) {
      yield put(openModal());
    } else {
      yield put(openAlert('에러가 발생했습니다. 다시 시도하세요.', 'fail'));
    }
  } catch (e) {
    console.log(e);
  }
}

function* postSginIn() {
  try {
    const info = yield select((state) => {
      return state.CommunicationReducer;
    });

    let data = yield call(signInAPI, info);
    console.log(data);
    if (data.resCode === 0) {
      const [token, email] = [data.token, data.email];
      // localStorage.setItem('TOKEN', token);
      // localStorage.setItem('EMAIL', email);
      // yield put({ type: ENROLL, token: token, email: email });
      yield put(setInfo(email, token));
      yield put(openAlert('로그인 성공했습니다.', 'success'));
    } else {
      yield put(openAlert('에러가 발생했습니다. 다시 시도하세요.', 'fail'));
    }
  } catch (e) {
    console.log(e);
  }
}

function* watchAlert() {
  yield takeLatest(CommunicationType.SIGN_UP, postData);
  yield takeLatest(CommunicationType.SIGN_IN, postSginIn);
  yield takeLatest(CommunicationType.GET_TOKEN, setLoaclStorate);
}

export default function* userSaga() {
  yield all([fork(watchAlert)]);
}
