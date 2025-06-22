import OpenAI from 'openai';
import { FEEDBACK_PROMPT, QUESTIONS_PROMPT } from '../constants/aiConstants.js';

export const generateAIResponse = async (req, res) => {
  const { jobPosition, jobDescription, type, duration } = req.body;

  const FINAL_PROMPT = QUESTIONS_PROMPT.replace("{{job Title}}", jobPosition)
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{type}}", type)
    .replace("{{duration}}", duration);

  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free",
      messages: [
        {
          role: "user",
          content: FINAL_PROMPT,
        },
      ],
    });
    console.log(completion.choices[0].message);

    return res.json(completion.choices[0].message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export const getInterviewFeedback = async (req, res) => {
    const { conversation } = req.body;
    console.log(conversation);
    const FINAL_PROMPT = FEEDBACK_PROMPT.replace("{{conversation}}", JSON.stringify(conversation));
  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free",
      messages: [
        {
          role: "user",
          content: FINAL_PROMPT,
        },
      ],
    });
    console.log(completion.choices[0].message.content);

    return res.json(completion.choices[0].message.content);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}