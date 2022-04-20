import express from 'express';
import {} from 'express-async-errors';
import { isAuth } from '../middleware/auth.js';
import * as resumesController from '../controller/resumesController.js';

const router = express.Router();

// 이력서 저장
router.post('/save', isAuth, resumesController.saveResume);

// 이력서 조회
router.post('/', isAuth, resumesController.findAllResumes);

// 특정 이력서 조회
router.post('/get', isAuth, resumesController.findResume);

export default router;
