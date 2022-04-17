import SQ from "sequelize";
import { sequelize } from "../db/dbConnection.js";
import { Users } from "../data/users.js";
import { Awards } from "./resumes/awards.js";
import { Careers } from "./resumes/careers.js";
import { Certifications } from "./resumes/certification.js";
import { Educations } from "./resumes/educations.js";
import { Projects } from "./resumes/projects.js";
import { QnAs } from "./resumes/qnas.js";
import { Techs } from "./resumes/techs.js";

const DataTypes = SQ.DataTypes;

export const Resumes = sequelize.define(
  "resume",
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
  foreignKey: "u_id",
});

export async function ResumesAwards() {
  return Resumes.findAll({ include: [Awards] });
}
export async function ResumesCareers() {
  return Resumes.findAll({ include: [Careers] });
}
export async function ResumesCertifications() {
  return Resumes.findAll({ include: [Certifications] });
}
export async function ResumesEducations() {
  return Resumes.findAll({ include: [Educations] });
}
export async function ResumesProjects() {
  return Resumes.findAll({ include: [Projects] });
}
export async function ResumesQnAs() {
  return Resumes.findAll({ include: [QnAs] });
}
export async function ResumesTechs() {
  return Resumes.findAll({ include: [Techs] });
}

// 이렇게 하는거 맞는지 확인좀 부탁드림다
