import { CommunicationType } from 'myRedux/constants';

export const signup = (email, pwd, nick, tel) => {
  console.log(email, pwd, nick, tel);
  return {
    type: CommunicationType.SIGN_UP,
    email: email,
    pwd: pwd,
    name: nick,
    phone: tel,
  };
};
