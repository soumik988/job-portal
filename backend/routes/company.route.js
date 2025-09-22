import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js"; // ✅ Fixed typo: isAuthenicated ➝ isAuthenticated
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router(); // ✅ Use same name everywhere

// Define routes properly
router.post("/register",isAuthenticated, registerCompany);
router.get("/get", isAuthenticated,getCompany);
router.get("/get/:id",isAuthenticated,getCompanyById)
router.put("/update/:id", isAuthenticated, updateCompany);

export default router;
