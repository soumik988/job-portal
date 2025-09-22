import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job', // Usually capitalized to match the Job model name
        required: true,
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'], // ❌ Fixed typo: 'accpected' ➝ 'accepted'
        default: 'pending',
    },
}, { timestamps: true });

// ❌ Fix: "ApplicationSchema" ➝ "applicationSchema"
export const Application = mongoose.model('Application', applicationSchema);
