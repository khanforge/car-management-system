import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Connection } from './Connection.js'
import authRoutes from './routes/authRoutes.js'
import carRoutes from './routes/carRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/car', carRoutes)
app.get('/', (req, res) => {
    res.send("Server is ready");
})

await Connection();

app.listen(process.env.PORT, async () => {
    console.log("server started at http://localhost:8080");
})