import SQ from 'sequelize';
import { sequelize } from '../../connections/dbConnection.js';
import { Resumes } from '../resumes.js';
const DataTypes = SQ.DataTypes;

export const Certifications = sequelize.define(
  'certification',
  {
    certName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    certScore: {
      type: DataTypes.STRING(45),
    },
    certDate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: false }
);
Certifications.belongsTo(Resumes, {
  foreignKey: 'r_id',
});
