import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const InterviewSchema = new mongoose.Schema({
    interviewId: {
        type: String,
        default: uuidv4,
        unique: true,
    },
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
        type: [String], 
        default: [],
    },
    duration: {
        type: String,
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