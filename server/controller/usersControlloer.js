import {} from 'express-async-errors';
import { config } from '../config.js';
import * as usersTable from '../data/users.js';

// 회원 정보 조회
export async function findUser(req, res) {
  const id = req.id;
  const user = await usersTable.findById(id);
  if (!user) {
    return res.json({ resCode: 1 });
  }
  res.json({ resCode: 0, user: user });
}

// 회원 정보 수정
export async function updateUser(req, res) {
  const id = req.id;
  const { pwd, name, phone } = req.body;
  const updatedRow = await usersTable.updateUser({
    // update는 몇 개의 row에 영향을 줬는지를 리턴한다.
    id: id,
    pwd,
    name,
    phone,
  });
  res.json({ resCode: 0 }); // 204는 return 없을 때
}

// 회원 탈퇴
export async function deleteUser(req, res) {
  const id = req.id;
  const deletedRow = await usersTable.deleteUser(id); // 얜 리턴 없나? - 일단 임시
  res.json({ resCode: 0 }); // 204는 return 없을 때
}
