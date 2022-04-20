import SQ from 'sequelize';
import { sequelize } from '../connections/dbConnection.js';
import { Users } from './users.js';
const DataTypes = SQ.DataTypes;

export const Temps = sequelize.define(
  'temp',
  {
    temp_data: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false, tableName: 'temps' }
);
Temps.belongsTo(Users, {
  foreignKey: 'u_id',
});

export async function findByuId(u_id) {
  return Temps.findOne({
    where: { u_id: u_id },
  });
}

// C UD 추가
export async function createTemp(temp) {
  return Temps.create(temp).then((data) => data.dataValues.u_id);
}

export async function updateTemp(temp) {
  const { id, temp_data, u_id } = temp;
  return Temps.update({ temp_data, u_id }, { where: { id }, returning: true });
}

export async function deleteTemp(u_id) {
  return Temps.destroy({ where: { u_id } });
}
