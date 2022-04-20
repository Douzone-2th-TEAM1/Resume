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
router.post('/resign', isAuth, usersController.deleteUser);

// 임시 저장
router.post("/tempSave", isAuth, usersController.tempSave);

// 임시 저장 불러오기
router.post("/tempLoad", isAuth, usersController.tempLoad);

export default router;
