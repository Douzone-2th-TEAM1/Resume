import styled from 'styled-components';
import { keyframes } from 'styled-components';

const BobOnHover = keyframes`
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }

`;

const BobOnHoverFloat = keyframes`
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

const Container = styled.div`
  position: absolute;
  /* overflow-y: auto; */
  overflow-y: ${(props) => (props.ht === '400px' ? 'hidden' : 'auto')};
  scroll-behavior: smooth;
  bottom: 0;
  min-width: 920px;
  height: ${(props) => props.ht};
  transition-property: all;
  transition-duration: 2s;
  z-index: 1;
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 5px 6px 20px #000025;
  padding: 0px 64px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const IconLayout = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 100px;
  display: ${(props) => (props.ht === '400px' ? 'flex' : 'none')};

  &:hover {
    cursor: pointer;
    -webkit-animation-name: ${BobOnHoverFloat}, ${BobOnHover};
    animation-name: ${BobOnHoverFloat}, ${BobOnHover};
    -webkit-animation-duration: 0.3s, 1.5s;
    animation-duration: 0.3s, 1.5s;
    -webkit-animation-delay: 0s, 0.3s;
    animation-delay: 0s, 0.3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
`;

const ItemWrapper = styled.div`
  min-height: 120vh;
`;

const ItemLayout = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'flex-start')};
  width: 100%;
  margin: 40px 0px;
  /* min-height: ${(props) => props.minHt}; */
`;

const ItemInnerLayout = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'column')};
  width: ${(props) => props.width};
  height: 100%;
  /* min-height: 130px; */
  /* background-color: wheat; */
`;

const Layout = styled.div`
  width: 100%;
`;

const ItemTitle = styled.h1`
  width: fit-content;
  font-weight: bold;
  font-size: 25px;
`;

const Box = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center')};
  margin: 0px 0px 20px 0px;
  width: 100%;
  height: ${(props) => props.ht};
`;

const ImgLayout = styled.label`
  ${({ theme }) => theme.flexSet()};
  cursor: pointer;
  margin: 0px 38px 5px 38px;
  width: 150px;
  height: 180px;
  border: 2px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};

  h6 {
    font-size: 13px;
    color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  }
`;
const ImgBtn = styled.input`
  display: none;
  padding: 5px;
  width: 150px;
  height: 100%;
  color: white;
  border-radius: 2px;
  background-color: #78938a;
  font-weight: bold;
  font-size: 13px;

  &:hover {
    background-color: #78938a95;
  }
`;

const BtnLayout = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  width: 81%;
`;

const Btn = styled.button`
  cursor: pointer;
  padding: 16px 36px;
  min-width: 145px;
  margin: 2px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: ${(props) => props.hvColor};
  }
`;

export const style = {
  Container,
  IconLayout,
  ItemWrapper,
  ItemLayout,
  ItemInnerLayout,
  Layout,
  ItemTitle,
  Box,
  ImgLayout,
  ImgBtn,
  BtnLayout,
  Btn,
};
