import styled from 'styled-components';
// -------------------------------------------
export const Container = styled.div`
  /* ${({ theme }) => theme.flexSet()} */
  width: 620px;
  height: 877px;
  margin-top: 50px;
  margin-left: 35%;
`;
// -------------------------------------------
export const Form = styled.div`
  position: relative;
  border: 1px solid black;
  width: 100%;
  height: 100%;
`;
export const Headline = styled.div`
  width: 619px;
  height: 102px;
  background-color: #d6c000;
`;
// -------------------------------------------
export const Profile = styled.div`
  /* border: 1px black dotted; */
  position: absolute;
  top: 25px;
  right: 25px;
  width: 323px;
  height: 137px;
  z-index: 1;
`;
export const ProPhoto = styled.div`
  float: right;
  border: 1px black solid;
  width: 137px;
  height: 137px;
  background-color: white;
`;
export const ProText = styled.div`
  width: 186px;
  height: 137px;
  color: white;
`;
export const TextName = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  margin-top: 10px;
  margin-bottom: 2.5px;
`;
export const TextPhone = styled.div`
  font-size: 12px;
  margin-bottom: 2.5px;
`;
export const TextEmail = styled.div`
  font-size: 12px;
`;
// -------------------------------------------
export const TopLeftForm = styled.div`
  /* border: 1px black dotted; */
  width: 183px;
  height: 490px;
  margin-top: 50px;
`;
export const LeftIndex1 = styled.div`
  width: 183.5px;
  height: 30px;
  background-color: #d6c000;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  color: white;
`;
export const LeftIndex2 = styled.div`
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  padding-left: 5px;
  height: 18px;
  width: 183.5px;
  font-size: 12px;
  font-weight: bolder;
`;
// -------------------------------------------
export const TopRightForm = styled.div`
  /* border: 1px black dotted; */
  position: absolute;
  top: 125px;
  right: 25px;
  width: 390px;
  height: 554px;
`;
export const EducationForm = styled.div`
  /* border: 1px black dotted; */
  height: 265px;
  margin-bottom: 25px;
`;
export const EP_Logo = styled.div`
  /* border: 1px black dotted; */
  height: 37px;
  font-size: 24px;
  font-weight: bolder;
  color: #d6c000;
`;
export const EP_Data = styled.div`
  /* border: 1px black dotted; */
  height: 70px;
  margin-top: 7.5px;
`;
export const EP_Data1 = styled.div`
  position: relative;
  float: left;
  height: 15px;
  width: 30%;
  font-size: 16px;
  font-weight: bolder;
`;
export const EP_Data2 = styled.div`
  float: right;
  height: 15px;
  width: 70%;
  font-size: 13px;
`;
export const EP_Data3 = styled.div`
  height: 70px;
  padding-top: 25px;
  font-size: 7px;
`;
export const ProjectForm = styled.div`
  /* border: 1px black dotted; */
  height: 265px;
`;
// -------------------------------------------
export const BottomForm = styled.div`
  /* border: 1px black dotted; */
  position: absolute;
  bottom: 10px;
  left: 2.5%;
  height: 175px;
  width: 95%;
`;
export const FreeForm1 = styled.div`
  /* border: 1px black dotted; */
  float: left;
  margin-left: 25px;
  width: 242px;
  height: 100%;
`;
export const FF_Logo = styled.div`
  /* border: 1px black dotted; */
  font-size: 16px;
  font-size: 24px;
  font-weight: bolder;
  color: #d6c000;
`;
export const FF_Data = styled.div`
  /* border: 1px black dotted; */
  margin-top: 5px;
  font-size: 12px;
`;
export const FreeForm2 = styled.div`
  /* border: 1px black dotted; */
  float: left;
  margin-left: 50px;
  width: 242px;
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
  EP_Data1,
  EP_Data2,
  EP_Data3,
};
