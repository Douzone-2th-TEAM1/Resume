import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('', '', 'column')};
  width: 100%;
`;

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('flex-evenly', 'center')};
  width: 100%;
  height: ${(props) => props.ht};
  /* background: wheat; */
  border-bottom: 1px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
`;

const Title = styled.label`
  margin: 10px 0px;
  font-weight: bold;
  font-size: 25px;
`;

const SubTitle = styled.h6`
  padding: 10px 10px 0px 10px;
  font-weight: 400;
  font-size: 11px;
`;

const InnerWrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-evenly', 'center', 'column')};
  width: 100%;
  height: 100%;
`;

const InnerLayout = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center')};
  width: 100%;
  height: 30%;
`;

const LabelTitle = styled.h4`
  min-width: 120px;
  padding: 20px;
  font-weight: bold;
  font-size: 18px;
`;

const DateInput = styled.input`
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  &:disabled {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  }
`;
const LabelInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  &:disabled {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  }
`;

const LabelInput2 = styled.textarea`
  resize: none;
  width: 90%;
  height: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  &:disabled {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  }
`;

const AddBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
`;

export const style = {
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
};
