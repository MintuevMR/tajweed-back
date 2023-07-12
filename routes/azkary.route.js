import { Router } from "express";
import azkaryController  from "../controllers/azkary.controller.js";

const router = Router();

router.get("/azkary", azkaryController.getAzkary);
router.post("/azkary", azkaryController.createAzkary);

export default router;