import express from "express";
import { PostMessage } from "../controllers/messageController.js";
import { GetMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/", GetMessage);
router.post("/post", PostMessage);

export default router;
