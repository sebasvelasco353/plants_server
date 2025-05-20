import { Router } from "express";
import { createPlant, getPlants } from "../controllers/plantsController";

const router = Router();

router.post("/", createPlant);
router.get("/", getPlants);


export default router;
