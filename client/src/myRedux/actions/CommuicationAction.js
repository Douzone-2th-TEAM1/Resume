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

export const signin = (email, pwd) => {
  return {
    type: CommunicationType.SIGN_IN,
    email: email,
    pwd: pwd,
  };
};

export const setInfo = (email, token) => {
  return {
    type: CommunicationType.GET_TOKEN,
    email: email,
    token: token,
  };
};
