import compression from 'compression';
import dotenv from 'dotenv';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();
const port = process.env.PORT || 8000;

dotenv.config();
import connectDB from './config/db';
import router from './routes/user/userRoute';
import { errorHandler, notFound } from './middleswares/errorMiddleware';

connectDB();

console.log(process.env.PORT);

// add middlewares
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Successfully running',
  });
});

app.use('/api', router);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
});
