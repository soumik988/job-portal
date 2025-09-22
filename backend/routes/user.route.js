import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"; // ✅ Fixed typo: isAuthenicated ➝ isAuthenticated
import { upload } from "../middlewares/multer.js";

const router = express.Router(); // ✅ Use same name everywhere

// Define routes properly
router.post("/signup",upload.single("image"), register);
router.post("/login", login);
router.get("/logout",logout)
router.post("/profile/update", isAuthenticated, updateProfile);

export default router;
