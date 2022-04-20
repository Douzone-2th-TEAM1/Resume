import SQ from 'sequelize';
import { sequelize } from '../../connections/dbConnection.js';
import { Resumes } from '../resumes.js';
const DataTypes = SQ.DataTypes;

export const Certifications = sequelize.define(
  'certification',
  {
    certiName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    certiScore: {
      type: DataTypes.STRING(45),
    },
    certiDate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: false }
);
Certifications.belongsTo(Resumes, {
  foreignKey: 'r_id',
});

export async function findAllById(id) {
  return Certifications.findAll({
    where: { r_id: id },
  });
}

export async function createCertification(certification) {
  return Certifications.create(certification).then((data) => data.dataValues);
}

export async function deleteCertification(id) {
  return Certifications.destroy({ where: { rid: id } });
}
