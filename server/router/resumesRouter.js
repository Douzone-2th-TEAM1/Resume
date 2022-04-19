import express from 'express';
import {} from 'express-async-errors';
import * as resumesController from '../controller/resumesController.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

// 이력서 저장
router.post('/save', isAuth, resumesController.saveResume);

// 이력서 조회
router.post('/', isAuth, resumesController.findAllResumes);

export default router;
