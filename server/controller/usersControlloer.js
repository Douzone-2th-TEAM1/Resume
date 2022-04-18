import jwt from 'jsonwebtoken';
import {} from 'express-async-errors';
import { config } from '../config.js';
import * as usersTable from '../data/users.js';

//
export async function userInfo(req, res) {
  const { email } = req.body;
  const found = await usersTable.findByEmail(email);
  const user = {
    email: found.email,
    name: found.name,
    phone: found.phone,
  };
  res.status(200).json(user);
}
