import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { logger } from './utils/logger.js';
import { addLogger } from './middlewares/infoLogger.js';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express'
import { swaggerOptions } from './config/swaggerOptions.config.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb://localhost:27017/c70405`)

app.use(express.json());
app.use(cookieParser());
app.use(addLogger)


const spec = swaggerJSDoc(swaggerOptions)
app.use('/documentation', swaggerUiExpress.serve, swaggerUiExpress.setup(spec))



app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=> logger.info(`Listening on ${PORT}`))
