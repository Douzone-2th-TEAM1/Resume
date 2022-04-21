import styled from 'styled-components';
import theme from 'styles/mediaQuery';

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  ${({ theme }) => theme.flexSet('space-evenly', '', 'column')};
`;

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('flex-evenly', 'center')};
  width: 100%;
  height: ${(props) => props.ht};
`;
const Title = styled.label`
  font-weight: bold;
  font-size: 25px;
`;

const Layout2 = styled.div`
  display: grid;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(3, 1fr);
  height: 45%;
`;

const SubTitle = styled.h6`
  padding: 10px 10px 0px 10px;
  font-weight: 400;
  font-size: 11px;
`;

const Box = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 50%);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  min-height: 100px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  border-radius: 5px;
  padding: 15px;
`;

const InnerBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexSet('space-evenly')};
  /* width: ${(props) => props.wd}; */
  height: 100%;
`;
const LabelTitle = styled.label`
  width: fit-content;
  padding-right: 10px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`;

const LabelInput = styled.input`
  width: ${(props) => props.wd};
  border: 1px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  border-radius: 5px;
  padding: 10px;

  &:disabled {
    background-color: #cdcdcd;
  }
`;

const MyButton = styled.button`
  cursor: pointer;
  width: 40%;
  height: auto;
  color: ${({ theme }) => theme.colorSet.SECONDARY};
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  background-color: ${(props) =>
    props.flag ? props.theme.colorSet.PRIMARY : props.theme.colorSet.PRIMARY_DISABLED.DEFAULT};

  &:hover {
    background-color: ${(props) =>
      props.flag ? '#536162' : props.theme.colorSet.PRIMARY_DISABLED.OPACITY_70};
  }
`;
export const style = {
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
};
