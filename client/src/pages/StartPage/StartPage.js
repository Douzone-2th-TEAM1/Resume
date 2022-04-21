import React, { useEffect } from 'react';
import { style } from './StartPageStyle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const StartPage = () => {
  const storeDatas = useSelector((state) => state.ResumeReducer);
  const navigation = useNavigate();
  const onClickBtn = () => {
    navigation('/main');
  };
  useEffect(() => {
    storeDatas.info && console.log(storeDatas.info);
  }, []);
  return (
    <Container>
      <TopBackground>
        <Title data-text={'RESU'}>RESU</Title>
        <SubTitleContainer>
          <SubTitle color="#334257">나만의 이력서</SubTitle>
          <SubTitle color="#000">를 경험해보세요.</SubTitle>
        </SubTitleContainer>
      </TopBackground>
      <Background>
        <Title2 data-text={'ME'}>ME</Title2>
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
