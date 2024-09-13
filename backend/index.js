import express from "express";
import dotenv from 'dotenv'
import connectDB from "./db/MongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Auth System server ready.")
})


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    connectDB();
})