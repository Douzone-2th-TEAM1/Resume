import React from 'react';
import { style } from './PortfolioStyle';

export const Portfolio = ({ text, onChangeInput }) => {
  const onClickEnter = (e) => {};
  return (
    <Wrapper>
      <Layout ht={'20%'}>
        <Title>포트폴리오</Title>
      </Layout>

      <Layout ht={'100%'}>
        <InnerWrapper>
          <InnerLayout>
            <DateInput
              id="portfolio"
              placeholder="자신을 더 드러낼 수 있는 블로그 혹은 깃허브 주소를 기입해주세요."
              value={text}
              onChange={onChangeInput}
            />
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
