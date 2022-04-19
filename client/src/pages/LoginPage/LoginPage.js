import { click } from '@testing-library/user-event/dist/click';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { style } from './LoginPageStyle';

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
  useEffect(() => {
    if (
      formSign.email.length >= 1 &&
      formSign.pwd.length >= 1 &&
      formSign.pwdc.length >= 1 &&
      formSign.nick.length >= 1 &&
      formSign.tel.length >= 1
    )
      setIsDisabled2(false);
    else setIsDisabled2(true);
  }, [formSign]);
  // ----------------------------------------------------------------------------------
  return (
    <Container>
      <Background clickBtn={clickBtn} />
      {/* -------------------------------- */}

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
            <Text2_2>이메일</Text2_2>
            <Enter3 name="email" onChange={handleSignInput} value={formSign.email} />
            <br />
            <br />
            <Text2_2>비밀번호</Text2_2>
            <Enter3 name="pwd" onChange={handleSignInput} value={formSign.pwd} type="password" />
            <br />
            <br />
            <Text2_2>비밀번호 확인</Text2_2>
            <Enter3 name="pwdc" onChange={handleSignInput} value={formSign.pwdc} type="password" />
            <br />
            <br />
            <Text2_2>이름</Text2_2>
            <Enter3 name="nick" onChange={handleSignInput} value={formSign.nick} />
            <br />
            <br />
            <Text2_2>연락처</Text2_2>
            <Enter3 name="tel" onChange={handleSignInput} value={formSign.tel} />
          </EnterForm2>
          <Btn3 disabled={isDisabled2}>회원가입</Btn3>
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
  Text2_2,
  Enter3,
  Btn3,
  RightForm2,
  Text2_3,
  Text2_4,
  Btn4,
} = style;
