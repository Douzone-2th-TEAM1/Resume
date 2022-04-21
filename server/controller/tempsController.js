import {} from 'express-async-errors';
import { config } from '../config.js';
import * as tempsTable from '../data/temps.js';

// 임시 저장
export async function saveTemp(req, res) {
  const id = req.id;
  const temp_data = JSON.stringify(req.body);
  const found = await tempsTable.findByuId(id);
  if (found) {
    await tempsTable.deleteTemp(id);
  }
  const temp = await tempsTable.createTemp({
    u_id: id,
    temp_data,
  });

  res.status(201).json({ resCode: 0 });
}

// 임시 저장 불러오기
export async function loadTemp(req, res) {
  const id = req.id;
  const { temp_data } = await tempsTable.findByuId(id);
  const temp_data_JSON = temp_data.replaceAll(/'/g, '');
  const data = JSON.parse(temp_data_JSON);

  // JSON으로 만든 temp_data 전송 추가해줘야함
  res.status(201).json({ resCode: 0 });
}
