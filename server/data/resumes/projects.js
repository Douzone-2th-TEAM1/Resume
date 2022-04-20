import SQ from 'sequelize';
import { sequelize } from '../../connections/dbConnection.js';
import { Resumes } from '../resumes.js';
const DataTypes = SQ.DataTypes;

export const Projects = sequelize.define(
  'project',
  {
    prjName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    prjStartDate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    prjEndDate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    prjCntns: {
      type: DataTypes.STRING(1000),
    },
  },
  { timestamps: false, tableName: 'projects' }
);
Projects.belongsTo(Resumes, {
  foreignKey: 'r_id',
  onDelete: 'cascade',
});

export async function findAllById(id) {
  return Projects.findAll({
    where: { r_id: id },
  });
}

export async function createProject(project) {
  return Projects.create(project).then((data) => data.dataValues);
}
