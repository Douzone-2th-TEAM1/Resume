import React, { useEffect, useState } from 'react';
import { style } from './Form2PageStyle';
import { USERS } from 'utils/constants/users';
import { IoMailSharp } from 'react-icons/io5';

export const Form2Page = () => {
  return (
    <Container>
      <Form>
        <LeftBar>
          <Photo />
          <LF_Form>
            <LF_Logo>🖐🏻 ABOUT ME</LF_Logo>
            <LF_Data>
              <IoMailSharp />  {USERS.email}
            </LF_Data>
          </LF_Form>
          <LF_Form>
            <LF_Logo>💻 TECH SKILLS</LF_Logo>
            <LF_Data />
          </LF_Form>
          <LF_Form>
            <LF_Logo>📚 CERTIFICATIONS</LF_Logo>
            <LF_Data />
          </LF_Form>
          <LF_Form>
            <LF_Logo>🎖 AWARDS</LF_Logo>
            <LF_Data />
          </LF_Form>
          <LF_Form>
            <LF_Logo>💼 CAREERS</LF_Logo>
            <LF_Data />
          </LF_Form>
        </LeftBar>
        {/* ------------------------------------ */}
        <RightForm>
          <EPForm>
            <EPFormName>EDUCATION</EPFormName>
            <EPFormData />
            <EPFormData />
            <EPFormData />
          </EPForm>
          <EPForm>
            <EPFormName>PROJECTS</EPFormName>
            <EPFormData />
            <EPFormData />
            <EPFormData />
          </EPForm>
          <QAForm>
            <QAName>지원동기</QAName>
            <QAData />
          </QAForm>
          <QAForm>
            <QAName>입사 후 포부</QAName>
            <QAData />
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
} = style;
