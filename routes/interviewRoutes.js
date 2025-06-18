import express from 'express';
import { saveInterviewData, getInterviewById } from '../controllers/interviewController.js';

const router = express.Router();

router.post('/save', saveInterviewData);
router.get('/get/:interviewId', getInterviewById);

export default router;