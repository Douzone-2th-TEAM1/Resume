import React, { useState, useEffect } from 'react';
import { style } from './Form2PageStyle';
import { USERS } from 'utils/constants/users';
import { RESUMES } from 'utils/constants/resume';
import { useSelector } from 'react-redux';

export const Form2Page = ({ match }) => {
  const [id] = useState(Number(match.params.id.slice(1)));
  const [data, setData] = useState({});

  const resumeInfo = useSelector((state) => {
    return state.CommunicationReducer;
  });

  useEffect(() => {
    if (Object.keys(resumeInfo).length > 0) {
      setData(resumeInfo.datas.find((item) => item.r_id === id));
    }
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Container>
      <Form>
        <LeftBar>
          <Photo>
            <img
              src={
                Object.keys(data).includes('photo')
                  ? `http://localhost:8080/resumes/${data.photo}`
                  : ''
              }
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          </Photo>
          <LF_Form>
            <LF_Logo>🖐🏻 ABOUT ME</LF_Logo>
            <LF_Data>NAME : {data.name}</LF_Data>
            <LF_Data>MAIL : {localStorage.getItem('EMAIL')}</LF_Data>
            <LF_Data>TEL : {data.phone}</LF_Data>
            <LF_Data>URL : {data.portfolio}</LF_Data>
          </LF_Form>
          <LF_Form>
            <LF_Logo>💻 TECH SKILLS</LF_Logo>
            <LF_Data>
              {data.techs &&
                data.techs.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      {item}
                    </div>
                  );
                })}
            </LF_Data>
          </LF_Form>
          <LF_Form>
            <LF_Logo>📚 CERTIFICATIONS</LF_Logo>
            {data.certifications &&
              data.certifications.map((item, index) => {
                return <LF_Data key={index}>ㅇ {item.certiName} 취득</LF_Data>;
              })}
          </LF_Form>
          <LF_Form>
            <LF_Logo>🎖 AWARDS</LF_Logo>
            {data.awards &&
              data.awards.map((item, index) => {
                return (
                  <LF_Data key={index}>
                    ㅇ {item.awrdName} {item.awrdCntns} 수상
                  </LF_Data>
                );
              })}
          </LF_Form>
          <LF_Form>
            <LF_Logo>💼 CAREERS</LF_Logo>
            {data.careers &&
              data.careers.map((item, index) => {
                return (
                  <LF_Data key={index}>
                    ㅇ {item.cmpnyName} {item.workCntns} 근무
                  </LF_Data>
                );
              })}
          </LF_Form>
        </LeftBar>
        {/* ------------------------------------ */}
        <RightForm>
          <EPForm>
            <EPFormName>EDUCATION</EPFormName>
            {data.educations &&
              data.educations.map((item, index) => {
                return (
                  <EPFormData key={index}>
                    <EPFormData2>{item.eduName}</EPFormData2>
                    <EPFormData3>
                      {item.eduStartDate} ~ {item.eduEndDate}
                    </EPFormData3>
                    <EPFormData4>{item.eduCntns}</EPFormData4>
                  </EPFormData>
                );
              })}
          </EPForm>
          <EPForm>
            <EPFormName>PROJECTS</EPFormName>
            {data.projects &&
              data.projects.map((item, index) => {
                return (
                  <EPFormData key={index}>
                    <EPFormData2>{item.prjName}</EPFormData2>
                    <EPFormData3>
                      {item.prjStartDate} ~ {item.prjEndDate}
                    </EPFormData3>
                    <EPFormData4>{item.prjCntns}</EPFormData4>
                  </EPFormData>
                );
              })}
          </EPForm>
          <QAForm>
            <QAName>
              {Object.keys(data).length > 0 && data.qnas.length > 0 && data.qnas[0].quest}
            </QAName>
            <QAData>
              {Object.keys(data).length > 0 && data.qnas.length > 0 && data.qnas[0].answer}
            </QAData>
          </QAForm>
          <QAForm>
            <QAName>
              {Object.keys(data).length > 0 && data.qnas.length > 1 && data.qnas[1].quest}
            </QAName>
            <QAData>
              {Object.keys(data).length > 0 && data.qnas.length > 1 && data.qnas[1].answer}
            </QAData>
          </QAForm>
        </RightForm>
      </Form>
    </Container>
  );
};
// -----------------------------------------------------------
const {
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
} = style;
