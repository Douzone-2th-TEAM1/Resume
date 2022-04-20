import SQ from 'sequelize';
import { sequelize } from '../../connections/dbConnection.js';
import { Resumes } from '../resumes.js';
const DataTypes = SQ.DataTypes;

export const Careers = sequelize.define(
  'career',
  {
    cmpnyName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    workStartDate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    workEndDate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    workCntns: {
      type: DataTypes.STRING(1000),
    },
  },
  { timestamps: false }
);
Careers.belongsTo(Resumes, {
  foreignKey: 'r_id',
});

export async function findAllById(id) {
  return Careers.findAll({
    where: { r_id: id },
  });
}

export async function createCareer(career) {
  return Careers.create(career).then((data) => data.dataValues);
}

export async function deleteCareer(id) {
  return Careers.destroy({ where: { rid: id } });
}
