import { Company } from "../models/company.model.js"; // ✅ fixed import

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false,
            });
        }

        let existingCompany = await Company.findOne({ name: companyName }); // ✅ renamed to avoid conflict
        if (existingCompany) {
            return res.status(400).json({
                message: "You can't register the same company twice",
                success: false,
            });
        }

        const newCompany = await Company.create({
            name: companyName,
            userId: req.id,
        });

        return res.status(201).json({
            message: "Company registered successfully",
            company: newCompany,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

export const getCompany = async (req, res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({ userId }); // ✅ fixed spelling

        if (!companies || companies.length === 0) {
            return res.status(404).json({
                message: "Companies not found",
                success: false,
            });
        }

        return res.status(200).json({
             companies, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId); // ✅ fixed

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }

        return res.status(200).json({
            company,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const file = req.file;

        const updateData = { name, description, website, location };

        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true }); // ✅ fixed typo

        if (!updatedCompany) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Company information updated successfully",
            company: updatedCompany,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};
