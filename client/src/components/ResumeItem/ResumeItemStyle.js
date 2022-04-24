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

const IconLayout = styled.div`
  ${({ theme }) => theme.flexSet()};
  min-width: 20px;
  height: 100%;
`;

const DateLayout = styled.div`
  ${({ theme }) => theme.flexSet()};
  min-width: 50px;
  height: 100%;
`;

export const style = { Layout, TextLayout, IconLayout, DateLayout };
