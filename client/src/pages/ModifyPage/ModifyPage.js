import React, { useEffect, useState } from 'react';
import { style } from './ModifyPageStyle';

// ----------------------------------------------------------------------------------
export const ModifyPage = () => {
  const [modify, setModify] = useState({
    pwd: '',
    pwdc: '',
    nick: '',
    tel: '',
  });

  const [pwdCheck, setPwdCheck] = useState(false);
  const [pwdcCheck, setPwdcCheck] = useState(false);
  const [nickCheck, setNickCheck] = useState(false);
  const [telCheck, setTelCheck] = useState(false);

  const handleModify = (e) => {
    setModify({ ...modify, [e.target.id]: e.target.value });
  };

  const checkPwd = (e) => {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    setPwdCheck(regExp.test(modify.pwd));
  };
  const checkPwdc = (e) => {
    if (modify.pwd === modify.pwdc) {
      setPwdcCheck(true);
    } else {
      setPwdcCheck(false);
    }
  };
  const checkNick = (e) => {
    if (modify.nick.length >= 1) {
      setNickCheck(true);
    } else {
      setNickCheck(false);
    }
  };
  const checkTel = (e) => {
    var regExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    setTelCheck(regExp.test(modify.tel));
  };
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (pwdCheck && pwdcCheck && nickCheck && telCheck) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [pwdCheck, pwdcCheck, nickCheck, telCheck]);

  // ----------------------------------------------------------------------------------
  return (
    <Container>
      <Background>
        <Triangle1 />
        <Triangle2 />
      </Background>
      <ModifyForm>
        <T1>회원정보 수정</T1>
        <ModifyForm2>
          <InputForm>
            <T2>비밀번호</T2>
            <Input1
              type="password"
              id="pwd"
              placeholder="영문, 숫자를 조합한 최소 8글자, 최대 20글자"
              value={modify.pwd}
              onChange={handleModify} // 요건 변경된 값을 대입하는 함수
              onKeyUp={checkPwd} // 요건 변경된 값이 올바른지 확인하는 함수
            />
            <T2>비밀번호 확인</T2>
            <Input1
              type="password"
              id="pwdc"
              value={modify.pwdc}
              onChange={handleModify}
              onKeyUp={checkPwdc}
            />
            <T2>이름</T2>
            <Input1 id="nick" value={modify.nick} onChange={handleModify} onKeyUp={checkNick} />
            <T2>연락처</T2>
            <Input1 id="tel" value={modify.tel} onChange={handleModify} onKeyUp={checkTel} />
          </InputForm>
          <Btn1 disabled={isDisabled}>저 장</Btn1>
          <br />
          <Btn2>취 소</Btn2>
        </ModifyForm2>
        <Btn3>회원탈퇴</Btn3>
      </ModifyForm>
    </Container>
  );
};

// -----------------------------------------------------------
const {
  Container,
  Background,
  Triangle1,
  Triangle2,
  ModifyForm,
  T1,
  ModifyForm2,
  T2,
  Input1,
  Btn1,
  Btn2,
  InputForm,
  Btn3,
} = style;
