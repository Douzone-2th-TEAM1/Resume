import styled from 'styled-components';
import { keyframes } from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  height: 100vh;
  min-width: 1200px;
  ${({ theme }) => theme.flexSet('', '', 'column')}
`;
export const TopBackground = styled.div`
  ${({ theme }) => theme.flexSet('center', 'flex-end', '')}
  position: relative;
  width: 100%;
  height: 50%;
  min-height: 500px;
`;
export const Background = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', '')}
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #334257;
  /* @media ${({ theme }) => theme.device.tablet} {
    height: 100px;
  } */
`;

const animate = keyframes`
  {
    0%{
      width:0
    }
    100%{
      width:100%;
      /* border-right:none; */
    }
  }
`;

export const Title = styled.h1`
  font-size: 175px;
  -webkit-text-stroke: 0.3vw #383d52;
  text-transform: uppercase;

  letter-spacing: 5px;
  -webkit-transform: rotate(90deg);
  -webkit-transform-origin: left top;
  /* -moz-transform:rotate(90deg); */
  transform: rotate(90deg);
  transform-orgin: left top;
  color: white;
  position: absolute;
  top: 62px;
  left: 250px;
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: 1;
    -webkit-text-stroke: 0vw #383d52;
    color: #383d52;
    overflow: hidden;
    animation: ${animate} 2s linear;
    animation-fill-mode: forwards;
  }
  /* @media ${({ theme }) => theme.device.tablet} {
    display: none;
  } */
`;

export const Title2 = styled.h1`
  font-size: 175px;
  letter-spacing: 5px;
  -webkit-transform: rotate(90deg);
  -webkit-transform-origin: left top;
  /* -moz-transform:rotate(90deg); */
  transform: rotate(90deg);
  transform-orgin: left top;
  color: white;
  position: absolute;
  left: 250px;
  top: -1px;
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: 1;
    -webkit-text-stroke: 0vw white;
    color: #dfdfde;
    overflow: hidden;
    animation: ${animate} 2s linear;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  /* @media ${({ theme }) => theme.device.tablet} {
    display: none;
  } */
`;

export const SubTitleContainer = styled.div`
  ${({ theme }) => theme.flexSet()};
  margin-bottom: 100px;
`;

export const SubTitle = styled.h2`
  font-size: 56px;
  color: ${(props) => props.color};
`;

export const StartBtn = styled.button`
  cursor: pointer;
  transition: all 0.5s;
  border: 5px solid white;
  width: 300px;
  font-size: 30px;
  padding: 20px;
  color: white;
  border-radius: 28px;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: #334257;
  }
`;

export const style = {
  Container,
  TopBackground,
  Background,
  Title,
  Title2,
  SubTitleContainer,
  SubTitle,
  StartBtn,
};
