import React, { useEffect, useState } from 'react';
import { style } from './ResignPageStyle';

export const ResignPage = () => {
  const [resign, setResign] = useState({
    pwd: '',
  });
  const handleResign = (e) => {
    setResign({ ...resign, [e.target.id]: e.target.value });
  };

  // -----------------------------------------------------------
  return (
    <Container>
      <Background>
        <Triangle1 />
        <Triangle2 />
      </Background>
      <ResignForm>
        <T1>회원 탈퇴</T1>
        <ResignForm2>
          <T3>사용하고 계신 아이디는 탈퇴할 경우 복구가 불가능합니다.</T3>
          <InputForm>
            <T2>비밀번호</T2>
            <Input1 type="password" id="pwd" value={resign.pwd} onChange={handleResign} />
          </InputForm>
          <Btn1>확 인</Btn1>
          <br />
          <Btn2>취 소</Btn2>
        </ResignForm2>
      </ResignForm>
    </Container>
  );
};

// -----------------------------------------------------------
const {
  Container,
  Background,
  Triangle1,
  Triangle2,
  ResignForm,
  T1,
  ResignForm2,
  T2,
  T3,
  Input1,
  Btn1,
  Btn2,
  InputForm,
} = style;
