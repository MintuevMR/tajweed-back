import { connectToDatabase } from "./config/connectToDatabase.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bookmarksRouter from "./routes/bookmarks.model.js"
import usersRouter  from "./routes/users.route.js";
import lessonsRouter  from "./routes/lessons.route.js";

export const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use(usersRouter);
app.use(lessonsRouter);
app.use(bookmarksRouter);


connectToDatabase();
