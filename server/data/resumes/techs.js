import SQ from 'sequelize';
import { sequelize } from '../../connections/dbConnection.js';
import { Resumes } from '../resumes.js';
const DataTypes = SQ.DataTypes;

export const Techs = sequelize.define(
  'tech',
  {
    techName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: false }
);
Techs.belongsTo(Resumes, {
  foreignKey: 'r_id',
});

export async function findAllById(id) {
  return Techs.findAll({
    where: { r_id: id },
  });
}

export async function createTech(tech) {
  return Techs.create(tech).then((data) => data.dataValues);
}
