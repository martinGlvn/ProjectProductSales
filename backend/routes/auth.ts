import express from "express";
import { generateCode, login } from "../controllers/auth";

// Router autenticacion
const router = express.Router();

router.post("/longin", login);
router.post("/longin/:email/code", generateCode);

export default router;
