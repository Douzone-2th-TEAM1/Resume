import React from 'react';
import { style } from './CertificationStyle';
export const Certification = () => {
  return (
    <Wrapper>
      <Layout ht={'20%'}>
        <Title>자격증</Title>
        <SubTitle>직무와 연관된 자격증만 기입하세요.(최대 5개)</SubTitle>
      </Layout>

      <Layout ht={'30%'}>
        <Box>
          <InnerBox wd={'60%'}>
            <LabelTitle>자격증명</LabelTitle>
            <LabelInput></LabelInput>
          </InnerBox>

          <InnerBox wd={'40%'}>
            <LabelTitle>점수/급수</LabelTitle>
            <LabelInput></LabelInput>
          </InnerBox>
        </Box>
      </Layout>
    </Wrapper>
  );
};

const { Wrapper, Layout, Title, SubTitle, Box, InnerBox, LabelTitle, LabelInput } = style;
