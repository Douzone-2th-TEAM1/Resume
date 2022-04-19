import {} from 'express-async-errors';
import { config } from '../config.js';
import * as resumesTable from '../data/resumes.js';

// 이력서 저장
export async function saveResume(req, res) {
  const { id, title, photo, department, portfolio, template } = req.body;
  const date = new Date().getTime();

  const resume = await resumesTable.createResume({
    // 유저 아이디 체크 필요, 본인 아이디인지, - me 필요? - 아니라면 에러 처리
    u_id: id,
    title: title,
    photo: photo,
    department: department,
    portfolio: portfolio,
    template: template,
    created_date: date,
  });
  res.status(200).json(resume);
}

// 이력서 조회
export async function findAllResumes(req, res) {
  const { id } = req.body;
  const resumes = await resumesTable.findAllById(id); // json으로 묶기
  // 그 다음에 r_id 활용해서 나머지 테이블로 부터 전부다 가져오기
  res.status(200).json(resumes);
}
