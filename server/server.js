import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { sequelize } from './db/dbConnection.js';
import { config } from './config.js';
import accountsRouter from './router/accountsRouter.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/accounts', accountsRouter);

sequelize.sync().then(() => {
  app.listen(config.host.port);
});
