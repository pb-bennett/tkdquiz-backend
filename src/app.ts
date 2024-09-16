import express, { Application } from 'express';
import dotenv from 'dotenv';
import exampleRoutes from './routes/exampleRoutes';
import { connectDB } from './utils/db';

dotenv.config();

const app: Application = express();
app.use(express.json());

// Routes
app.use('/api/example', exampleRoutes);

connectDB();

export default app;
