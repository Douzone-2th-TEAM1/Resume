import React from 'react';
import { style } from './ResumeItemStyle';
import { AiFillFileText, AiTwotoneDelete } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeResume } from 'myRedux/actions/CommuicationAction';

export const ResumeItem = ({ data }) => {
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
        return;
    }
  };
  const onClickDelete = () => {
    // console.log('tt');
    dispatch(removeResume(data.r_id));
  };
  return (
    <Layout>
      <AiFillFileText size={20} />
      <TextLayout onClick={onClickResume}>{data.title}</TextLayout>
      <AiTwotoneDelete size={20} onClick={onClickDelete} style={{ cursor: 'pointer' }} />
      <DateLayout>{data.createdDate}</DateLayout>
    </Layout>
  );
};

const { Layout, TextLayout, DateLayout } = style;
