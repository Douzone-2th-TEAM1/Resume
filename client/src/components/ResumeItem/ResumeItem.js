import React, { useEffect, useState } from 'react';
import { style } from './ResumeItemStyle';
import { AiFillFileText, AiTwotoneDelete } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeResume } from 'myRedux/actions/CommuicationAction';
import { getTempResumeInfo } from 'myRedux/actions/ResumeActions';

export const ResumeItem = ({ data, title }) => {
  // const [rtitle, setRTitle] = useState('');
  // const [createDate, setCreateDate] = useState('');
  const getInfo = useSelector((state) => state.CommunicationReducer);
  const [info, setInfo] = useState({
    rtitle: '',
    createDate: '',
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const onClickResume = () => {
    // debugger;
    switch (data.template) {
      case 0:
        history.push(`/form1/:${data.r_id}`);
        return;
      case 1:
        history.push(`/form2/:${data.r_id}`);
        return;
      default:
        console.log(getInfo);

        dispatch(getTempResumeInfo());
        return;
    }
  };
  const onClickDelete = () => {
    dispatch(removeResume(data.r_id));
  };
  // useEffect(() => {
  //   onClickDelete();
  // }, [title]);

  useEffect(() => {
    if (data) {
      if (Object.keys(data).includes('title') && Object.keys(data).includes('createdDate')) {
        setInfo({ rtitle: data.title, createDate: data.createdDate });
      } else {
        setInfo({ rtitle: '임시저장', createDate: '' });
      }
    }
  }, [data]);
  return (
    <Layout>
      <AiFillFileText color={title === '저장된 이력서' ? 'black' : 'gray'} size={20} />
      <TextLayout onClick={onClickResume}>{info.rtitle}</TextLayout>
      <IconLayout>
        {title === '저장된 이력서' && (
          <AiTwotoneDelete size={20} onClick={onClickDelete} style={{ cursor: 'pointer' }} />
        )}
      </IconLayout>

      <DateLayout>{info.createDate}</DateLayout>
    </Layout>
  );
};

const { Layout, TextLayout, IconLayout, DateLayout } = style;
