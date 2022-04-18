import express from 'express';
import {} from 'express-async-errors';
import * as usersController from '../controller/usersControlloer.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

// 회원 정보 조회
router.post('/', isAuth, usersController.findUser);

// 회원 정보 수정
router.post('/edit', isAuth, usersController.updateUser);

// 회원 탈퇴
router.post('/delete', isAuth, usersController.deleteUser);

export default router;
