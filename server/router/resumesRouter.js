import express from 'express';
import {} from 'express-async-errors';
import { isAuth } from '../middleware/auth.js';
import * as resumesController from '../controller/resumesController.js';
import * as uploadController from '../controller/uploadController.js';

const router = express.Router();

// 이력서 저장
router.post('/save', isAuth, resumesController.saveResume);

// 이력서 조회
router.post('/load', isAuth, resumesController.findResume);

// 이력서 삭제
router.post('/delete', isAuth, resumesController.deleteResume);

// 사진 업로드
router.post(
  '/upload',
  isAuth,
  uploadController.uploadFileToServer.single('image'),
  uploadController.uploadFileToS3
);

// 사진 로드
router.get('/:key', uploadController.getFileFromS3);

export default router;
