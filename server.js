import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors';
import bodyParser from "body-parser"; 
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World...!");
})

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log(`Server is listening on Port no.${PORT}`);

})