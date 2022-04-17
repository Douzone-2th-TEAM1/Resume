import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  /* position: relative; */
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
  /* position: fixed;
  bottom: 0px; */
  ${({ theme }) => theme.flexSet('center', 'center', '')}
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #334257;
  /* @media ${({ theme }) => theme.device.tablet} {
    height: 100px;
  } */
`;

export const Title = styled.h1`
  /* mix-blend-mode: ; */
  font-size: 175px;
  letter-spacing: 5px;
  -webkit-transform: rotate(90deg);
  -webkit-transform-origin: left top;
  /* -moz-transform:rotate(90deg); */
  transform: rotate(90deg);
  transform-orgin: left top;
  color: #334257;
  position: absolute;
  top: 35px;
  left: 250px;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

export const Title2 = styled.h1`
  /* mix-blend-mode: plus-lighter; */
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
  top: 0;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

export const SubTitleContainer = styled.div`
  ${({ theme }) => theme.flexSet()};
  margin-bottom: 33px;
`;

export const SubTitle = styled.h2`
  font-size: 56px;
  color: ${(props) => props.color};
`;

export const StartBtn = styled.button`
  cursor: pointer;
  border: 5px solid #ffff;
  width: 300px;
  font-size: 20px;
  padding: 20px;
  color: #ffff;
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
