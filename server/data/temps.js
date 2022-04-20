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
