import React, { useEffect, useState } from 'react';
import { TEMPLATE_LIST } from 'utils/constants/templateList';
import { style } from './PreviewPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { storeInfo } from 'myRedux/actions/ResumeActions';
import { useNavigate } from 'react-router-dom';

export const PreviewPage = ({ target }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const storeDatas = useSelector((state) => state.ResumeReducer);
  const [info, setInfo] = useState(storeDatas.info);

  const onChangeTitle = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };
  const onClickComplete = (e) => {
    dispatch(storeInfo(info));
    navigation('/');
  };

  // useEffect(() => {
  //   console.log(info);
  // }, [info]);

  useEffect(() => {
    console.log(storeDatas);
  }, [storeDatas]);
  return (
    <Layout>
      <InnerLayout>
        <h1>PREVIEW</h1>
      </InnerLayout>
      <InnerLayout>
        <img src={TEMPLATE_LIST[target].img} style={{ width: '85%', height: '700px' }} />
      </InnerLayout>
      <InnerLayout>
        <InputLayout
          id="title"
          value={info.title}
          placeholder="해당 이력서 명칭을 작성해주세요"
          onChange={onChangeTitle}
        />
        <MyButton onClick={onClickComplete}>적용</MyButton>
      </InnerLayout>
    </Layout>
  );
};

const { Layout, InnerLayout, InputLayout, MyButton } = style;
