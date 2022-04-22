import React from 'react';
import { style } from './Form2PageStyle';
import { USERS } from 'utils/constants/users';
import { RESUMES } from 'utils/constants/resume';

export const Form2Page = () => {
  return (
    <Container>
      <Form>
        <LeftBar>
          <Photo />
          <LF_Form>
            <LF_Logo>🖐🏻 ABOUT ME</LF_Logo>
            <LF_Data>ㅇ {USERS.name}</LF_Data>
            <LF_Data>ㅇ {USERS.email}</LF_Data>
            <LF_Data>ㅇ {USERS.phone}</LF_Data>
          </LF_Form>
          <LF_Form>
            <LF_Logo>💻 TECH SKILLS</LF_Logo>
            <LF_Data>{RESUMES.temp_data.teches}</LF_Data>
          </LF_Form>
          <LF_Form>
            <LF_Logo>📚 CERTIFICATIONS</LF_Logo>
            {RESUMES.temp_data.awards &&
              RESUMES.temp_data.awards.map((item, index) => {
                return <LF_Data key={index}>ㅇ {item.awardCntns}</LF_Data>;
              })}
          </LF_Form>
          <LF_Form>
            <LF_Logo>🎖 AWARDS</LF_Logo>
            {RESUMES.temp_data.awards &&
              RESUMES.temp_data.awards.map((item, index) => {
                return (
                  <LF_Data key={index}>
                    ㅇ {item.awardName} {item.awardCntns} 수상
                  </LF_Data>
                );
              })}
          </LF_Form>
          <LF_Form>
            <LF_Logo>💼 CAREERS</LF_Logo>
            {RESUMES.temp_data.careers &&
              RESUMES.temp_data.careers.map((item, index) => {
                return (
                  <LF_Data key={index}>
                    ㅇ {item.cmpnyName} {item.workCntns}
                  </LF_Data>
                );
              })}
          </LF_Form>
        </LeftBar>
        {/* ------------------------------------ */}
        <RightForm>
          <EPForm>
            <EPFormName>EDUCATION</EPFormName>
            {RESUMES.temp_data.educations &&
              RESUMES.temp_data.educations.map((item, index) => {
                return (
                  <EPFormData key={index}>
                    <EPFormData2>{item.eduName}</EPFormData2>
                    <EPFormData3>{item.eduStartDate} ~ {item.eduEndDate}</EPFormData3>
                    <EPFormData4>{item.eduCntns}</EPFormData4>
                  </EPFormData>
                );
              })}
          </EPForm>
          <EPForm>
            <EPFormName>PROJECTS</EPFormName>
            {RESUMES.temp_data.projects &&
              RESUMES.temp_data.projects.map((item, index) => {
                return (
                  <EPFormData key={index}>
                    <EPFormData2>{item.prjName}</EPFormData2>
                    <EPFormData3>{item.prjStartDate} ~ {item.prjEndDate}</EPFormData3>
                    <EPFormData4>{item.prjCntns}</EPFormData4>
                  </EPFormData>
                );
              })}
          </EPForm>
          <QAForm>
            <QAName>{RESUMES.temp_data.qnas[0].quest}</QAName>
            <QAData>{RESUMES.temp_data.qnas[0].answer}</QAData>
          </QAForm>
          <QAForm>
            <QAName>{RESUMES.temp_data.qnas[1].quest}</QAName>
            <QAData>{RESUMES.temp_data.qnas[1].answer}</QAData>
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
