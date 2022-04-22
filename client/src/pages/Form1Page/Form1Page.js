import React from 'react';
import { style } from './Form1PageStyle';
import { USERS } from 'utils/constants/users';
import { RESUMES } from 'utils/constants/resume';

export const Form1Page = () => {
  return (
    <Container>
      <Form>
        <Headline />
        {/* ------------------------- */}
        <Profile>
          <ProPhoto />
          <ProText>
            <TextName>{USERS.name}</TextName>
            <TextPhone>phone : {USERS.phone}</TextPhone>
            <TextEmail>e-mail : {USERS.email}</TextEmail>
          </ProText>
        </Profile>
        {/* ------------------------- */}
        <TopLeftForm>
          <LeftIndex1>TECH SKILLS</LeftIndex1>
          <LeftIndex2>{RESUMES.temp_data.teches}</LeftIndex2>
          <LeftIndex1>CERTIFICATIONS</LeftIndex1>
          {RESUMES.temp_data.certifications &&
            RESUMES.temp_data.certifications.map((item, index) => {
              return <LeftIndex2 key={index}>ㅇ {item.certName} 취득</LeftIndex2>;
            })}
          <LeftIndex1>AWARDS</LeftIndex1>
          {RESUMES.temp_data.awards &&
            RESUMES.temp_data.awards.map((item, index) => {
              return <LeftIndex2 key={index}>ㅇ {item.awardName} {item.awardCntns} 수상</LeftIndex2>;
            })}
          <LeftIndex1>CAREERS</LeftIndex1>
          <LeftIndex2>
            {RESUMES.temp_data.careers &&
              RESUMES.temp_data.careers.map((item, index) => {
                return (
                  <LeftIndex2 key={index}>
                    ㅇ {item.cmpnyName} {item.workCntns} 근무
                  </LeftIndex2>
                );
              })}
          </LeftIndex2>
        </TopLeftForm>
        {/* ------------------------- */}
        <TopRightForm>
          <EducationForm>
            <EP_Logo>EDUCATION</EP_Logo>
            {RESUMES.temp_data.educations &&
              RESUMES.temp_data.educations.map((item, index) => {
                return (
                  <EP_Data key={index}>
                    <EP_Data1>{item.eduName}</EP_Data1>
                    <EP_Data2>'{item.eduStartDate} ~ '{item.eduEndDate}</EP_Data2>
                    <EP_Data3>{item.eduCntns}</EP_Data3>
                  </EP_Data>
                );
              })}
          </EducationForm>
          <ProjectForm>
            <EP_Logo>PROJECT</EP_Logo>
            {RESUMES.temp_data.projects &&
              RESUMES.temp_data.projects.map((item, index) => {
                return (
                  <EP_Data key={index}>
                    <EP_Data1>{item.prjName}</EP_Data1>
                    <EP_Data2>'{item.prjStartDate} ~ '{item.prjEndDate}</EP_Data2>
                    <EP_Data3>{item.prjCntns}</EP_Data3>
                  </EP_Data>
                );
              })}
          </ProjectForm>
        </TopRightForm>
        {/* ------------------------- */}
        <BottomForm>
          <FreeForm1>
            <FF_Logo>{RESUMES.temp_data.qnas[0].quest}</FF_Logo>
            <FF_Data>{RESUMES.temp_data.qnas[0].answer}</FF_Data>
          </FreeForm1>
          <FreeForm2>
            {RESUMES.temp_data.qnas[1] && <FF_Logo>{RESUMES.temp_data.qnas[1].quest}</FF_Logo>}
            {RESUMES.temp_data.qnas[1] && <FF_Data>{RESUMES.temp_data.qnas[1].answer}</FF_Data>}
          </FreeForm2>
        </BottomForm>
      </Form>
    </Container>
  );
};

// -----------------------------------------------------------
const {
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
} = style;
