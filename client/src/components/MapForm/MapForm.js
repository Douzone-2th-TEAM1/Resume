import React from 'react';
import { style } from './MapFormStyle';

export const MapForm = ({ item, sdate, edate, name, cntnts }) => {
  return (
    <Wrapper>
      <Layout ht={'100%'}>
        <InnerWrapper>
          <InnerLayout>
            <LabelTitle>기간</LabelTitle>
            <DateInput readOnly value={sdate} />

            {item === '수상' ? (
              <></>
            ) : (
              <>
                <h3 style={{ padding: '10px' }}>~</h3>
                <DateInput readOnly value={edate}></DateInput>
              </>
            )}
          </InnerLayout>

          <InnerLayout>
            <LabelTitle>명칭</LabelTitle>
            <LabelInput readOnly value={name} />
          </InnerLayout>
          <InnerLayout>
            <LabelTitle>내용</LabelTitle>
            <LabelInput2 readOnly value={cntnts} />
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
