import bcrypt from "bcryptjs";
import { User } from "../models/users.model.js";
import jwt from "jsonwebtoken";

// REGISTER CONTROLLER
export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false,
            });
        }

        const image = req.file?.filename; // optional file handling

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email",
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            fullname: name, // fixed mismatch (was fullname)
            email,
            password: hashedPassword,
            role,
            image,
        });

        res.status(201).json({
            message: "User registered successfully",
            user,
            success: true,
        });
    } catch (error) {
        console.error("Error in Register:", error);
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

// LOGIN CONTROLLER
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // ADMIN LOGIN
        if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const token = jwt.sign(
                { email: process.env.ADMIN_EMAIL, role: "admin" },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "1d" }
            );
            res.cookie("token", token, { httpOnly: true });
            return res.json({
                success: true,
                message: "Admin login successfully",
                user: { email: process.env.ADMIN_EMAIL, role: "admin" },
            });
        }

        // NORMAL USER LOGIN
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist",
                success: false,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials",
                success: false,
            });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, { httpOnly: true });

        return res.status(200).json({
            message: "User login successfully",
            success: true,
            user,
        });
    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// LOGOUT CONTROLLER
export const logout = async (req, res) => {
    res.clearCookie("token");
    return res.json({
        success: true,
        message: "Logout successfully",
    });
};

// UPDATE PROFILE CONTROLLER
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;

        const file = req.file;
        // cloudinary ayega idhar



        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",").map((skill) => skill.trim());
        }

        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        // updating data
        if (fullname) user.fullname = fullname
        if (email) user.email = email
        if (phoneNumber) user.phoneNumber = phoneNumber
        if (bio) user.profile.bio = bio
        if (skills) user.profile.skills = skillsArray

        // resume comes later here...



        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "Profile updated successfully.",
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}