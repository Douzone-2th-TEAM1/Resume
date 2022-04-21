import MapForm from 'components/MapForm';
import React from 'react';
import { style } from './FormStyle';

export const Form = ({ item, datas, disable, onChangeInput, text, onInsertDatas, resetText }) => {
  const getData = () => {
    let [name, sdate, edate, cntns] = [''];
    if (item === '교육') {
      name = text.eduName;
      sdate = text.eduStartDate;
      edate = text.eduEndDate;
      cntns = text.eduCntns;
    } else if (item === '수상') {
      name = text.awrdName;
      sdate = text.awrdDate;
      cntns = text.awrdCntns;
    } else if (item === '프로젝트') {
      name = text.prjName;
      sdate = text.prjStartDate;
      edate = text.prjEndDate;
      cntns = text.prjCntns;
    } else if (item === '경력') {
      name = text.cmpnyName;
      sdate = text.workStartDate;
      edate = text.workEndDate;
      cntns = text.workCntns;
    }
    // console.log(name, sdate, edate, cntns);
    return { name, sdate, edate, cntns };
  };

  const cnvertId = () => {
    let [name, sdate, edate, cntns] = [''];

    if (item === '교육') {
      name = 'eduName';
      sdate = 'eduStartDate';
      edate = 'eduEndDate';
      cntns = 'eduCntns';
    } else if (item === '수상') {
      name = 'awrdName';
      sdate = 'awrdDate';
      cntns = 'awrdCntns';
    } else if (item === '프로젝트') {
      name = 'prjName';
      sdate = 'prjStartDate';
      edate = 'prjEndDate';
      cntns = 'prjCntns';
    } else if (item === '경력') {
      name = 'cmpnyName';
      sdate = 'workStartDate';
      edate = 'workEndDate';
      cntns = 'workCntns';
    }
    return { name, sdate, edate, cntns };
  };

  const onClickAdd = () => {
    onInsertDatas() && resetText();
  };
  return (
    <Wrapper>
      <Layout ht={'20%'}>
        <Title>{item} 내역</Title>
        <SubTitle>최신순으로 작성하세요.(최대 3개)</SubTitle>
      </Layout>

      {datas &&
        datas.map((value, index) => {
          const [sdate, edate, name, cntns] = [
            value[cnvertId().sdate],
            value[cnvertId().edate],
            value[cnvertId().name],
            value[cnvertId().cntns],
          ];
          return (
            <MapForm
              key={index}
              item={item}
              sdate={sdate}
              edate={edate}
              name={name}
              cntnts={cntns}
            />
          );
        })}

      <Layout ht={'65%'}>
        <InnerWrapper>
          <InnerLayout>
            <LabelTitle>기간</LabelTitle>
            <DateInput
              id={cnvertId().sdate}
              disabled={disable}
              value={getData().sdate}
              placeholder="yyyy/mm/dd"
              onChange={onChangeInput}
            />

            {item === '수상' ? (
              <></>
            ) : (
              <>
                <h3 style={{ padding: '10px' }}>~</h3>
                <DateInput
                  id={cnvertId().edate}
                  disabled={disable}
                  value={getData().edate}
                  placeholder="yyyy/mm/dd"
                  onChange={onChangeInput}
                />
              </>
            )}
          </InnerLayout>

          <InnerLayout>
            <LabelTitle>명칭</LabelTitle>
            <LabelInput
              id={cnvertId().name}
              disabled={disable}
              value={getData().name}
              onChange={onChangeInput}
            />
          </InnerLayout>
          <InnerLayout>
            <LabelTitle> 내용</LabelTitle>
            <LabelInput2
              id={cnvertId().cntns}
              disabled={disable}
              value={getData().cntns}
              onChange={onChangeInput}
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
