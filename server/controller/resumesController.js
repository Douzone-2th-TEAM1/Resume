import {} from 'express-async-errors';
import { config } from '../config.js';
import * as resumesTable from '../data/resumes.js';
import * as awardsTable from '../data/resumes/awards.js';
import * as careersTable from '../data/resumes/careers.js';
import * as certificationsTable from '../data/resumes/certifications.js';
import * as educationsTable from '../data/resumes/educations.js';
import * as projectsTable from '../data/resumes/projects.js';
import * as qnasTable from '../data/resumes/qnas.js';
import * as techsTable from '../data/resumes/techs.js';
import * as usersTable from '../data/users.js';

// 이력서 저장
export async function saveResume(req, res) {
  const id = req.id;
  const {
    title,
    photo,
    department,
    portfolio,
    template,
    awards,
    careers,
    certifications,
    educations,
    projects,
    qnas,
    techs,
  } = req.body;

  // 콘솔
  if (!photo) {
    res.json({ resCode: 1, msg: '사진이 경로가 없습니다.' });
  }

  const r_id = await resumesTable.createResume({
    u_id: id,
    title,
    photo,
    department,
    portfolio,
    template,
    createdDate: Date.now(),
  });

  awards &&
    (await awards.map((item) => {
      const award = Object.assign({ r_id: r_id }, item);
      awardsTable.createAward(award);
    }));
  careers &&
    (await careers.map((item) => {
      const career = Object.assign({ r_id: r_id }, item);
      careersTable.createCareer(career);
    }));
  certifications &&
    (await certifications.map((item) => {
      const certification = Object.assign({ r_id: r_id }, item);
      certificationsTable.createCertification(certification);
    }));
  educations &&
    (await educations.map((item) => {
      const education = Object.assign({ r_id: r_id }, item);
      educationsTable.createEducation(education);
    }));
  projects &&
    (await projects.map((item) => {
      const project = Object.assign({ r_id: r_id }, item);
      projectsTable.createProject(project);
    }));
  qnas &&
    (await qnas.map((item) => {
      const qna = Object.assign({ r_id: r_id }, item);
      qnasTable.createQnA(qna);
    }));
  techs &&
    (await techs.map((item) => {
      const tech = Object.assign({ r_id: r_id }, { techName: item });
      techsTable.createTech(tech);
    }));

  res.json({ resCode: 0, r_id: r_id });
}

// 이력서 조회
export async function findResume(req, res) {
  const id = req.id;
  const { name, phone } = await usersTable.findById(id);
  const allRId = await resumesTable.findRId(id);
  const resumesAll = [];

  for (let i = 0; i < allRId.length; i++) {
    let r_id = allRId[i].r_id;
    if (r_id) {
      const { title, photo, department, portfolio, template, createdDate } =
        await resumesTable.findById(r_id);
      const awards = await awardsTable.findAllById(r_id);
      const careers = await careersTable.findAllById(r_id);
      const certifications = await certificationsTable.findAllById(r_id);
      const educations = await educationsTable.findAllById(r_id);
      const projects = await projectsTable.findAllById(r_id);
      const qnas = await qnasTable.findAllById(r_id);
      const techs = await techsTable.findAllById(r_id);
      const techsArr = [];
      techs && techs.map((item) => techsArr.push(item.techName));

      const resume = {
        r_id,
        name,
        phone,
        title,
        photo,
        department,
        portfolio,
        template,
        createdDate,
        awards,
        careers,
        certifications,
        educations,
        projects,
        qnas,
        techs: techsArr,
      };
      resumesAll.push(resume);
    }
  }
  res.json({ resCode: 0, resumes: resumesAll });
}

// 이력서 삭제
export async function deleteResume(req, res) {
  const { r_id } = req.body;
  if (!r_id) {
    return res.json({ resCode: 1 });
  }
  await resumesTable.deleteResume(r_id);
  res.json({ resCode: 0 }); // 204는 return 없을 때
}
