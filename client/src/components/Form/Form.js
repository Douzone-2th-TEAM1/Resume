import MapForm from 'components/MapForm';
import React from 'react';
import { style } from './FormStyle';

export const Form = ({
  item,
  eduDatas,
  disable,
  onChangeEduInput,
  eduText,
  onInsertEdu,
  resetEdu,
}) => {
  const onClickAdd = () => {
    onInsertEdu() && resetEdu();
  };
  return (
    <Wrapper>
      <Layout ht={'20%'}>
        <Title>{item} 내역</Title>
        <SubTitle>최신순으로 작성하세요.(최대 3개)</SubTitle>
      </Layout>

      {eduDatas &&
        eduDatas.map((value, index) => {
          return (
            <MapForm
              key={index}
              item={item}
              sdate={value.eduStartDate}
              edate={value.eduEndDate}
              name={value.eduName}
              cntnts={value.eduCntns}
            />
          );
        })}
      {/* <MapForm />
      <MapForm /> */}
      <Layout ht={'65%'}>
        <InnerWrapper>
          <InnerLayout>
            <LabelTitle>기간</LabelTitle>
            <DateInput
              id="eduStartDate"
              disabled={disable}
              value={eduText.eduStartDate}
              placeholder="yyyy/mm/dd"
              onChange={onChangeEduInput}
            />
            <h3 style={{ padding: '10px' }}>~</h3>
            <DateInput
              id="eduEndDate"
              disabled={disable}
              value={eduText.eduEndDate}
              placeholder="yyyy/mm/dd"
              onChange={onChangeEduInput}
            />
          </InnerLayout>

          <InnerLayout>
            <LabelTitle>명칭</LabelTitle>
            <LabelInput
              id="eduName"
              disabled={disable}
              value={eduText.eduName}
              onChange={onChangeEduInput}
            />
          </InnerLayout>
          <InnerLayout>
            <LabelTitle> 내용</LabelTitle>
            <LabelInput2
              id="eduCntns"
              disabled={disable}
              value={eduText.eduCntns}
              onChange={onChangeEduInput}
            />
          </InnerLayout>
        </InnerWrapper>
      </Layout>

      <Layout ht={'12%'}>
        <AddBtn onClick={onClickAdd}>추가</AddBtn>
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
