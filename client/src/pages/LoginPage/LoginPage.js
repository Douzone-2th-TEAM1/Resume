import React, { useEffect, useState } from 'react';
import { style } from './LoginPageStyle';
import { BsExclamationCircle, BsCheckLg } from 'react-icons/bs';

export const LoginPage = () => {
  //------------------------------------------------------------------------------
  const [clickBtn, setClickBtn] = useState(false); // 백그라운드 동작을 위한 변수
  const onClickBtn = () => {
    if (clickBtn === false) setClickBtn(true);
    else setClickBtn(false);
  };
  //------------------------------------------------------------------------------
  const [formInput, setFormInput] = useState({
    // 로그인 정보를 초기화
    id: '',
    pw: '',
  });
  const handleLoginInput = (e) => {
    // 실시간으로 로그인 정보를 대입
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  const [isDisabled, setIsDisabled] = useState(true); // 로그인 버튼 활성화
  useEffect(() => {
    if (formInput.id.length >= 1 && formInput.pw.length >= 1) setIsDisabled(false);
    else setIsDisabled(true);
  }, [formInput]);
  //------------------------------------------------------------------------------
  const [formSign, setFormSign] = useState({
    // 회원가입 정보를 초기화
    email: '',
    pwd: '',
    pwdc: '',
    nick: '',
    tel: '',
  });
  const handleSignInput = (e) => {
    // 실시간으로 회원가입 정보를 대입
    const { value, name } = e.target;
    setFormSign({ ...formSign, [name]: value });
  };
  //------------------------------------------------------------------------------
  const [open, setOpen] = useState(false); // 비밀번호 양식정보 활성화
  //------------------------------------------------------------------------------
  const [emailVal, setEmailVal] = useState(false); // 이메일 양식 체크
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmailVal(regExp.test(formSign.email));
  };
  //------------------------------------------------------------------------------
  const [pwdVal, setPwdVal] = useState(false); // 비밀번호 양식 체크
  const checkPwd = (e) => {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    setPwdVal(regExp.test(e.target.value));
  };
  //------------------------------------------------------------------------------
  const [pwdcVal, setPwdcVal] = useState(false); // 비밀번호 확인 양식 체크
  const checkPwdc = (e) => {
    if (formSign.pwd === formSign.pwdc) {
      setPwdcVal(true);
    } else {
      setPwdcVal(false);
    }
  };
  //------------------------------------------------------------------------------
  const [nickVal, setNickVal] = useState(false); // 이름 양식 체크
  const checkNick = (e) => {
    if (formSign.nick.length >= 1) {
      setNickVal(true);
    }
  };
  //------------------------------------------------------------------------------
  const [telVal, setTelVal] = useState(false); // 전화번호 양식 체크
  const checkTel = (e) => {
    var regExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    setTelVal(regExp.test(e.target.value));

    if (regExp.test(e.target.value)) {
      const temp = e.target.value.replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
      setFormSign({...formSign, tel : temp});
    }
  };
  //------------------------------------------------------------------------------
  useEffect(() => {
    // 최종적으로 회원가입 버튼 활성화 (모든 양식이 정상일 때 )
    if (emailVal && pwdVal && pwdcVal && nickVal && telVal) {
      setIsDisabled2(false);
    } else setIsDisabled2(true);
  }, [emailVal, pwdVal, pwdcVal, nickVal, telVal]);
  const [isDisabled2, setIsDisabled2] = useState(true); // 회원가입 버튼 활성화
  //------------------------------------------------------------------------------
  const [signIn, setSignIn] = useState(false); // 회원가입이 완료되었을 때 시작페이지로 복귀
  const signInComplete = () => {
    setSignIn(true);
  };
  const onClickBtn2 = () => {
    setSignIn(false);
    setClickBtn(false);
    setFormSign({
      email: '',
      pwd: '',
      pwdc: '',
      nick: '',
      tel: '',
    });
    setIsDisabled2(true);
    setEmailVal(false);
    setPwdVal(false);
    setPwdcVal(false);
    setNickVal(false);
    setTelVal(false);
  };
  //------------------------------------------------------------------------------
 //------------------------------------------------------------------------------


  useEffect(()=>{
    console.log(formSign)
  },[formSign])
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
          <MT3 onClick={onClickBtn2}>로그인 화면으로</MT3>
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
              onKeyUp={checkEmail}
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
                onKeyUp={checkPwd}
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
              onKeyUp={checkPwdc}
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
              onKeyUp={checkNick}
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
            <Enter3 name="tel" onChange={handleSignInput} value={formSign.tel} onKeyUp={checkTel} />
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
