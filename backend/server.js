import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Connection } from './Connection.js';
import authRoutes from './routes/authRoutes.js';
import carRoutes from './routes/carRoutes.js';

dotenv.config();

const app = express();

// Allow all origins for now (adjust as needed)
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));

app.use(express.json());

// Define API routes
app.use('/api/auth', authRoutes);
app.use('/api/car', carRoutes);

// Test route
app.get('/', (req, res) => {
    res.send("Server is ready");
});

// Ensure the database is connected before handling requests
await Connection();

// Export the app for Vercel serverless functions
export default app;
