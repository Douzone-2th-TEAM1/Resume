import {} from 'express-async-errors';
import { config } from '../config.js';
import * as tempsTable from '../data/temps.js';

// 임시 저장
export async function saveTemp(req, res) {
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

  res.json({ resCode: 0 });
}

// 임시 저장 불러오기
export async function loadTemp(req, res) {
  const id = req.id;
  if (!(await tempsTable.findByuId(id))) {
    res.json({ resCode: 1 });
  } else {
    const { temp_data } = await tempsTable.findByuId(id);
    const temp_data_JSON = temp_data.replace("'[", '[').replace("]'", ']');
    const data = JSON.parse(temp_data_JSON);

    res.json({ resCode: 0, temp_data: data });
  }
}
