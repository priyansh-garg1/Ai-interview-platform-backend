import { Router } from 'express';
import { generateAIResponse } from '../controllers/aiController.js';
import { getInterviewFeedback } from '../controllers/aiController.js';

const router = Router();

router.post('/generate', generateAIResponse);
router.post('/feedback', getInterviewFeedback);

export default router;