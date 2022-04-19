import {} from 'express-async-errors';
import { config } from '../config.js';
import * as resumesTable from '../data/resumes.js';

// 이력서 저장
export async function saveResume(req, res) {
  const id = req.id;
  const { title, photo, department, portfolio, template } = req.body;

  const resume = await resumesTable.createResume({
    u_id: id,
    title,
    photo,
    department,
    portfolio,
    template,
    created_date: Date.now(),
  });
  res.status(200).json({ resCode: 0 });
}

// 이력서 조회
export async function findAllResumes(req, res) {
  const id = req.id;
  const resumes = await resumesTable.findAllById(id); // json으로 묶기
  res.status(200).json({ resCode: 0, resumes: resumes });
}
