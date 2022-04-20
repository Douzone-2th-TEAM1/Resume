import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Image from 'assets/img1.jpg';
const moveRight = (flag) => {
  if (flag) {
    return keyframes`
      from{
        left:-40%
      }to{
        left:40%;
        right:0
      }
    `;
  } else {
    return keyframes`
      from{
        left:40%;
        right:0
      }to{
        left:-40%
      }
    `;
  }
};

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
  width:100%;
  height: 100%;
  position: fixed;
`;
// -------------------------------------------
export const Background = styled.div`
  border-top: 1080px solid;
  border-color: ${({ theme }) => theme.colorSet.PRIMARY};
  border-right: 200px solid transparent;
  border-left: 200px solid transparent;
  width: 95%;
  left: -40%;
  animation: ${(props) => moveRight(props.clickBtn)} 2s;
  animation-fill-mode: forwards;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 0;
`;
// -------------------------------------------
export const LeftForm1 = styled.div`
  min-width: 300px;
  z-index: 1;
  color: white;
  width: fit-content;
  text-align: center;
  margin-top: 5%;
  margin-left: -4%;
  animation: fadein 4s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
export const RightForm1 = styled.div`
  min-width: 300px;
  width: fit-content;
  z-index: 1;
  color: black;
  text-align: center;
  margin-top: 3%;
  margin-left: 25%;
  animation: fadein 4s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  font-size: 20px;
  font-weight: bolder;
`;
export const Enter1 = styled.input`
  width: 100%;
  height: 40px;
  border: black 1px solid;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 5px;
`;
export const Text6 = styled.div`
  margin-top: 5%;
  font-size: 20px;
  font-weight: bolder;
`;
export const Enter2 = styled.input`
  border: black 1px solid;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 5px;
`;
export const Btn2 = styled.button`
  cursor: pointer;
  width: 100%;
  border: white 3px solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colorSet.PRIMARY};
  color: white;
  font-size: 32px;
  height: 80px;
  background-color: ${({ theme }) => theme.colorSet.PRIMARY};
  margin-top: 5%;

  &:disabled {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
    border: none;
  }
`;
// -------------------------------------------
export const LeftForm2 = styled.div`
  min-width: 300px;
  z-index: 1;
  color: black;
  width: fit-content;
  text-align: center;
  margin-top: 0%;
  margin-left: 0%;
  animation: fadein 4s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Text2_1 = styled.div`
  font-size: 55px;
  font-weight: bolder;
`;
export const EnterForm2 = styled.div`
  margin-top: 10%;
  text-align: left;
  font-size: 20px;
  font-weight: bolder;
`;
export const Enter3 = styled.input`
  border: 1px black solid;
  border-radius: 5px;
  width: 500px;
  height: 40px;
  font-size: 20px;
  padding-left: 5px;
`;
export const Enter4form = styled.div`
  border: 1px black solid;
  border-radius: 5px;
  width: 500px;
  height: 40px;
  font-size: 20px;
  padding-left: 5px;
  float: left;
`;
export const PwdAl = styled.div`
  float: right;
  z-index: 3;
  font-weight: lighter;
  padding: 10px;
  background-color: white;
  border: gray 1px solid;
  border-radius: 5px;
  position: absolute;
  margin-left: 500px;
  margin-top: -2.3%;
  opacity: 0.7;
  font-size: 16px;
`;
export const Enter4 = styled.input`
  width: 440px;
  height: 40px;
  font-size: 20px;
  padding-left: 5px;
`;
export const Info = styled.button`
  cursor: pointer;
  size: 20px;
  width: fit-content;
  float: right;
  color: black;
  margin-right: 7px;
  margin-top: 6px;
`;
export const Btn3 = styled.button`
  cursor: pointer;
  width: 100%;
  border: white 3px solid;
  border-radius: 5px;
  color: white;
  font-size: 32px;
  height: 80px;
  background-color: ${({ theme }) => theme.colorSet.PRIMARY};
  margin-top: 5%;
  border-color: ${({ theme }) => theme.colorSet.PRIMARY};
  &:disabled {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
    border: none;
  }
`;
export const Wrong = styled.div`
  color: red;
  font-weight: lighter;
  font-size: 16px;
`;
export const Right = styled.div`
  color: green;
  font-weight: lighter;
  font-size: 16px;
`;
export const Pass = styled.div`
  color: green;
  width: fit-content;
  float: right;
  margin-left: 15px;
  margin-top: 5px;
`;
// -------------------------------------------
export const RightForm2 = styled.div`
  min-width: 300px;
  z-index: 1;
  color: white;
  width: fit-content;
  text-align: center;
  margin-top: -2%;
  margin-left: 20%;
  animation: fadein 4s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Text2_3 = styled.div`
  font-size: 55px;
  font-weight: bolder;
`;
export const Text2_4 = styled.div`
  margin-top: 10%;
  font-size: 30px;
`;
export const Btn4 = styled.button`
  cursor: pointer;
  width: 100%;
  border: white 3px solid;
  border-radius: 5px;
  color: white;
  font-size: 32px;
  height: 80px;
  margin-top: 10%;
`;
// -------------------------------------------
export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 5;
  position: absolute;
  border: 5px solid black;
`;
export const Modal2 = styled.div`
  width: 700px;
  height: 700px;
  background-color: white;
  z-index: 6;
  position: absolute;
  border-radius: 10px;
`;
export const Modal3 = styled.div`
  z-index: 6;
  width: 80%;
  height: 40%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  background-image: url(${Image});
  background-size: cover;
`;
export const MT1 = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bolder;
  margin-top: 5%;
`;
export const MT2 = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: bolder;
  color: #9f9c9c;
  margin-top: 5%;
  line-height: 170%;
`;
export const MT3 = styled.button`
background-color:#00B2FF;
border-radius: 5px;
font-size: 36px;

`;
// -------------------------------------------
export const style = {
  Container,
  Background,
  LeftForm1,
  Text1,
  Text2,
  Btn1,
  RightForm1,
  Text3,
  Text4,
  EnterForm,
  Text5,
  Enter1,
  Text6,
  Enter2,
  Btn2,
  LeftForm2,
  Text2_1,
  EnterForm2,
  Enter3,
  Enter4,
  Btn3,
  RightForm2,
  Text2_3,
  Text2_4,
  Btn4,
  Info,
  Enter4form,
  PwdAl,
  Wrong,
  Right,
  Pass,
  Modal,
  Modal2,
  Modal3,
  MT1,
  MT2,
  MT3,
};
