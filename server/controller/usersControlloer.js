import {} from 'express-async-errors';
import { config } from '../config.js';
import * as usersTable from '../data/users.js';

// 회원 정보 조회
export async function findUser(req, res) {
  const id = req.id;
  const user = await usersTable.findById(id);
  if (!user) {
    return res.status(401).json({ message: 'Invalid user' });
  }
  res.status(200).json({ resCode: 0, user: user });
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
  res.status(200).json({ resCode: 0 }); // 204는 return 없을 때
}

// 회원 탈퇴
export async function deleteUser(req, res) {
  const id = req.id;
  const deletedRow = await usersTable.deleteUser(id); // 얜 리턴 없나? - 일단 임시
  res.status(200).json({ resCode: 0 }); // 204는 return 없을 때
}

// 임시 저장 (완료)
export async function tempSave(req, res) {
  const id = req.id;
  const temp_data = JSON.stringify(req.body);
  const found = await tempsTable.findByuId(id);
  if (found) {
    const temp = await tempsTable.deleteTemp(id);
  }
  const temp = await tempsTable.createTemp({
    u_id: id,
    temp_data,
  });

  res.status(201).json({ resCode: 0 });
}

// 임시 저장 불러오기
export async function tempLoad(req, res) {
  const id = req.id;
  const { temp_data } = await tempsTable.findByuId(id);
  const temp_data_JSON = temp_data.replaceAll(/'/g, "");
  const data = JSON.parse(temp_data_JSON);

  // JSON으로 만든 temp_data 전송 추가해줘야함
  res.status(201).json({ resCode: 0 });
}
