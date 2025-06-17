import { Router } from 'express';
import { generateAIResponse } from '../controllers/aiController.js';

const router = Router();

router.post('/generate', generateAIResponse);

export default router;