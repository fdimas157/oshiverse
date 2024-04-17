import express from "express";
import { addUser } from "../controllers/user-controller.js";

const router = express.Router();
router.get("/add-new-user", addUser);

export default router;
