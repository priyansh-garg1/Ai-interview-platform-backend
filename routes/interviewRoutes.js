import express from 'express';
import { saveInterviewData, getInterviewById, saveFeedback } from '../controllers/interviewController.js'; 

const router = express.Router();

router.post('/save', saveInterviewData);
router.get('/get/:interviewId', getInterviewById);
router.post('/feedback', saveFeedback); 

export default router;