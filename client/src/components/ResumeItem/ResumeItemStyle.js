import styled from 'styled-components';

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colorSet.PRIMARY};
`;

const TextLayout = styled.div`
  cursor: pointer;
  text-align: left;
  min-width: 50%;
`;

const DateLayout = styled.div`
  min-width: 0%;
`;
export const style = { Layout, TextLayout, DateLayout };
