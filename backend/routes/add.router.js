import express from "express";
import { add } from "../controllers/add.controller.js";

const router = express.Router();

router.post("/add", add);

export default router;
