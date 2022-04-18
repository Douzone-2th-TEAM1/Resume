import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
  width:100%;
  height: 100%;
  position: fixed;
`;
// -------------------------------------------
export const Background = styled.div`
  border-top: 1080px solid #334257;
  border-right: 400px solid transparent;
  width: 95%;
  left: -33%;

  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 0;
`;
// -------------------------------------------
export const LeftForm = styled.div`
  min-width: 300px;
  z-index: 1;
  color: white;
  width: fit-content;
  text-align: center;
  margin-top: 5%;
  margin-left: -4%;
`;
export const Text1 = styled.div`
  font-size: 55px;
  font-weight: bolder;
`;
export const Text2 = styled.div`
  margin-top: 10%;
  font-size: 32px;
  font-weight: normal;
  line-height: 150%;
`;
export const Btn1 = styled.button`
  margin-top: 10%;
  cursor: pointer;
  border: white 3px solid;
  border-radius: 5px;
  color: white;
  font-size: 32px;
  width: 320px;
  height: 80px;
`;
// -------------------------------------------
export const RightForm = styled.div`
  min-width: 300px;
  width: fit-content;
  z-index: 1;
  color: black;
  text-align: center;
  margin-top: 3%;
  margin-left: 25%;
`;
export const Text3 = styled.div`
  font-size: 55px;
  font-weight: bolder;
`;
export const Text4 = styled.div`
  font-size: 32px;
  font-weight: normal;
  line-height: 150%;
  margin-top: 5%;
`;
export const EnterForm = styled.div`
  margin-top: 10%;
  text-align: left;
`;
export const Text5 = styled.div`
  font-size: 32px;
`;
export const Enter1 = styled.input`
  width: 100%;
  height: 50px;
  border: black 1px solid;
  border-radius: 10px;
  font-size: 32px;
  padding-left: 5px;
`;
export const Text6 = styled.div`
  margin-top: 5%;
  font-size: 32px;
`;
export const Enter2 = styled.input`
  border: black 1px solid;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 32px;
  padding-left: 5px;
`;
export const Btn2 = styled.button`
  cursor: pointer;
  width: 100%;
  border: white 3px solid;
  border-radius: 5px;
  color: white;
  font-size: 32px;
  height: 80px;
  background-color: #9e9e9e;
  margin-top: 5%;
`;
// -------------------------------------------
export const style = {
  Container,
  Background,
  LeftForm,
  Text1,
  Text2,
  Btn1,
  RightForm,
  Text3,
  Text4,
  EnterForm,
  Text5,
  Enter1,
  Text6,
  Enter2,
  Btn2,
};
