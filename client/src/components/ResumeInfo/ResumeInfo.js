import React from 'react';
import { style } from './ResumeInfoStyle';
export const ResumeInfo = ({ title }) => {
  return (
    <Layout>
      <MenuTitle>{title}</MenuTitle>
    </Layout>
  );
};

const { Layout, MenuTitle } = style;
