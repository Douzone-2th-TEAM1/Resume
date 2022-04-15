// import jwt from 'jsonwebtoken';
import {} from 'express-async-errors';
import { config } from '../config.js';
import * as usersTable from '../data/users.js';

import * as resumesTable from '../data/resumes.js'; // 테이블 생성 테스트 끝나면 지우기
import * as tempTable from '../data/temp.js'; // 테이블 생성 테스트 끝나면 지우기
import * as wordsTable from '../data/words.js'; // 테이블 생성 테스트 끝나면 지우기

import * as awardsTable from '../data/resumes/awards.js'; // 테이블 생성 테스트 끝나면 지우기
import * as careersTable from '../data/resumes/careers.js'; // 테이블 생성 테스트 끝나면 지우기
import * as certificationsTable from '../data/resumes/certification.js'; // 테이블 생성 테스트 끝나면 지우기
import * as educationsTable from '../data/resumes/educations.js'; // 테이블 생성 테스트 끝나면 지우기
import * as projectsTable from '../data/resumes/projects.js'; // 테이블 생성 테스트 끝나면 지우기
import * as qnasTable from '../data/resumes/qnas.js'; // 테이블 생성 테스트 끝나면 지우기
import * as techsTable from '../data/resumes/techs.js'; // 테이블 생성 테스트 끝나면 지우기

export async function signup(req, res) {
  const { email, pwd, name, phone } = req.body;
  const found = await usersTable.findByEmail(email);
  if (found) {
    return res.status(409).json({ message: `${email} already exists` });
  }

  const userId = await usersTable.createUser({
    email,
    pwd,
    name,
    phone,
  });
  // const token = createJwtToken(userId);
  // res.status(201).json({ token, email });
  res.status(201).json({ userId });
}
