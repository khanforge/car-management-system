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


Connection()
    .then(() => console.log('✅ Database connected successfully'))
    .catch((err) => console.error('❌ Database connection failed:', err));

// Test route
app.get('/', (req, res) => {
    res.send(`Server is ready at port ${process.env.PORT}`);
});

// Define API routes
app.use('/api/auth', authRoutes);
app.use('/api/car', carRoutes);


process.env.PROD === "local" && app.listen(process.env.PORT, ()=>{
    console.log(`Server is ready at port ${process.env.PORT}`)
})

// Export the app for Vercel serverless functions
export default app;
