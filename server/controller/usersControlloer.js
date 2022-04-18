import jwt from 'jsonwebtoken';
import {} from 'express-async-errors';
import { config } from '../config.js';
import * as usersTable from '../data/users.js';

// 회원 정보 조회
export async function findUser(req, res) {
  const { email } = req.body;
  const found = await usersTable.findByEmail(email);
  const user = {
    email: found.email,
    name: found.name,
    phone: found.phone,
  };
  res.status(200).json(user);
}

// 회원 정보 수정
export async function updateUser(req, res) {
  const { email, pwd, name, phone } = req.body;
  const updatedRow = await usersTable.updateUser({
    // update는 몇 개의 row에 영향을 줬는지를 리턴한다.
    email,
    pwd,
    name,
    phone,
  });
  res.status(200).json({ message: `회원 정보가 수정 되었습니다.` }); // 204는 return 없을 때
}

// 회원 탈퇴
export async function deleteUser(req, res) {
  const { email } = req.body;
  const deletedRow = await usersTable.deleteUser(email); // 얜 리턴 없나? - 일단 임시
  res.status(200).json({ message: `탈퇴 되었습니다.` }); // 204는 return 없을 때
}
