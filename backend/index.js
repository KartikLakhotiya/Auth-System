import express from "express";
import dotenv from 'dotenv'
import connectDB from "./db/MongoDB.js";
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Auth System server ready.")
})

// middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    connectDB();
})
