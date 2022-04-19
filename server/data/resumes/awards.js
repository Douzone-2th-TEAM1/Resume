import SQ, { where } from 'sequelize';
import { sequelize } from '../../db/dbConnection.js';
import { Resumes } from '../resumes.js';
const DataTypes = SQ.DataTypes;

export const Awards = sequelize.define(
  'award',
  {
    awardName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    awardDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    awardCntns: {
      type: DataTypes.STRING(1000),
    },
  },
  { timestamps: false }
);
Awards.belongsTo(Resumes, {
  foreignKey: 'r_id',
});
