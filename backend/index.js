import express from "express";
import Add from "./routes/add.router.js";
import Edit from "./routes/edit.router.js";
import Data from "./routes/data.router.js";
import Delete from "./routes/delete.router.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/", Add);
app.use("/", Edit);
app.use("/", Data);
app.use("/", Delete);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to mongoDB");
});

app.listen(1000, (req, res) => {
  console.log("Server is running at port 1000");
});
