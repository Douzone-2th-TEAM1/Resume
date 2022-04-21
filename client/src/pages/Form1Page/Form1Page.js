import React, { useEffect, useState } from 'react';
import { style } from './Form1PageStyle';

export const Form1Page = () => {
  return (
    <Container>
      <Headline />

      <Profile>
        <Profile_text>
          <Text_name>김더존</Text_name>
          <Text_phone>phone : 010-1234-2022</Text_phone>
          <Text_emaiil>email : douzone@naver.com </Text_emaiil>
        </Profile_text>
        <Profile_img />
      </Profile>
    </Container>
  );
};

// -----------------------------------------------------------
const {
  Container,
  Headline,
  Profile,
  Profile_img,
  Profile_text,
  Text_emaiil,
  Text_name,
  Text_phone,
} = style;
