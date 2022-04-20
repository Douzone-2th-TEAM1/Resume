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

export async function findAllById(id) {
  return QnAs.findAll({
    where: { r_id: id },
  });
}

export async function createQnA(qna) {
  return QnAs.create(qna).then((data) => data.dataValues);
}

export async function deleteQnA(id) {
  return QnAs.destroy({ where: { rid: id } });
}
