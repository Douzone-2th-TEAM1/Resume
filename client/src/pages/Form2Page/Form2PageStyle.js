import styled from 'styled-components';
// -------------------------------------------
export const Container = styled.div`
  /* ${({ theme }) => theme.flexSet()} */
  width: 620px;
  height: 877px;
  margin-top: 50px;
  margin-left: 35%;
`;
export const Form = styled.div`
  position: relative;
  border: 1px solid black;
  width: 100%;
  height: 100%;
`;
// -------------------------------------------
export const LeftBar = styled.div`
  position: absolute;
  background-color: #222222;
  width: 195px;
  height: 877px;
`;
export const Photo = styled.div`
  width: 137px;
  height: 137px;
  margin-left: 28px;
  margin-top: 50px;
  border: 1px solid;
  border-radius: 50%;
  background-color: #e2e2e2;
`;
export const LF_Form = styled.div`
  /* border: 1px white dotted; */
  margin-top: 45px;
  margin-left: 22px;
  width: 200px;
  height: 86px;
`;
export const LF_Logo = styled.div`
  /* border: 1px white dotted; */
  color: white;
  font-size: 15px;
  font-weight: bolder;
`;
export const LF_Data = styled.div`
  height: 15px;
  margin-top: 5px;
  font-size: 12px;
  font-weight: bold;
  color: white;

  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
// -------------------------------------------
export const RightForm = styled.div`
  float: right;
  width: 425px;
  height: 100%;
`;
export const EPForm = styled.div`
  /* border: 1px dotted black; */
  width: 325px;
  height: 255px;
  margin-left: 50px;
  margin-top: 50px;
`;
export const EPFormName = styled.div`
  /* border: 1px dotted black; */
  height: 21px;
  font-size: 21px;
  font-weight: bolder;
`;
export const EPFormData = styled.div`
  /* border: 1px dotted black; */
  margin-top: 18px;
  height: 60px;
`;
export const EPFormData2 = styled.div`
  // ㅇㅇㅇ 교육
  position: absolute;
  width: 35%;
  height: 13px;
  font-size: 14px;
  font-weight: bolder;
`;
export const EPFormData3 = styled.div`
  // 날짜
  float: right;
  width: 65%;
  height: 13px;
  font-size: 10px;
  font-weight: bolder;
  text-align: left; ;
`;
export const EPFormData4 = styled.div`
  // 내용
  /* border: 1px dotted black; */
  padding-top: 20px;
  height: 60px;
  font-size: 10px;
`;
export const QAForm = styled.div`
  /* border: 1px dotted black; */
  width: 325px;
  height: 92px;
  margin-top: 25px;
  margin-left: 50px;
`;
export const QAName = styled.div`
  /* border: 1px dotted black; */
  height: 21px;
  font-size: 21px;
  font-weight: bolder;
`;
export const QAData = styled.div`
  /* border: 1px dotted black; */
  height: 64px;
  margin-top: 9px;
  font-size: 12px;
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
  EPFormData2,
  EPFormData3,
  EPFormData4,
};
