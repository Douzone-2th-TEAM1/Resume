import SQ from 'sequelize';
import { sequelize } from '../db/dbConnection.js';
import { Users } from '../data/users.js';
const DataTypes = SQ.DataTypes;

export const Temp = sequelize.define(
  'temp',
  {
    temp_data: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);
Temp.belongsTo(Users, {
  foreignKey: 'u_id',
});
