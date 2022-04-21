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
  top: 200px;
  z-index: 1;
  background-color: white;
  border: 2px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 900px;
  height: 100%;
  overflow: hidden;
  box-shadow: 7px 0px 3px rgba(0, 0, 0, 0.8);
`;
export const T1 = styled.div`
  width: fit-content;
  margin-top: 4%;
  margin-left: 10%;
  font-size: 40px;
  font-weight: bolder;
`;
//----------------------------------------------
export const ModifyForm2 = styled.div`
  border: 1.5px black solid;
  border-radius: 5px;
  z-index: 2;
  margin-top: 2%;
  margin-left: 10%;
  width: 80%;
  height: 600px;
  text-align: center;
`;
export const InputForm = styled.div`
  width: fit-content;
  margin-top: 5%;
  margin-left: 15%;
  font-size: 22px;
`;
export const T2 = styled.div`
  margin-top: 20px;
  text-align: left;
  font-weight: bold;
`;
export const Input1 = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  height: 36px;
  width: 500px;
  font-size: 22px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
`;
export const Btn1 = styled.button`
  cursor: pointer;
  margin-top: 30px;
  border: 1px solid black;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colorSet.PRIMARY};
  height: 60px;
  width: 500px;
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
  width: 500px;
  font-weight: bolder;
  font-size: 22px;
`;
//----------------------------------------------
export const Btn3 = styled.button`
  cursor: pointer;
  color: rgb(0, 0, 0, 0.7);
  font-size: 16px;
  font-weight: bold;
  width: fit-content;
  margin-top: 10px;
  margin-left: 750px;
`;
//----------------------------------------------
export const style = {
  Container,
  Background,
  Triangle1,
  Triangle2,
  ModifyForm,
  T1,
  ModifyForm2,
  T2,
  Input1,
  Btn1,
  Btn2,
  InputForm,
  Btn3,
};
