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
        res.status(201).json({ message: 'Interview data saved successfully!', interviewId: newInterview.interviewId });
    } catch (error) {
        res.status(500).json({ message: 'Error saving interview data', error });
    }
};

export const getInterviewById = async (req, res) => {
    try {
        const { interviewId } = req.params;
        const interview = await Interview.findOne({ interviewId });

        if (!interview) {
            return res.status(404).json({ message: 'Interview not found' });
        }

        res.status(200).json(interview);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching interview data', error });
    }
};