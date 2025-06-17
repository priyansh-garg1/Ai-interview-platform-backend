import express from 'express';
const router = express.Router();

import { registerUser, loginUser } from '../controllers/userController.js';

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

export default router;