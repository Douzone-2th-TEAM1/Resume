import React from 'react';
import { style } from './StartPageStyle';
import { useNavigate } from 'react-router-dom';

export const StartPage = () => {
  const navigation = useNavigate();
  const onClickBtn = () => {
    navigation('/main');
  };

  return (
    <Container>
      <TopBackground>
        <Title>RESU</Title>
        <SubTitleContainer>
          <SubTitle color="#334257">나만의 이력서</SubTitle>
          <SubTitle color="#000">를 경험해보세요.</SubTitle>
        </SubTitleContainer>
      </TopBackground>
      <Background>
        <Title2>ME</Title2>
        <StartBtn onClick={onClickBtn}>Get Started</StartBtn>
      </Background>
    </Container>
  );
};

const {
  Container,
  Background,
  TopBackground,
  Title,
  Title2,
  SubTitleContainer,
  SubTitle,
  StartBtn,
} = style;
