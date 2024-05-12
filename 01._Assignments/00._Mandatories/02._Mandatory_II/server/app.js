import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

import session from "express-session";

console.log(process.env.SESSION_SECRET);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import  userRouter  from "./routers/userRouter.js";
app.use(userRouter);
import resendRouter from "../server/routers/resendRouter.js";
app.use(resendRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));