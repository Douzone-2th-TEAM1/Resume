import { CommunicationType, ResumeActionType } from 'myRedux/constants';
import { all, call, fork, put, takeLatest, select, take } from 'redux-saga/effects';
import { openAlert } from 'myRedux/actions/AlertActions';
import axios from 'axios';
import { openModal } from 'myRedux/actions/ModalActions';
import { getInfo, getResume, setInfo, viewResume } from 'myRedux/actions/CommuicationAction';

// axios.defaults.baseURL = 'http://192.168.2.26:8080';
axios.defaults.baseURL = 'http://localhost:8080';

// let configHeader = {
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
//   },
// };

const getHeader = () => {
  const headers = { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` };
  return {
    headers,
  };
};

const imgHeader = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    'Content-Type': 'multipart/form-data',
  },
};

// function setLoaclStorate({ token, email }) {
//   console.log(token, email);
//   localStorage.setItem('TOKEN', token);
//   localStorage.setItem('EMAIL', email);
// }

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
function viewInfoAPI() {
  const result = axios
    .post('/users/', '', getHeader())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return result;
}

function modifyAPI(info) {
  const result = axios
    .post('/users/edit', info, getHeader())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return result;
}

function postWithdrawal() {
  const result = axios
    .post('/users/resign', '', getHeader())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return result;
}

function resumeViewAPI() {
  const result = axios
    .post('/resumes/load', '', getHeader())
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return result;
}

function photoAPI(info) {
  let form = new FormData();
  console.log(info.img);
  form.append('image', info.img);

  const result = axios
    .post('/resumes/upload', form, imgHeader)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return result;
}

function resumeStoreAPI(info, photo) {
  const {
    title,
    department,
    portfolio,
    template,
    awards,
    careers,
    certifications,
    educations,
    projects,
    qnas,
    techs,
  } = info;
  const packedMsg = {
    title,
    photo: photo,
    department,
    portfolio,
    template,
    awards,
    careers,
    certifications,
    educations,
    projects,
    qnas,
    techs,
  };

  const result = axios
    .post('/resumes/save', packedMsg, getHeader())
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
    const { history } = info.payload;
    const { email, pwd } = info.payload;
    const packedMsg = { email, pwd };
    let data = yield call(signInAPI, packedMsg);
    console.log(data);
    if (data.resCode === 0) {
      const [token, email] = [data.token, data.email];
      localStorage.setItem('TOKEN', token);
      localStorage.setItem('EMAIL', email);
      yield put(viewResume());
      yield put(openAlert('로그인 성공했습니다.', 'success'));

      history.push('/main');
    } else {
      yield put(openAlert('에러가 발생했습니다. 다시 시도하세요.', 'fail'));
    }
  } catch (e) {
    console.log(e);
  }
}

function* postViewInfo() {
  try {
    const data = yield call(viewInfoAPI);

    if (data.resCode === 0) {
      const { email, name, phone } = data.user;
      yield put(getInfo(email, name, phone));
    }
  } catch (e) {
    console.log(e);
  }
}

function* postModifyInfo() {
  try {
    const info = yield select((state) => {
      return state.CommunicationReducer;
    });
    const { history } = info.payload;
    const { pwd, name, phone } = info.payload;
    const packedMsg = { pwd, name, phone };
    const data = yield call(modifyAPI, packedMsg);
    if (data.resCode === 0) {
      yield put(openAlert('회원정보 수정을 완료했습니다.', 'success'));
      history.push('/signin');
    } else {
      yield put(openAlert('에러가 발생했습니다.', 'fail'));
    }
  } catch (e) {
    console.log(e);
  }
}

function* postWithdrawalInfo() {
  try {
    const info = yield select((state) => {
      return state.CommunicationReducer;
    });
    console.log(info);
    const { history } = info.payload;
    // console.log(history);
    const data = yield call(postWithdrawal);
    if (data.resCode === 0) {
      yield put(openAlert('저희 서비스를 이용해주셔서 감사합니다.', 'success'));
      history.push('/');
    } else {
      yield put(openAlert('에러가 발생했습니다.', 'fail'));
    }
  } catch (e) {
    console.log(e);
  }
}

function* postResumeView() {
  try {
    const data = yield call(resumeViewAPI);
    console.log(data);
    if (data.resCode === 0) {
      const unpackedMsg = data.resumes;
      yield put(getResume(unpackedMsg));
    } else {
      yield put(openAlert('이력서 조회 중에 에러가 발생했습니다. 새로고침을 시도하세요.', 'fail'));
    }
  } catch (e) {
    console.log(e);
  }
}

function* postResumeStore() {
  try {
    const resumeInfo = yield select((state) => {
      return state.CommunicationReducer;
    });

    const data = yield call(photoAPI, resumeInfo.info);
    const resultStore = yield call(resumeStoreAPI, resumeInfo.info, data.url);

    if (resultStore.resCode === 0) {
      yield put(openAlert('이력서 저장이 완료되었습니다.', 'success'));
    } else {
      yield put(openAlert('에러가 발생했습니다.', 'fail'));
    }
  } catch (e) {
    console.log(e);
  }
}

function* watchAlert() {
  yield takeLatest(CommunicationType.SIGN_UP, postData);
  yield takeLatest(CommunicationType.SIGN_IN, postSginIn);
  yield takeLatest(CommunicationType.VIEW_INFO, postViewInfo);
  yield takeLatest(CommunicationType.MODIFY_INFO, postModifyInfo);
  yield takeLatest(CommunicationType.WITHDRWAL_INFO, postWithdrawalInfo);

  yield takeLatest(CommunicationType.VIEW_RESUME, postResumeView);
  yield takeLatest(CommunicationType.STORE_RESUME, postResumeStore);
}

export default function* userSaga() {
  yield all([fork(watchAlert)]);
}
