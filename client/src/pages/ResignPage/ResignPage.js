import { withdrawlInfo } from 'myRedux/actions/CommuicationAction';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { regexPwd } from 'utils/regex';
import { style } from './ResignPageStyle';

export const ResignPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pwd, setPwd] = useState('');
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    regexPwd.test(pwd) && setDisable(false);
  }, [pwd]);

  const handleResign = (e) => {
    setPwd(e.target.value);
  };

  const onClickOk = () => {
    dispatch(withdrawlInfo(history));
  };
  const onClickCancel = () => {
    history.push('/main');
  };

  // -----------------------------------------------------------
  return (
    <Container>
      <Background>
        <Triangle1 />
        <Triangle2 />
      </Background>
      <ResignForm>
        <InnerLayout>
          <T1>회원 탈퇴</T1>
          <ResignForm2>
            <T3>사용하고 계신 아이디는 탈퇴할 경우 복구가 불가능합니다.</T3>
            <InputForm>
              <T2>비밀번호</T2>
              <Input1 type="password" id="pwd" value={pwd} onChange={handleResign} />
            </InputForm>
            <br />
            <BtnLayout>
              <Btn1 disabled={disable} onClick={onClickOk}>
                확 인
              </Btn1>

              <Btn2 onClick={onClickCancel}>취 소</Btn2>
            </BtnLayout>
          </ResignForm2>
        </InnerLayout>
      </ResignForm>
    </Container>
  );
};

// -----------------------------------------------------------
const {
  Container,
  Background,
  Triangle1,
  Triangle2,
  ResignForm,
  InnerLayout,
  T1,
  ResignForm2,
  T2,
  T3,
  Input1,
  BtnLayout,
  Btn1,
  Btn2,
  InputForm,
} = style;
