import express from 'express';
import env from 'dotenv';
env.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send("server is running");
})