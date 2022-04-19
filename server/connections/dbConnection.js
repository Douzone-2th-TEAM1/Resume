import { config } from '../config.js';
import SQ from 'sequelize';

const { host, port, user, schema, password } = config.db;

export const sequelize = new SQ.Sequelize(schema, user, password, {
  host,
  port,
  dialect: 'mysql',
  logging: false,
});
