import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.2.26:8080';
const axiosConfig = {
  headers: {},
};

class MsgProcess {
  constructor() {}

  reqMsgProcess(swp_msg, cb) {
    try {
      axios
        .post('/accounts/signup', swp_msg)
        .then(
          function (response) {
            cb(response);
          }.bind(this),
        )
        .catch(function (error) {
          cb([1, '에러']);
        });
    } catch (e) {
      console.log(e);
    }
  }

  fnSwpSauReq(email, pwd, name, phone, cb) {
    let packedMasg = { email: email, pwd: pwd, name: name, phone: phone };

    this.reqMsgProcess(packedMasg, (result) => {
      cb(this.fnSwpSauRes(result));
    });
  }

  fnSwpSauRes(resMsg) {
    let unpackedRes = [];
    if (resMsg.data.resCode === 0) {
      unpackedRes = [0, '성공'];
    } else {
      unpackedRes = [1, '에러'];
    }
    console.log(unpackedRes);
    return unpackedRes;
  }
}

export default MsgProcess;
