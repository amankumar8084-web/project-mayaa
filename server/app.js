import express from 'express';
import path from 'path';
import env from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';
env.config();
connectDB();

const app = express();

<<<<<<< HEAD




app.use(cors());
app.use(express.json());

//Routes
app.get('/home',(req,res)=>{
    res.send("server is running");
})
=======
//Middleware
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../client/dist")));
>>>>>>> 2b10083f02f7945023b25dffc3c4633cd049f4a3

//Routes
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})







