import styled from 'styled-components';

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('flex-evenly')};
  min-width: 100px;
  width: 175px;
  height: 50px;
  background-color: #92a9bd;
  border-radius: 24px;
  color: ${({ theme }) => theme.colorSet.SECONDARY};
  font-weight: 700;
  font-size: 15px;
  box-shadow: 0px 2px 5px #000025;
  margin: 5px;
  padding: 10px 12px;
`;

const TextLayout = styled.div`
  text-align: center;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
`;

const IconLayout = styled.div`
  cursor: pointer;
  width: auto;
  height: auto;
`;
export const style = { Layout, TextLayout, IconLayout };
