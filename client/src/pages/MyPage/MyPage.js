import ResumeInfo from 'components/ResumeInfo';
import React, { useEffect } from 'react';
import { style } from './MyPageStyle';
import { MdAccessibilityNew, MdEdit } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInfo } from 'myRedux/actions/CommuicationAction';

export const MyPage = ({ openMyPage, resumeInfo }) => {
  const history = useHistory();
  useEffect(() => {
    console.log(resumeInfo);
  }, [resumeInfo]);
  const onClickSignout = () => {
    localStorage.clear();
    history.push('/');
  };

  const onClickView = () => {
    history.push('/modify');
  };
  return (
    <Wrapper flag={openMyPage}>
      <Container flag={openMyPage}>
        <TopLayout>
          <Rectangle />
        </TopLayout>

        <PageTitle flag={openMyPage}>MY PAGE</PageTitle>
        <CntntsLayout>
          <ResumeInfo title={'저장된 이력서'} flag={openMyPage} datas={resumeInfo.datas} />
          <ResumeInfo title={'작성중인 이력서'} flag={openMyPage} />

          <MyInfoLayout flag={openMyPage}>
            <h4>나의 정보 관리</h4>
            <MyInfoItem>
              <MdAccessibilityNew size={25} />
              <h6>나의 정보 조회</h6>
            </MyInfoItem>

            <MyInfoItem onClick={onClickView}>
              <MdEdit size={25} />
              <h6>나의 정보 수정</h6>
            </MyInfoItem>
          </MyInfoLayout>
        </CntntsLayout>

        <SignOutBtn flag={openMyPage} onClick={onClickSignout}>
          로그아웃
        </SignOutBtn>
      </Container>
    </Wrapper>
  );
};

const {
  Wrapper,
  Container,
  TopLayout,
  PageTitle,
  CntntsLayout,
  Rectangle,
  MyInfoLayout,
  MyInfoItem,
  SignOutBtn,
} = style;
