import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
    applyJob,
    getApplicants,
    getAppliedJobs,
    updatestatus
} from "../controllers/application.controller.js";

const router = express.Router();

// Routes
router.post("/apply/:id", isAuthenticated, applyJob);
router.get("/get", isAuthenticated, getAppliedJobs);
router.get("/:id/applicants", isAuthenticated, getApplicants);
router.put("/status/:id/update", isAuthenticated, updatestatus);

export default router;
