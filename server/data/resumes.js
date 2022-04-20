import SQ from 'sequelize';
import { sequelize } from '../connections/dbConnection.js';
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
    createdDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { timestamps: false }
);
Resumes.belongsTo(Users, {
  foreignKey: 'u_id',
});

export async function findAllById(id) {
  return Resumes.findAll({
    where: { u_id: id },
  });
}

export async function findById(id) {
  return Resumes.findOne({
    attributes: [
      'r_id',
      'title',
      'photo',
      'department',
      'portfolio',
      'template',
      'createdDate',
    ],
    where: { r_id: id },
  });
}

export async function createResume(resume) {
  return Resumes.create(resume).then((data) => data.dataValues.r_id);
}

export async function deleteResume(id) {
  return Resumes.destroy({ where: { rid: id } });
}
