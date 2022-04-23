const regexEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const regexPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
const regexTel = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
const regexTelDash = (text) => {
  const reuslt = text.replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
  return reuslt;
};

export { regexEmail, regexPwd, regexTel, regexTelDash };
