import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import passport from 'passport';

import { router } from './routes/userRoutes';
// import configPassport from './services/passport';
// require('dotenv').config();

const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// connect to db
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

// add middlewares
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cookieSession({ keys: ['secret'] }));
// app.use(router);
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// setup passport
// app.use(passport.initialize());
// configPassport(passport);

app.use('/', router);

app.listen(8000, () => {
  console.log('The application is listening on port 8000');
});
