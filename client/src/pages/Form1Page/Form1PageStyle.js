import styled from 'styled-components';
// -------------------------------------------
export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
  overflow: scroll;
`;
// -------------------------------------------
export const Form = styled.div`
  position: relative;
  border: 1px solid black;
  width: 1240px;
  height: 1754px;
  margin-left: 150px;
  margin-top: 100px;
`;
export const Headline = styled.div`
  width: 1238px;
  height: 205px;
  background-color: #d6c000;
`;
// -------------------------------------------
export const Profile = styled.div`
  /* border: 1px black dotted; */
  position: absolute;
  top: 50px;
  right: 50px;
  width: 647px;
  height: 275px;
`;
export const ProPhoto = styled.div`
  float: right;
  border: 1px black solid;
  width: 275px;
  height: 275px;
  background-color: white;
`;
export const ProText = styled.div`
  width: 372px;
  height: 275px;
  color: white;
`;
export const TextName = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: bolder;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const TextPhone = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;
export const TextEmail = styled.div`
  font-size: 24px;
`;
// -------------------------------------------
export const TopLeftForm = styled.div`
  /* border: 1px black dotted; */
  width: 367px;
  height: 980px;
  margin-top: 100px;
`;
export const LeftIndex1 = styled.div`
  width: 367px;
  height: 59px;
  background-color: #d6c000;
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
  color: white;
`;
export const LeftIndex2 = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 10px;
  height: 36px;
  width: 367px;
  font-size: 24px;
  font-weight: bolder;
`;
// -------------------------------------------
export const TopRightForm = styled.div`
  /* border: 1px black dotted; */
  position: absolute;
  top: 250px;
  right: 50px;
  width: 780px;
  height: 1108px;
`;
export const EducationForm = styled.div`
  /* border: 1px black dotted; */
  height: 529px;
  margin-bottom: 50px;
`;
export const EP_Logo = styled.div`
  /* border: 1px black dotted; */
  height: 74px;
  font-size: 48px;
  font-weight: bolder;
  color: #d6c000;
`;
export const EP_Data = styled.div`
  height: 450px;
`;
export const ProjectForm = styled.div`
  /* border: 1px black dotted; */
  height: 529px;
`;
// -------------------------------------------
export const BottomForm = styled.div`
  /* border: 1px black dotted; */
  position: absolute;
  bottom: 20px;
  left: 2.5%;
  height: 350px;
  width: 95%;
`;
export const FreeForm1 = styled.div`
  /* border: 1px black dotted; */
  float: left;
  margin-left: 50px;
  width: 485px;
  height: 100%;
`;
export const FF_Logo = styled.div`
  /* border: 1px black dotted; */
  font-size: 33px;
  font-size: 48px;
  font-weight: bolder;
  color: #d6c000;
`;
export const FF_Data = styled.div`
  /* border: 1px black dotted; */
  margin-top: 10px;
  font-size: 24px;
`;
export const FreeForm2 = styled.div`
  /* border: 1px black dotted; */
  float: left;
  margin-left: 100px;
  width: 485px;
  height: 100%;
`;
// -------------------------------------------
export const style = {
  Container,
  Form,
  Headline,
  Profile,
  ProPhoto,
  ProText,
  TextName,
  TextPhone,
  TextEmail,
  TopLeftForm,
  LeftIndex1,
  LeftIndex2,
  TopRightForm,
  EducationForm,
  EP_Logo,
  EP_Data,
  ProjectForm,
  BottomForm,
  FreeForm1,
  FF_Logo,
  FF_Data,
  FreeForm2,
};
