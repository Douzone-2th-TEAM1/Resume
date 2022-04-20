import React from 'react';
import { style } from './CertificationStyle';
import Label from 'components/Label';
export const Certification = ({
  certiDatas,
  disable,
  certiName,
  certiScore,
  certiDate,
  onChangeCertiInput,
  onInsertCerti,
  resetCerti,
  onChangeDelInfo,
}) => {
  const onClickEnroll = (e) => {
    onInsertCerti() && resetCerti();
  };
  const onClickCancel = () => {
    resetCerti();
  };

  return (
    <Wrapper>
      <Layout ht={'20%'}>
        <Title>자격증</Title>
        <SubTitle>직무와 연관된 자격증만 기입하세요.(최대 5개)</SubTitle>
      </Layout>

      <Layout ht={'35%'}>
        <Box>
          <InnerBox>
            <LabelTitle>자격증명</LabelTitle>
            <LabelInput
              id="certiName"
              wd={'60%'}
              value={certiName}
              onChange={onChangeCertiInput}
              disabled={disable}
            ></LabelInput>
          </InnerBox>

          <InnerBox>
            <LabelTitle>점수/급수</LabelTitle>
            <LabelInput
              id="certiScore"
              wd={'40%'}
              value={certiScore}
              onChange={onChangeCertiInput}
              disabled={disable}
            ></LabelInput>
          </InnerBox>

          <InnerBox>
            <LabelTitle>발급 일자</LabelTitle>
            <LabelInput
              id="certiDate"
              placeholder="yyyy/MM/dd"
              wd={'60%'}
              value={certiDate}
              onChange={onChangeCertiInput}
              disabled={disable}
            ></LabelInput>
          </InnerBox>

          <InnerBox>
            <MyButton id="certifications" flag={false} onClick={onClickCancel}>
              취소
            </MyButton>
            <MyButton id="certifications" flag={true} onClick={onClickEnroll}>
              등록
            </MyButton>
          </InnerBox>
        </Box>
      </Layout>

      <Layout2 ht={'45%'}>
        {certiDatas &&
          certiDatas.map((item, index) => {
            return (
              <Label
                item={'certifications'}
                bgColor={'#8D8DAA'}
                key={index}
                id={index}
                text={item.certiName}
                onChangeDelInfo={onChangeDelInfo}
              />
            );
          })}
      </Layout2>
    </Wrapper>
  );
};

const {
  Wrapper,
  Layout,
  Layout2,
  Title,
  SubTitle,
  Box,
  InnerBox,
  LabelTitle,
  LabelInput,
  MyButton,
} = style;
