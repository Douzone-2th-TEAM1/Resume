import jwt from 'jsonwebtoken';
import {} from 'express-async-errors';
import { config } from '../config.js';
import * as usersTable from '../data/users.js';

const AUTH_ERROR = { message: 'Authentication Error' };

export const isAuth = async (req, res, next) => {
  const authHeader = req.get('Authorization'); // 헤더에 Authorization 으로 보내줘야 한다.
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    // Authorization은 'Bearer '로 시작해야 한다.
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(' ')[1]; // Bearer 뒤의 내용이 auth이기 때문
  jwt.verify(token, config.jwt.secretKey, async (error, decoded) => {
    if (error) {
      return res.status(401).json(AUTH_ERROR);
    }
    const user = await usersTable.findById(decoded.id); // encode를 user의 id로 했기 때문
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }
    req.email = user.email;
    next();
  });
};
