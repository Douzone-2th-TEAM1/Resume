import ResumeInfo from 'components/ResumeInfo';
import React from 'react';
import { style } from './MyPageStyle';

export const MyPage = ({ openMyPage }) => {
  return (
    <Wrapper flag={openMyPage}>
      {openMyPage && (
        <Container flag={openMyPage}>
          <TopLayout>
            <Rectangle />
          </TopLayout>

          <>
            <PageTitle>MY PAGE</PageTitle>
            <CntntsLayout>
              <ResumeInfo title={'저장된 이력서'} />
              <ResumeInfo title={'작성중인 이력서'} />

              <MyInfoLayout>
                <h4>나의 정보 관리</h4>
                <MyInfoItem></MyInfoItem>
              </MyInfoLayout>
            </CntntsLayout>

            <SignOutBtn>로그아웃</SignOutBtn>
          </>
        </Container>
      )}
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
