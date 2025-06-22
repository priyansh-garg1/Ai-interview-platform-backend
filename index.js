import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

import userRoutes from './routes/userRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import interviewRoutes from './routes/interviewRoutes.js';

app.use('/api/users', userRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/interview', interviewRoutes);



app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
