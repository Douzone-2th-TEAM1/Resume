import React, { useEffect, useState } from 'react';
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
          <LeftIndex2>
            {RESUMES.temp_data.awards &&
              RESUMES.temp_data.awards.map((item, index) => {
                return<div key={index}>{item.awardCntns}</div>;
              })}
          </LeftIndex2>
          <LeftIndex1>CERTIFICATIONS</LeftIndex1>
          <LeftIndex2>
            {RESUMES.temp_data.certifications &&
              RESUMES.temp_data.certifications.map((item, index) => {
                return <div key={index}>{item.certName}</div>;
              })}
          </LeftIndex2>
          <LeftIndex1>AWARDS</LeftIndex1>
          <LeftIndex2>
            {RESUMES.temp_data.awards &&
              RESUMES.temp_data.awards.map((item, index) => {
                return <div key={index}>{item.awardCntns}</div>;
              })}
          </LeftIndex2>
          <LeftIndex1>CAREERS</LeftIndex1>
          <LeftIndex2>
            {RESUMES.temp_data.careers &&
              RESUMES.temp_data.careers.map((item, index) => {
                return <div key={index}>{item.workCntns}</div>;
              })}
          </LeftIndex2>
        </TopLeftForm>
        {/* ------------------------- */}
        <TopRightForm>
          <EducationForm>
            <EP_Logo>EDUCATION</EP_Logo>
            <EP_Data />
          </EducationForm>
          <ProjectForm>
            <EP_Logo>PROJECT</EP_Logo>
            <EP_Data />
          </ProjectForm>
        </TopRightForm>
        {/* ------------------------- */}
        <BottomForm>
          <FreeForm1>
            <FF_Logo>지원 동기</FF_Logo>
            <FF_Data />
          </FreeForm1>
          <FreeForm2>
            <FF_Logo>입사 후 포부</FF_Logo>
            <FF_Data />
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
} = style;
