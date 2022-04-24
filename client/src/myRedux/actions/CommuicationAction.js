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

export const viewInfo = () => {
  return {
    type: CommunicationType.VIEW_INFO,
  };
};
export const getInfo = (email, name, phone) => {
  console.log(email, name, phone);
  return {
    type: CommunicationType.GET_INFO,
    email: email,
    name: name,
    phone: phone,
  };
};
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

export const withdrawlInfo = (history) => {
  return {
    type: CommunicationType.WITHDRWAL_INFO,
    history: history,
  };
};

export const viewResume = () => {
  return {
    type: CommunicationType.VIEW_RESUME,
  };
};

export const getResume = (array) => {
  return {
    type: CommunicationType.GET_RESUME,
    datas: array,
  };
};

export const storeResume = (info) => {
  return {
    type: CommunicationType.STORE_RESUME,
    info: info,
  };
};

export const removeResume = (id) => {
  return {
    type: CommunicationType.REMOVE_RESUME,
    id: id,
  };
};
