import styled from 'styled-components';
import { keyframes } from 'styled-components';
//----------------------------------------------
export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
  width:100%;
  height: 100%;
  position: fixed;
`;
export const Background = styled.div`
  z-index: 0;
`;
export const Triangle1 = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 0px;
  height: 0px;
  border-bottom: 450px solid ${({ theme }) => theme.colorSet.PRIMARY};
  border-left: 0px solid transparent;
  border-right: 450px solid transparent;
  transform: rotate(90deg);
`;
export const Triangle2 = styled.div`
  bottom: 0;
  right: 0;
  position: absolute;
  width: 0px;
  height: 0px;
  border-bottom: 900px solid ${({ theme }) => theme.colorSet.PRIMARY};
  border-left: 0px solid transparent;
  border-right: 900px solid transparent;
  transform: rotate(270deg);
`;
//----------------------------------------------
export const ModifyForm = styled.div`
  position: absolute;
  top: 125px;
  z-index: 1;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px 5px 0px 0px;
  width: 830px;
  height: 955px;
  overflow: hidden;
  box-shadow: 7px 0px 3px rgba(0, 0, 0, 0.8);
`;

export const InnerLayout = styled.div`
  ${({ theme }) => theme.flexSet('', '', 'column')};
  padding: 40px 90px;
`;
export const T1 = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  padding: 20px 0px;
  h1 {
    font-size: 32px;
    font-weight: bolder;
  }
`;
//----------------------------------------------
export const ModifyForm2 = styled.div`
  border: 1.5px black solid;
  border-radius: 5px;
  width: 100%;
  padding: 30px 50px;

  text-align: center;
`;

const InnerLayout2 = styled.div`
  ${({ theme }) => theme.flexSet()};
`;
export const InputForm = styled.div`
  width: fit-content;
  h2 {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const InputInnerLayout = styled.div`
  ${({ theme }) => theme.flexSet('space-evenly', 'flex-start', 'column')};
  height: 100px;
`;

export const T2 = styled.div`
  text-align: left;
  font-size: 22px;
  font-weight: bold;
`;
export const Input1 = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  width: 500px;
  font-size: 18px;
  padding: 12px;
  /* margin-bottom: 10px; */
`;
export const Btn1 = styled.button`
  cursor: pointer;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colorSet.PRIMARY};
  height: 60px;
  width: 92%;
  font-weight: bolder;
  font-size: 22px;
  color: white;
  background-color: ${({ theme }) => theme.colorSet.PRIMARY};
  &:disabled {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
    border-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  }
`;
export const Btn2 = styled.button`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 20px;
  height: 60px;
  width: 92%;
  font-weight: bolder;
  font-size: 22px;
`;
//----------------------------------------------
const BtnWrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  padding: 10px 0px;
`;

export const Btn3 = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  font-size: 16px;
  font-weight: bold;
  width: fit-content;
`;
//----------------------------------------------
export const style = {
  Container,
  Background,
  Triangle1,
  Triangle2,
  ModifyForm,
  InnerLayout,
  T1,
  ModifyForm2,
  InnerLayout2,
  T2,
  Input1,
  InputInnerLayout,
  Btn1,
  Btn2,
  InputForm,
  BtnWrapper,
  Btn3,
};
