import MapQnaForm from 'components/MapQnaForm';
import React from 'react';
import { style } from './QnaFormStyle';

export const QnaForm = ({ datas, disable, onChangeInput, text, onInsertDatas, resetText }) => {
  const onClickAddBtn = () => {
    onInsertDatas() && resetText();
  };

  return (
    <Wrapper>
      <Layout ht={'20%'}>
        <Title>Q&A</Title>
        <SubTitle>자유롭게 작성하세요.(최대 2개)</SubTitle>
      </Layout>

      {/* <MapQnaForm /> */}
      {datas &&
        datas.map((value, index) => {
          return <MapQnaForm key={index} quest={value.quest} answer={value.answer} />;
        })}
      <Layout ht={'65%'}>
        <InnerWrapper>
          <InnerLayout>
            <LabelTitle>질문</LabelTitle>
            <DateInput id="quest" disabled={disable} onChange={onChangeInput} value={text.quest} />
          </InnerLayout>

          <InnerLayout>
            <LabelTitle>답변</LabelTitle>
            <LabelInput2
              id="answer"
              disabled={disable}
              onChange={onChangeInput}
              value={text.answer}
            />
          </InnerLayout>
        </InnerWrapper>
      </Layout>
      <Layout ht={'12%'}>
        <AddBtn onClick={onClickAddBtn}>추가</AddBtn>
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
