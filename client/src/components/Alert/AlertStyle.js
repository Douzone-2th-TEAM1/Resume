import styled from 'styled-components';

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  position: absolute;
  top: 20px;
  right: 0;
  width: 600px;
  height: 60px;
  z-index: 5;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colorSet.SUCCESS.BACK_COLOR};
  color: ${({ status, theme }) =>
    status === 'success' ? theme.colorSet.SUCCESS.COLOR : theme.colorSet.ERROR};
  box-shadow: 0px 4px 4px #00000025;

  h5 {
    margin-left: 5%;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const style = { Layout };
