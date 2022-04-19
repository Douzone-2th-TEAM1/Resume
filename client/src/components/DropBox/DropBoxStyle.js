import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 80%;
`;

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  position: relative;
  width: 80%;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colorSet.BORDER};
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
`;

const DropLayout = styled.div`
  ${({ theme }) => theme.flexSet()};
  position: absolute;
  top: 43px;
  left: 0px;
  width: 100%;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colorSet.BORDER};
  border-radius: 5px;
`;

export const style = { Wrapper, Layout, DropLayout };
