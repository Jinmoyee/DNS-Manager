import express from "express";
import { data } from "../controllers/data.controller.js";

const router = express.Router();

router.get("/data", data);

export default router;
