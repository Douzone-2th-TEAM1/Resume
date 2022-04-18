import SQ from 'sequelize';
import { sequelize } from '../db/dbConnection.js';
const DataTypes = SQ.DataTypes;

export const Users = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    pwd: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: false }
);

export async function findByEmail(email) {
  return Users.findOne({ where: { email } });
}

export async function findById(id) {
  return Users.findByPk(id);
}

export async function createUser(user) {
  return Users.create(user).then((data) => data.dataValues.id);
}

export async function updateUser(user) {
  const { email, pwd, name, phone } = user;
  return Users.update(
    { pwd, name, phone },
    { where: { email }, returning: true }
  );
}

export async function deleteUser(email) {
  return Users.destroy({ where: { email } });
}
