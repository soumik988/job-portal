import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js"; // ✅ Fixed typo: isAuthenicated ➝ isAuthenticated
import { getAdminJobs, getJobById, getJobs, postJob } from "../controllers/job.controller.js";

const router = express.Router(); // ✅ Use same name everywhere

// Define routes properly
router.post("/post",isAuthenticated, postJob);
router.get("/get",isAuthenticated, getJobs);
router.get("/get/:id",isAuthenticated,getJobById)
router.get("/getadminjobs", isAuthenticated, getAdminJobs);

export default router;
