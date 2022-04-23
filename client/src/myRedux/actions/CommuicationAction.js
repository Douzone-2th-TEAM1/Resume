import { CommunicationType } from 'myRedux/constants';

export const signup = (email, pwd, nick, tel) => {
  return {
    type: CommunicationType.SIGN_UP,
    email: email,
    pwd: pwd,
    name: nick,
    phone: tel,
  };
};

export const signin = (email, pwd, history) => {
  return {
    type: CommunicationType.SIGN_IN,
    payload: {
      email: email,
      pwd: pwd,
      history: history,
    },
  };
};

// export const setInfo = (email, token) => {
//   return {
//     type: CommunicationType.GET_TOKEN,
//     email: email,
//     token: token,
//   };
// };

export const modifyInfo = (pwd, name, phone, history) => {
  console.log(pwd, name, phone);
  return {
    type: CommunicationType.MODIFY_INFO,
    payload: {
      pwd: pwd,
      name: name,
      phone: phone,
      history: history,
    },
  };
};

export const storeResume = (info) => {
  return {
    type: CommunicationType.STORE_RESUME,
    info: info,
  };
};
