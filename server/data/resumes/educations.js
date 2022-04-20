import SQ from 'sequelize';
import { sequelize } from '../../connections/dbConnection.js';
import { Resumes } from '../resumes.js';
const DataTypes = SQ.DataTypes;

export const Educations = sequelize.define(
  'education',
  {
    eduName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    eduStartDate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    eduEndDate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    eduCntns: {
      type: DataTypes.STRING(1000),
    },
  },
  { timestamps: false }
);
Educations.belongsTo(Resumes, {
  foreignKey: 'r_id',
});

export async function findAllById(id) {
  return Educations.findAll({
    where: { r_id: id },
  });
}

export async function createEducation(education) {
  return Educations.create(education).then((data) => data.dataValues);
}

export async function deleteEducation(id) {
  return Educations.destroy({ where: { rid: id } });
}
