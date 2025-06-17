import express from 'express';
import {saveInterviewData} from '../controllers/interviewController.js';

const router = express.Router();

router.post('/save', saveInterviewData);

export default router;