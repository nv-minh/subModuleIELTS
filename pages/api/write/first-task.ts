import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

const PROMPT = 'Based on the provided question and image for Task 1 in the IELTS Writing exam, write the answer in IELTS style. Do not include any additional information or instructions; simply write the answer. Ensure the answer is between 150 to 160 words in length.';
const MODEL = 'gemini-1.5-flash';
const GEMINI_API_KEY = 'AIzaSyALsrFed4nvW7DE7foZw_PcfRJbloqjSPY' as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { question, answer, image } = req.body;

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    console.log("GEMINI_API_KEY", GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL });

    const prompt = `
      ${PROMPT}
      Question: ${question}
      Answer: ${answer}
    `;

    const imageParts: string[] = [image];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ data: text });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
