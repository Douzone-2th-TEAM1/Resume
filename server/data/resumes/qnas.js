import SQ from 'sequelize';
import { sequelize } from '../../connections/dbConnection.js';
import { Resumes } from '../resumes.js';
const DataTypes = SQ.DataTypes;

export const QnAs = sequelize.define(
  'qna',
  {
    quest: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING(1000),
    },
  },
  { timestamps: false }
);
QnAs.belongsTo(Resumes, {
  foreignKey: 'r_id',
});
