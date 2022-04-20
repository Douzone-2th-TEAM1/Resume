import SQ, { where } from 'sequelize';
import { sequelize } from '../../connections/dbConnection.js';
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
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    awardCntns: {
      type: DataTypes.STRING(1000),
    },
  },
  { timestamps: false, tableName: 'awards' }
);
Awards.belongsTo(Resumes, {
  foreignKey: 'r_id',
  onDelete: 'cascade',
});

export async function findAllById(id) {
  return Awards.findAll({
    where: { r_id: id },
  });
}

export async function createAward(award) {
  return Awards.create(award).then((data) => data.dataValues);
}
