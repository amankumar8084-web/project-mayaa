import express from 'express';
import env from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';
env.config();
connectDB();
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/',(req,res)=>{
    res.send("server is running");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})



