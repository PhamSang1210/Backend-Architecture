import express from "express";
import accessController from "../../controllers/access.controller.js";
const router = express.Router();

router.post("/register", accessController.register);

export default router;
