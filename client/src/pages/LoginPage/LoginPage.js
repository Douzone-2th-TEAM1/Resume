import React from 'react';
import { style } from './LoginPageStyle';
export const LoginPage = () => {
  return (
    <Container>
      <Background></Background>
      {/* -------------------------------- */}
      <LeftForm>
        <Text1>아직 계정이 없으신가요?</Text1>
        <Text2>
          간단한 회원가입을 통해
          <br /> 첫 개발자 이력서를 작성해보세요!
        </Text2>
        <Btn1>회원가입</Btn1>
      </LeftForm>
      {/* -------------------------------- */}
      <RightForm>
        <Text3>로그인하기</Text3>
        <Text4>
          성공적인 개발자 취업을 위한
          <br /> 가장 쉬운 이력서 제작 사이트
        </Text4>
        <EnterForm>
          <Text5>이메일</Text5>
          <Enter1></Enter1>
          <Text6>비밀번호</Text6>
          <Enter2 type="password"></Enter2>
        </EnterForm>
        <Btn2>로그인</Btn2>
      </RightForm>
    </Container>
  );
};

const {
  Container,
  Background,
  LeftForm,
  Text1,
  Text2,
  Btn1,
  RightForm,
  Text3,
  Text4,
  EnterForm,
  Text5,
  Enter1,
  Text6,
  Enter2,
  Btn2,
} = style;
