import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  /* background: wheat; */
`;

const InnerLayout = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 30%;
`;

const InnerLayout2 = styled.div`
  display: grid;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(3, 1fr);
  height: 70%;
`;

const Title = styled.label`
  width: 25%;
  font-weight: bold;
  font-size: 25px;
`;

const InputLayout = styled.input`
  width: 75%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colorSet.BORDER};
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  font-size: 15px;

  &:disabled {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.OPACITY_70};
  }
`;

export const style = { Layout, InnerLayout, Title, InputLayout, InnerLayout2 };
