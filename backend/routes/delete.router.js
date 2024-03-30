import express from "express";
import { deleteData } from "../controllers/delete.controller.js";

const router = express.Router();

router.delete("/delete/:id", deleteData);

export default router;
