import React, { useEffect, useState } from 'react';
import { style } from './StartPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openAlert } from 'myRedux/actions/AlertActions';
import axios from 'axios';

export const StartPage = () => {
  const dispatch = useDispatch();
  const storeDatas = useSelector((state) => state.ResumeReducer);
  // const openModal = useSelector((state) => state.AlertReducer);

  const navigation = useNavigate();

  const [img, setImg] = useState('');
  const onClickBtn = () => {
    // dispatch(openAlert());
    navigation('/signin');
  };
  useEffect(() => {
    storeDatas.info && console.log(storeDatas.info);
  }, []);

  return (
    <Container>
      {/* <img src="http://192.168.2.26:8080/resumes/a461eb22fd97a25d1aa0398da095da85"></img> */}
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
