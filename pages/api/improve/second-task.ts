import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

const PROMPT = `Based on the provided question and answer for Task 2 in the IELTS Writing exam, write an enhanced answer in IELTS style. Do not include any additional information or instructions; simply write the enhanced answer. Ensure the enhanced answer is between 270 to 280 words in length.

  After giving the answer, provide the table in markdown format with the following information:
  - The first column will be the original sentence.
  - The second column will be the enhanced sentence.
  - The third column will be the reason for the enhancement.
  `;
const MODEL = 'gemini-1.5-flash';
const GEMINI_API_KEY = 'AIzaSyALsrFed4nvW7DE7foZw_PcfRJbloqjSPY' as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { question, answer } = req.body;

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: MODEL });

    const prompt = `
      ${PROMPT}
      Question: ${question}
      Answer: ${answer}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    return res.status(200).json({ data: text });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
