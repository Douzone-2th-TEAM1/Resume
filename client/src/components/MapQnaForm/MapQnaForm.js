import React from 'react';
import { style } from './MapQnaFormStyle';

export const MapQnaForm = ({ quest, answer }) => {
  return (
    <Wrapper>
      <Layout ht={'65%'}>
        <InnerWrapper>
          <InnerLayout>
            <LabelTitle>질문</LabelTitle>
            <DateInput readOnly value={quest} />
          </InnerLayout>

          <InnerLayout>
            <LabelTitle>답변</LabelTitle>
            <LabelInput2 readOnly value={answer} />
          </InnerLayout>
        </InnerWrapper>
      </Layout>
      <Layout ht={'12%'}>
        <AddBtn>추가</AddBtn>
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
  LabelInput2,
  AddBtn,
} = style;
