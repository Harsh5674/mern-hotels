import express,{Request,Response} from'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/user_routes';
import authRoutes from './routes/auth_routes';
import cookieParser from "cookie-parser";
import path from 'path';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => {
    console.log("Connected to Database!");
})
.catch(() => {
   console.log("Connection to Database failed!");
});

const app=express();
const port = 7000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
     origin: process.env.FRONTEND_URL,
     credentials: true,
}))

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);



app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
});