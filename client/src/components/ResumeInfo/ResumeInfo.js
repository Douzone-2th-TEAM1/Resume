import ResumeItem from 'components/ResumeItem';
import React, { useEffect } from 'react';
import { style } from './ResumeInfoStyle';
export const ResumeInfo = ({ title, flag, datas }) => {
  useEffect(() => {
    console.log(datas);
  }, [datas]);
  return (
    <Layout flag={flag}>
      <MenuTitle>{title}</MenuTitle>
      <ItemLayout>
        {datas &&
          datas.map((item, index) => {
            return <ResumeItem key={index} data={item} />;
          })}
      </ItemLayout>
    </Layout>
  );
};

const { Layout, MenuTitle, ItemLayout } = style;
