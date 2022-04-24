import React, { useEffect, useState } from 'react';
import { TEMPLATE_LIST } from 'utils/constants/templateList';
import { style } from './PreviewPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { storeInfo } from 'myRedux/actions/ResumeActions';
import { storeResume } from 'myRedux/actions/CommuicationAction';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const PreviewPage = ({
  cardRef,
  target,
  onClickClose,
  onClickTemplateClose,
  onClickCloseCard,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const storeDatas = useSelector((state) => state.ResumeReducer);
  const reducer = useSelector((state) => state.AlertReducer);
  const [templatTitle, setTemplateTitle] = useState('');
  const [info, setInfo] = useState(storeDatas.info);

  const onChangeTitle = (e) => {
    setTemplateTitle(e.target.value);
  };
  const onClickComplete = (e) => {
    console.log(e.target.id);
    setInfo({ ...info, template: Number(e.target.id), title: templatTitle });
  };

  useEffect(() => {
    console.log(info);

    if (info.title && info.title.length > 0 && info.template != null) {
      dispatch(storeResume(info));
      onClickClose();
      onClickTemplateClose();
      cardRef.current.scrollTo(0, 0);
      onClickCloseCard();
    }
  }, [info]);

  // useEffect(() => {
  //   console.log(reducer);
  //   onClickClose();
  //   onClickTemplateClose();
  //   onClickCloseCard();
  // }, [reducer]);

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
          id="templatTitle"
          value={templatTitle}
          placeholder="해당 이력서 명칭을 작성해주세요"
          onChange={onChangeTitle}
        />
        <MyButton id={target} onClick={onClickComplete}>
          적용
        </MyButton>
      </InnerLayout>
    </Layout>
  );
};

const { Layout, InnerLayout, InputLayout, MyButton } = style;
