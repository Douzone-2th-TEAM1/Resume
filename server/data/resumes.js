import SQ from 'sequelize';
import { sequelize } from '../db/dbConnection.js';
import { Users } from './users.js';
//
const DataTypes = SQ.DataTypes;

export const Resumes = sequelize.define(
  'resume',
  {
    r_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    portfolio: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    template: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { timestamps: false }
);
Resumes.belongsTo(Users, {
  foreignKey: 'u_id',
});

export async function findAllById(u_id) {
  return Resumes.findAll({
    where: { u_id: u_id },
  });
}

export async function createResume(resume) {
  return Resumes.create(resume).then((data) => data.dataValues.r_id);
}

// export async function ResumesAwards(r_id) {
//   return Resumes.findAll({
//     include: [{ model: Awards }],
//     where: { r_id: r_id },
//   });
// }
// export async function ResumesCareers(r_id) {
//   return Resumes.findAll({
//     include: [{ model: Careers }],
//     where: { r_id: r_id },
//   });
// }
// export async function ResumesCertifications(r_id) {
//   return Resumes.findAll({
//     include: [{ model: Certifications }],
//     where: { r_id: r_id },
//   });
// }
// export async function ResumesEducations(r_id) {
//   return Resumes.findAll({
//     include: [{ model: Educations }],
//     where: { r_id: r_id },
//   });
// }
// export async function ResumesProjects(r_id) {
//   return Resumes.findAll({
//     include: [{ model: Projects }],
//     where: { r_id: r_id },
//   });
// }
// export async function ResumesQnAs(r_id) {
//   return Resumes.findAll({
//     include: [{ model: QnAs }],
//     where: { r_id: r_id },
//   });
// }
// export async function ResumesTechs(r_id) {
//   return Resumes.findAll({
//     include: [{ model: Techs }],
//     where: { r_id: r_id },
//   });
// }
