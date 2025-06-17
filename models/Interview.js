import mongoose from 'mongoose';

const InterviewSchema = new mongoose.Schema({
    questionList: [
        {
            question: { type: String },
            type: { type: String },
        },
    ],
    jobPosition: {
        type: String,
        default: '',
    },
    jobDescription: {
        type: String,
        default: '',
    },
    type: {
        type: [String], // Changed to array of strings
        default: [],
    },
    duration: {
        type: String, // Changed to String
        default: '0 Min',
    },
    userEmail: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Interview', InterviewSchema);