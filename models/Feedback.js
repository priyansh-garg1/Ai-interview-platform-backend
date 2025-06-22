import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    interviewId: {
        type: String,
        required: true,
        unique: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    recommend: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('Feedback', feedbackSchema);