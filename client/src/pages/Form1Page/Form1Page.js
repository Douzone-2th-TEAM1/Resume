import React, { useEffect, useState } from 'react';
import { style } from './Form1PageStyle';
import { USERS } from 'utils/constants/users';
import { RESUMES } from 'utils/constants/resume';
import { useSelector } from 'react-redux';

export const Form1Page = ({ match }) => {
  const resumeInfo = useSelector((state) => {
    return state.CommunicationReducer;
  });

  const [id] = useState(Number(match.params.id.slice(1)));
  const [data, setData] = useState({});

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
        <Headline />
        <Profile>
          <ProPhoto>
            <img
              src={
                Object.keys(data).includes('photo')
                  ? `http://localhost:8080/resumes/${data.photo}`
                  : ''
              }
              style={{ width: '100%' }}
            />
          </ProPhoto>
          <ProText>
            {/* 사용자 정보 수정 필요!!!!!!!!!!!! */}
            <TextName>{USERS.name}</TextName>
            <TextPhone>phone : {USERS.phone}</TextPhone>
            <TextEmail>e-mail : {localStorage.getItem('EMAIL')}</TextEmail>
            <TextPhone>URL : {data.portfolio}</TextPhone>
          </ProText>
        </Profile>

        <TopLeftForm>
          <LeftIndex1>TECH SKILLS</LeftIndex1>
          <LeftIndex2>{data.techs && data.techs.map((item, index) => item)}</LeftIndex2>
          <LeftIndex1>CERTIFICATIONS</LeftIndex1>
          {data.certifications &&
            data.certifications.map((item, index) => {
              return <LeftIndex2 key={index}>ㅇ {item.certiName} 취득</LeftIndex2>;
            })}
          <LeftIndex1>AWARDS</LeftIndex1>
          {data.awards &&
            data.awards.map((item, index) => {
              return (
                <LeftIndex2 key={index}>
                  ㅇ {item.awardName} {item.awardCntns} 수상
                </LeftIndex2>
              );
            })}
          <LeftIndex1>CAREERS</LeftIndex1>
          <LeftIndex2>
            {data.careers &&
              data.careers.map((item, index) => {
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
            {data.educations &&
              data.educations.map((item, index) => {
                return (
                  <EP_Data key={index}>
                    <EP_Data1>{item.eduName}</EP_Data1>
                    <EP_Data2>
                      '{item.eduStartDate} ~ '{item.eduEndDate}
                    </EP_Data2>
                    <EP_Data3>{item.eduCntns}</EP_Data3>
                  </EP_Data>
                );
              })}
          </EducationForm>
          <ProjectForm>
            <EP_Logo>PROJECT</EP_Logo>
            {data.projects &&
              data.projects.map((item, index) => {
                return (
                  <EP_Data key={index}>
                    <EP_Data1>{item.prjName}</EP_Data1>
                    <EP_Data2>
                      '{item.prjStartDate} ~ '{item.prjEndDate}'
                    </EP_Data2>
                    <EP_Data3>{item.prjCntns}</EP_Data3>
                  </EP_Data>
                );
              })}
          </ProjectForm>
        </TopRightForm>
        {/* ------------------------- */}
        <BottomForm>
          <FreeForm1>
            <FF_Logo>
              {Object.keys(data).length > 0 && data.qnas.length > 0 && data.qnas[0].quest}
            </FF_Logo>
            <FF_Data>
              {Object.keys(data).length > 0 && data.qnas.length > 0 && data.qnas[0].quest}
            </FF_Data>
          </FreeForm1>
          <FreeForm2>
            <FF_Logo>
              {Object.keys(data).length > 0 && data.qnas.length > 0 && data.qnas[0].quest}
            </FF_Logo>
            <FF_Logo>
              {Object.keys(data).length > 0 && data.qnas.length > 0 && data.qnas[0].quest}
            </FF_Logo>
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
