import { Router } from "express";
import { createPlant } from "../controllers/plantsController";

const router = Router();

router.post("/", createPlant);

export default router;
