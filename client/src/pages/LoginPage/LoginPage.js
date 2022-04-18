import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import { style } from './LoginPageStyle';

export const LoginPage = () => {
  const [clickBtn, setClickBtn] = useState(false);
  const onClickBtn = () => {
    if (clickBtn === false) setClickBtn(true);
    else setClickBtn(false);
  };

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
            <Enter1 />
            <Text6>비밀번호</Text6>
            <Enter2 type="password"></Enter2>
          </EnterForm>
          <Btn2>로그인</Btn2>
        </RightForm1>
      )}
      {/* -------------------------------- */}
      {clickBtn && (
        <LeftForm2>
          <Text2_1>회원가입하기</Text2_1>
          <EnterForm2>
            <Text2_2>이메일</Text2_2>
            <Enter3 />
            <br />
            <br />
            <Text2_2>비밀번호</Text2_2>
            <Enter3 type="password" />
            <br />
            <br />
            <Text2_2>비밀번호 확인</Text2_2>
            <Enter3 type="password" />
            <br />
            <br />
            <Text2_2>이름</Text2_2>
            <Enter3 />
            <br />
            <br />
            <Text2_2>연락처</Text2_2>
            <Enter3 />
          </EnterForm2>
          <Btn3>회원가입</Btn3>
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
