import SQ from 'sequelize';
import { sequelize } from '../connections/dbConnection.js';
const DataTypes = SQ.DataTypes;

export const Words = sequelize.define(
  'word',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    word: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    offset: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: 'words' }
);
