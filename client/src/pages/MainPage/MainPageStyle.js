import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet('', 'center', 'column')}
  position: relative;
  min-width: 1200px;
  height: 100vh;
  overflow-x: hidden;
`;

export const TopTriangle = styled.div`
  position: absolute;
  top: -90px;
  left: 0px;
  width: 0px;
  height: 0px;
  border-bottom: 360px solid ${({ theme }) => theme.colorSet.PRIMARY};
  border-left: 0px solid transparent;
  border-right: 180px solid transparent;
  transform: rotate(90deg);
`;

export const BttomTriangle = styled.div`
  position: absolute;
  transform: rotate(180deg);
  min-width: 1200px;
  right: 0;
  bottom: 0;
  width: 0px;
  height: 0px;
  border-bottom: 0px solid ${({ theme }) => theme.colorSet.PRIMARY};
  border-top: 88vh solid ${({ theme }) => theme.colorSet.PRIMARY};
  border-left: 0px solid transparent;
  border-right: 1200px solid transparent;
`;

const fadeout = (ht) => {
  if (ht === '880px') {
    return keyframes`
    from{
    opacity:1
    display:none;
    }
    to{
      opacity:0

    }`;
  }
};
export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colorSet.PRIMARY};
  font-size: 43px;
  display: block;
  font-weight: 600px;
  letter-spacing: 10;
  text-align: center;
  padding-top: 200px;
  animation: ${(props) => fadeout(props.ht)} 1s;
  animation-fill-mode: forwards;
  /* ${(props) =>
    props.ht === '1000px' && `animation: ${fadeout} 1s 1s infinite linear alternate;`} */
`;

export const style = {
  Container,
  TopTriangle,
  BttomTriangle,
  MainTitle,
};
