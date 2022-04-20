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
  { timestamps: false, tableName: 'certifications' }
);
Certifications.belongsTo(Resumes, {
  foreignKey: 'r_id',
  onDelete: 'cascade',
});

export async function findAllById(id) {
  return Certifications.findAll({
    where: { r_id: id },
  });
}

export async function createCertification(certification) {
  return Certifications.create(certification).then((data) => data.dataValues);
}
