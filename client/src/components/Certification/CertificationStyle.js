import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  ${({ theme }) => theme.flexSet('space-evenly', '', 'column')};
`;

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('flex-evenly', 'flex-start')};
  width: 100%;
  height: ${(props) => props.ht};
`;
const Title = styled.label`
  font-weight: bold;
  font-size: 25px;
`;

const SubTitle = styled.h6`
  padding: 10px 10px 0px 10px;
  font-weight: 400;
  font-size: 11px;
`;

const Box = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100%);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  min-height: 100px;
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
  width: 40%;
  font-weight: 600;
  font-size: 15px;
`;

const LabelInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  border-radius: 5px;
  padding: 10px;
`;
export const style = { Wrapper, Layout, Title, SubTitle, Box, InnerBox, LabelTitle, LabelInput };
