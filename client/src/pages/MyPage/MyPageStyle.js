import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeAni = (flag) => {
  if (flag) {
    return keyframes`
      0%{
        width:0px;
      }
      100%{
        padding: 0px 26px;
        width:364px;
      }`;
  } else {
    return keyframes`
      0%{
      width:364px;
      padding: 0px 26px;
      }
      100%{
        width:0px;
      }`;
  }
};

const fadeInTypo = (flag) => {
  if (flag) {
    return keyframes`
    0%{
    visibility:hidden;
    opacity:100%;
    width:100%;
    }
    50%{
          visibility:hidden;
    opacity:50%;
    width:100%;
    }
    100%{
      opacity:100%;
      width:100%;
    }`;
  } else {
    return keyframes`
      0%{
        opacity:100%;
        width:100%;
      }
      50%{
        opacity:0%;
        width:100%;
        display:none;
      }
      100%{
        visibility:hidden;
        width:100%;
        opacity:0%;
      }
    `;
  }
};

const Wrapper = styled.div`
  display: ${(props) => (props.flag ? 'block' : 'contents')};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.OPACITY_70};
  z-index: 3;
`;

const Container = styled.div`
  ${({ theme }) => theme.flexSet('space-between', '', 'column')};
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 4;
  box-shadow: 0px 3px 4px #000025;
  background: ${({ theme }) => theme.colorSet.SECONDARY};
  border-radius: 5px 0px 0px 5px;
  animation: ${(props) => fadeAni(props.flag)} 1.5s;
  animation-fill-mode: forwards;
`;

const TopLayout = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
`;

const PageTitle = styled.div`
  width: 0;
  ${({ theme }) => theme.flexSet()};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorSet.PRIMARY};
  font-weight: 700;
  font-size: 30px;
  animation: ${(props) => fadeInTypo(props.flag)} 1s;
  animation-fill-mode: forwards;
`;

const CntntsLayout = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 70%;
`;

const Rectangle = styled.div`
  width: 20px;
  height: 35px;
  background-color: ${({ theme }) => theme.colorSet.PRIMARY};
`;

const MyInfoLayout = styled.div`
  ${({ theme }) => theme.flexSet('space-evenly', '', 'column')};
  min-height: 150px;
  animation: ${(props) => fadeInTypo(props.flag)} 1s;
  animation-fill-mode: forwards;
  h4 {
    font-weight: 700;
    color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  }
`;

const MyInfoItem = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  cursor: pointer;
  min-height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colorSet.PRIMARY};

  h6 {
    margin-left: 15px;
    color: ${({ theme }) => theme.colorSet.PRIMARY};
    font-weight: 500;
    font-size: 14px;
    line-height: 52px;
  }
`;

const SignOutBtn = styled.div`
  cursor: pointer;
  margin-bottom: 50px;
  ${({ theme }) => theme.flexSet()};
  width: 0;
  height: 50px;
  background-color: ${({ theme }) => theme.colorSet.PRIMARY};
  color: ${({ theme }) => theme.colorSet.SECONDARY};
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  animation: ${(props) => fadeInTypo(props.flag)} 1s;
  animation-fill-mode: forwards;

  &:hover {
    transition: all 0.8s;
    background-color: ${({ theme }) => theme.colorSet.SECONDARY};
    color: ${({ theme }) => theme.colorSet.PRIMARY};
    border: 2px solid ${({ theme }) => theme.colorSet.PRIMARY};
  }
`;

export const style = {
  Wrapper,
  Container,
  TopLayout,
  PageTitle,
  CntntsLayout,
  MyInfoLayout,
  MyInfoItem,
  Rectangle,
  SignOutBtn,
};
