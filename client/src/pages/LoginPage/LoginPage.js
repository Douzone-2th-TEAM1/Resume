import React, { useEffect, useState } from 'react';
import { style } from './LoginPageStyle';
import { BsExclamationCircle, BsCheckLg } from 'react-icons/bs';

export const LoginPage = () => {
  const [clickBtn, setClickBtn] = useState(false);
  const onClickBtn = () => {
    if (clickBtn === false) setClickBtn(true);
    else setClickBtn(false);
  };
  // ----------------------------------------------------------------------------------
  const [formInput, setFormInput] = useState({
    id: '',
    pw: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const handleLoginInput = (e) => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  useEffect(() => {
    if (formInput.id.length >= 1 && formInput.pw.length >= 1) setIsDisabled(false);
    else setIsDisabled(true);
  }, [formInput]);
  // ----------------------------------------------------------------------------------
  const [formSign, setFormSign] = useState({
    email: '',
    pwd: '',
    pwdc: '',
    nick: '',
    tel: '',
  });
  const [isDisabled2, setIsDisabled2] = useState(true);
  const handleSignInput = (e) => {
    const { value, name } = e.target;
    setFormSign({ ...formSign, [name]: value });
  };

  // ----------------------------------------------------------------------------------
  const [open, setOpen] = useState(false);
  // ----------------------------------------------------------------------------------
  const [emailVal, setEmailVal] = useState(false);
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmailVal(regExp.test(formSign.email));
  };

  const [pwdVal, setPwdVal] = useState(false);
  const checkPwd = (e) => {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    setPwdVal(regExp.test(e.target.value));
  };

  const [pwdcVal, setPwdcVal] = useState(false);
  const checkPwdc = (e) => {
    if (formSign.pwd === formSign.pwdc) {
      setPwdcVal(true);
    } else {
      setPwdcVal(false);
    }
  };

  const [nickVal, setNickVal] = useState(false);
  const checkNick = (e) => {
    if (formSign.nick.length >= 1) {
      setNickVal(true);
    }
  };

  const [telVal, setTelVal] = useState(false);
  const checkTel = (e) => {
    var regExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    setTelVal(regExp.test(e.target.value));
  };

  useEffect(() => {
    if (emailVal && pwdVal && pwdcVal && nickVal && telVal) {
      setIsDisabled2(false);
    } else setIsDisabled2(true);
  }, [emailVal, pwdVal, pwdcVal, nickVal, telVal]);

  // -----------------------------------------------------------------------------------------------------------------------------------
  const [signIn, setSignIn] = useState(false);
  const signInComplete = () => {
    setSignIn(true);
  };
  // -----------------------------------------------------------------------------------------------------------------------------------
  return (
    <Container>
      {signIn && <Modal />}
      {signIn && (
        <Modal2>
          <Modal3 />
          <MT1>회원가입이 완료되었습니다!</MT1>
          <MT2>
            회원가입 절차가 완료되었습니다.
            <br />
            로그인하고 첫 이력서를 작성해보세요!
          </MT2>
          <MT3>로그인 화면으로</MT3>
        </Modal2>
      )}
      <Background clickBtn={clickBtn} />
      {!clickBtn && (
        <LeftForm1>
          <Text1>아직 계정이 없으신가요?</Text1>
          <Text2>
            간단한 회원가입을 통해
            <br /> 첫 개발자 이력서를 작성해보세요!
          </Text2>
          <Btn1 onClick={onClickBtn}>회원가입</Btn1>
        </LeftForm1>
      )}

      {/* -------------------------------- */}
      {!clickBtn && (
        <RightForm1>
          <Text3>로그인하기</Text3>
          <Text4>
            성공적인 개발자 취업을 위한
            <br /> 가장 쉬운 이력서 제작 사이트
          </Text4>
          <EnterForm>
            <Text5>이메일</Text5>
            {/* 로그인_이메일 입력 */}
            <Enter1 name="id" onChange={handleLoginInput} value={formInput.id} />
            <Text6>비밀번호</Text6>
            {/* 로그인_비밀번호 입력 */}
            <Enter2 name="pw" onChange={handleLoginInput} value={formInput.pw} type="password" />
          </EnterForm>
          <Btn2 disabled={isDisabled}>로그인</Btn2>
        </RightForm1>
      )}
      {/* -------------------------------- */}
      {clickBtn && (
        <LeftForm2>
          <Text2_1>회원가입하기</Text2_1>
          <EnterForm2>
            이메일
            <br />
            <Enter3
              name="email"
              onChange={handleSignInput}
              value={formSign.email}
              onBlur={checkEmail}
            />
            {emailVal && formSign.email.length >= 1 && (
              <Pass>
                <BsCheckLg size="30px"></BsCheckLg>
              </Pass>
            )}
            <br />
            {!emailVal && formSign.email.length >= 1 && (
              <Wrong>올바른 이메일 양식이 아닙니다.</Wrong>
            )}
            <br />
            비밀번호
            <br />
            <Enter4form>
              <Enter4
                name="pwd"
                onChange={handleSignInput}
                value={formSign.pwd}
                type="password"
                onBlur={checkPwd}
              />
              <Info onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                <BsExclamationCircle size="25px" />
              </Info>
            </Enter4form>
            {open && (
              <PwdAl open>
                숫자와 문자를 모두 사용하여
                <br />
                최소 8자, 최대 20자
              </PwdAl>
            )}
            {pwdVal && formSign.pwd.length >= 1 && (
              <Pass>
                <BsCheckLg size="30px"></BsCheckLg>
              </Pass>
            )}
            {!pwdVal && formSign.pwd.length >= 1 && (
              <Wrong>
                <br />
                <br />
                사용할 수 없는 비밀번호에요.
              </Wrong>
            )}
            <br />
            <br />
            비밀번호 확인
            <br />
            <Enter3
              name="pwdc"
              onChange={handleSignInput}
              value={formSign.pwdc}
              type="password"
              onBlur={checkPwdc}
            />
            {pwdcVal && formSign.pwdc.length >= 1 && (
              <Pass>
                <BsCheckLg size="30px"></BsCheckLg>
              </Pass>
            )}
            <br />
            {!pwdcVal && formSign.pwdc.length >= 1 && <Wrong>비밀번호가 일치하지 않습니다.</Wrong>}
            <br />
            이름
            <br />
            <Enter3
              name="nick"
              onChange={handleSignInput}
              value={formSign.nick}
              onBlur={checkNick}
            />
            {nickVal && formSign.nick.length >= 1 && (
              <Pass>
                <BsCheckLg size="30px"></BsCheckLg>
              </Pass>
            )}
            <br />
            <br />
            휴대전화
            <br />
            <Enter3
              name="tel"
              onChange={handleSignInput}
              value={formSign.tel}
              placeholder=" ex) 010-1234-5678"
              onBlur={checkTel}
            />
            {!telVal && formSign.tel.length >= 1 && <Wrong>연락처를 다시 입력해주세요.</Wrong>}
            {telVal && formSign.tel.length >= 1 && (
              <Pass>
                <BsCheckLg size="30px"></BsCheckLg>
              </Pass>
            )}
          </EnterForm2>
          <Btn3 disabled={isDisabled2} onClick={signInComplete}>
            회원가입
          </Btn3>
        </LeftForm2>
      )}
      {clickBtn && (
        <RightForm2>
          <Text2_3>이미 계정이 있으신가요?</Text2_3>
          <Text2_4>계정에 로그인하시고 이력서를 작성해보세요.</Text2_4>
          <Btn4 onClick={onClickBtn}>로그인</Btn4>
        </RightForm2>
      )}
    </Container>
  );
};

// -----------------------------------------------------------
const {
  Container,
  Background,
  LeftForm1,
  Text1,
  Text2,
  Btn1,
  RightForm1,
  Text3,
  Text4,
  EnterForm,
  Text5,
  Enter1,
  Text6,
  Enter2,
  Btn2,
  LeftForm2,
  Text2_1,
  EnterForm2,
  Enter3,
  Enter4,
  Btn3,
  RightForm2,
  Text2_3,
  Text2_4,
  Btn4,
  Info,
  Enter4form,
  PwdAl,
  Wrong,
  Pass,
  Modal,
  Modal2,
  Modal3,
  MT1,
  MT2,
  MT3,
} = style;
