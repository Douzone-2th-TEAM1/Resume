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
      const tech = Object.assign({ r_id: r_id }, item);
      techsTable.createTech(tech);
    }));

  res.status(200).json({ resCode: 0, r_id: r_id });
}

// 이력서 조회
export async function findAllResumes(req, res) {
  const id = req.id;
  const resumes = await resumesTable.findAllById(id); // 사용자의 모든 이력서 리스트
  res.status(200).json({ resCode: 0, resumes: resumes });
}

// 특정 이력서 조회
export async function findResume(req, res) {
  // 위의 이력서 리스트에서 원하는 r_id만 전송 받음
  const id = req.id;
  const { r_id } = req.body;
  const resume = await resumesTable.findById(id);
  const awards = await awardsTable.findAllById(r_id);
  // const careers = await careersTable.findAllById(r_id);
  // const certifications = await certificationsTable.findAllById(r_id);
  // const educations = await educationsTable.findAllById(r_id);
  // const projects = await projectsTable.findAllById(r_id);
  // const qnas = await qnasTable.findAllById(r_id);
  // const techs = await techsTable.findAllById(r_id);

  res.status(200).json({
    // 양식 수정 필요
    resCode: 0,
    resume,
    awards,
  });
}
