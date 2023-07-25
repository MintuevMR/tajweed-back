import { connectToDatabase } from "./config/connectToDatabase.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import usersRouter  from "./routes/users.route.js";
import lessonsRouter  from "./routes/lessons.route.js";
import azkaryRouter from "./routes/azkary.route.js";
import groupsRouter from "./routes/groups.route.js";

export const app = express();


//middleware
app.use('/uploads', express.static("uploads"))
app.use(express.json());
app.use(cors());


//routes
app.use(usersRouter);
app.use(lessonsRouter);
app.use(azkaryRouter);
app.use(groupsRouter);

connectToDatabase();
