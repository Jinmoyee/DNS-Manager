import express from "express";
import { edit, prevData } from "../controllers/edit.controller.js";

const router = express.Router();

router.put("/edit/:id", edit);
router.get("/prevData/:id", prevData);

export default router;
