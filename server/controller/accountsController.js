import jwt from 'jsonwebtoken';
import {} from 'express-async-errors';
import { config } from '../config.js';
import * as usersTable from '../data/users.js';

// 회원가입
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
  res.status(201);
}

// 로그인
export async function login(req, res) {
  const { email, pwd } = req.body;
  const user = await usersTable.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  const isValidPassword = pwd === user.pwd;
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, email });
}

// 로그인 토큰 생성
function createJwtToken(id) {
  return jwt.sign(
    { id }, //
    config.jwt.secretKey, //
    {
      expiresIn: config.jwt.expiresInSec,
    }
  );
}
