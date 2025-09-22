
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        // Fix: extract userId from req.body.userId, not req.body object itself
        const { userId } = req.body;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({
                message: "jobId not found",
                success: false
            });
        }

        if (!userId) {
            return res.status(400).json({
                message: "userId not found in body",
                success: false
            });
        }

        // Check if the user has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return res.status(400).json({
                message: "you have already applied for this job",
                success: false
            });
        }

        // Check if the job exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "job not found",
                success: false
            });
        }

        // Create a new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });

        job.applications.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "job applied successfully",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;

        const applications = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: "job",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "company",
                options: { sort: { createdAt: -1 } },
            }
        });

        if (!applications || applications.length === 0) {
            return res.status(404).json({
                message: "application not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "application found",
            success: true,
            applications // return actual data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// Admin check how many students applied for this job
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "applicant"
            }
        });

        if (!job) {
            return res.status(404).json({
                message: "job not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "job found",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// Update status
export const updatestatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;

        if (!status) {
            return res.status(400).json({
                message: "status is required",
                success: false
            });
        }

        // Fix: use variable 'application' instead of undefined 'applicant'
        const application = await Application.findById(applicationId);

        if (!application) {
            return res.status(404).json({
                message: "application not found",
                success: false
            });
        }

        // Update status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "application status updated successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};
