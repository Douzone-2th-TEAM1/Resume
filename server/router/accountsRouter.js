import express from 'express';
import {} from 'express-async-errors';
import * as accountsController from '../controller/accountsController.js';

const router = express.Router();

// 회원가입
router.post('/signup', accountsController.signup);

export default router;
