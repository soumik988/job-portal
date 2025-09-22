import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './utils/db.js';
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
    origin: "http://localhost:5173",
    credentials: true
};
app.use(cors(corsOption));

// Routes
app.use("/user", userRoute); // ✅ Fixed here
app.use("/api/v1/company", companyRoute); // ✅ Fixed here
app.use("/api/v1/job", jobRoute); // ✅ Fixed here
app.use("/api/v1/application", applicationRoute); // ✅ Fixed here

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});
