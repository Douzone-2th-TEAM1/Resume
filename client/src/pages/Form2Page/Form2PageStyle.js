import styled from 'styled-components';
// -------------------------------------------
export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
`;
export const Form = styled.div`
  position: relative;
  border: 1px solid black;
  width: 1240px;
  height: 1754px;
  margin-left: 150px;
  margin-top: 100px;
`;
// -------------------------------------------
export const LeftBar = styled.div`
  position: absolute;
  background-color: #222222;
  width: 389px;
  height: 1754px;
`;
export const Photo = styled.div`
  width: 275px;
  height: 275px;
  margin-left: 57px;
  margin-top: 100px;
  border: 1px solid;
  border-radius: 50%;
  background-color: #E2E2E2;
`;
export const LF_Form = styled.div`
  /* border: 1px white dotted; */
  margin-top: 90px;
  margin-left: 45px;
  width: 300px;
  height: 173px;
`;
export const LF_Logo = styled.div`
  /* border: 1px white dotted; */
  color: white;
  font-size: 29px;
  font-weight: bolder;
`;
export const LF_Data = styled.div`
  height: 30px;
  margin-top: 10px;
  font-size: 25px;
  color:white
`;
// -------------------------------------------
export const RightForm = styled.div`
  float: right;
  width: 851px;
  height: 100%;
`;
export const EPForm = styled.div`
  /* border: 1px dotted black; */
  width: 650px;
  height: 510px;
  margin-left: 100px;
  margin-top: 100px;
`;
export const EPFormName = styled.div`
  /* border: 1px dotted black; */
  height: 42px;
  font-size: 42px;
  font-weight: bolder;
`;
export const EPFormData = styled.div`
  /* border: 1px dotted black; */
  margin-top: 36px;
  height: 120px;
`;
export const QAForm = styled.div`
  /* border: 1px dotted black; */
  width: 650px;
  height: 185px;
  margin-top: 50px;
  margin-left: 100px;
`;
export const QAName = styled.div`
  /* border: 1px dotted black; */
  height: 42px;
  font-size: 42px;
  font-weight: bolder;
`;
export const QAData = styled.div`
  /* border: 1px dotted black; */
  height: 128px;
  margin-top: 15px;
`;
// -------------------------------------------
export const style = {
  Container,
  Form,
  LeftBar,
  Photo,
  LF_Form,
  LF_Logo,
  LF_Data,
  EPForm,
  RightForm,
  EPFormName,
  EPFormData,
  QAForm,
  QAName,
  QAData,
};
