import React from 'react';
import { style } from './PortfolioStyle';

export const Portfolio = () => {
  return (
    <Wrapper>
      <Layout ht={'20%'}>
        <Title>포트폴리오</Title>
      </Layout>

      <Layout ht={'100%'}>
        <InnerWrapper>
          <InnerLayout>
            <LabelTitle>기간</LabelTitle>
            <DateInput readOnly />
          </InnerLayout>

          <InnerLayout>
            <LabelTitle>명칭</LabelTitle>
            <LabelInput readOnly />
          </InnerLayout>
          <InnerLayout>
            <LabelTitle>내용</LabelTitle>
            <LabelInput2 readOnly />
          </InnerLayout>
        </InnerWrapper>
      </Layout>
    </Wrapper>
  );
};

const {
  Wrapper,
  Layout,
  Title,
  SubTitle,
  InnerWrapper,
  InnerLayout,
  LabelTitle,
  DateInput,
  LabelInput,
  LabelInput2,
  AddBtn,
} = style;
