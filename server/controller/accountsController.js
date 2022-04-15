// import jwt from 'jsonwebtoken';
import {} from 'express-async-errors';
import { config } from '../config.js';
import * as usersTable from '../data/users.js';

export async function signup(req, res) {
  const { email, pwd, name, phone } = req.body;
  const found = await usersTable.findByEmail(email);
  if (found) {
    return res.status(409).json({ message: `${email} already exists` });
  }

  const userId = await usersTable.createUser({
    email,
    pwd,
    name,
    phone,
  });
  // const token = createJwtToken(userId);
  // res.status(201).json({ token, email });
  res.status(201).json({ userId });
}
