import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { sequelize } from './connections/dbConnection.js';
import { config } from './config.js';
import accountsRouter from './router/accountsRouter.js';
import usersRouter from './router/usersRouter.js';
import resumesRouter from './router/resumesRouter.js';
import tempsRouter from './router/tempsRouter.js';

const app = express();

app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(cors());
app.use(morgan('tiny'));

// 회원가입, 로그인
app.use('/accounts', accountsRouter);

// 회원 정보 수정, 탈퇴
app.use('/users', usersRouter);

// 이력서 관리
app.use('/resumes', resumesRouter);

// 임시 저장, 불러오기
app.use('/temps', tempsRouter);

// 404 에러 처리
app.use((req, res) => {
  res.status(404).json({ resCode: 1 });
});

// 500 에러 처리
app.use((req, res) => {
  res.status(500).json({ resCode: 1 });
});

sequelize.sync().then(() => {
  app.listen(config.host.port);
});
