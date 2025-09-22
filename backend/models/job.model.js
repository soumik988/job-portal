import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: [String], // Corrected to array of strings
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    experienceLevel: { // fixed spelling
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: String, // was Number, changed to String
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company", // capitalized (best practice)
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Application"
        }
    ]
}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);
