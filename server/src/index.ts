import express, { Request, Response } from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import { dbConnect } from './utils/dbConnect';
import userRouter from './routes/user.router';
import cookieParser from 'cookie-parser';
import companyRouter from './routes/company.router';

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true
}
app.use(cors(corsOption));
config();


app.use('/user', userRouter);
app.use('/company', companyRouter);

dbConnect();


 const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

})