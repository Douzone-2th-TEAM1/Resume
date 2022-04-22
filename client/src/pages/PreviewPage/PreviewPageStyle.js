import styled from 'styled-components';

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('space-evenly', 'center', 'column')};
  position: absolute;
  padding: 30px 50px;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
  width: 750px;
  height: 885px;
  background-color: white;
`;

const InnerLayout = styled.div`
  ${({ theme }) => theme.flexSet('space-evenly')};
  width: 100%;
  h1 {
    font-size: 25px;
    font-weight: bold;
  }
`;

const InputLayout = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
`;

const MyButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 15px 30px;
  color: white;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colorSet.PRIMARY};
  &:hover {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
  }
`;

export const style = {
  Layout,
  InnerLayout,
  InputLayout,
  MyButton,
};
