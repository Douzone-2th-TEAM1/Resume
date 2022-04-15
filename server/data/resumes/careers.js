import SQ from 'sequelize';
import { sequelize } from '../../db/dbConnection.js';
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
