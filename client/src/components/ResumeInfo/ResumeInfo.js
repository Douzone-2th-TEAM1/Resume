import React from 'react';
import { style } from './ResumeInfoStyle';
export const ResumeInfo = ({ title, flag, datas }) => {
  return (
    <Layout flag={flag}>
      <MenuTitle>{title}</MenuTitle>
    </Layout>
  );
};

const { Layout, MenuTitle } = style;
