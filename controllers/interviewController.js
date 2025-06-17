import Interview from '../models/Interview.js';

export const saveInterviewData = async (req, res) => {
    try {
        const { questionList, jobPosition, jobDescription, type, duration, userEmail } = req.body;
        const newInterview = new Interview({
            questionList,
            jobPosition,
            jobDescription,
            type,
            duration,
            userEmail,
        });
        await newInterview.save();
        res.status(201).json({ message: 'Interview data saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving interview data', error });
    }
};