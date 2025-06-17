import mongoose from 'mongoose';

const InterviewSchema = new mongoose.Schema({
    questionList: {
        type: Array,
        default: [],
    },
    jobPosition: {
        type: String,
        default: '',
    },
    jobDescription: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: '',
    },
    duration: {
        type: Number,
        default: 0,
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