import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";

import { connectDB } from "./utils/db.js";
import authRoutes from "./routes/auth.route.js";

const app=express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
  console.log("Server is running on port : "+PORT);
  connectDB();
})