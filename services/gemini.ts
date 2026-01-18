
import { GoogleGenAI } from "@google/genai";
import { WEDDING_DATE, COUPLE_NAMES, VENUE_DETAILS, FAQS } from '../constants';

// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getWeddingAssistantResponse = async (userMessage: string) => {
    // Instantiate inside the function to ensure process.env.API_KEY is available 
  // and to follow the rule of creating a new instance before making an API call.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const systemInstruction = `
    You are a friendly and elegant Wedding Concierge for ${COUPLE_NAMES.full}'s wedding.
    The wedding is on ${WEDDING_DATE.toLocaleDateString()} at ${VENUE_DETAILS.name}.
    Location: ${VENUE_DETAILS.address}.
    
    Known FAQs:
    ${FAQS.map(f => `Q: ${f.question} A: ${f.answer}`).join('\n')}
    
    Instructions:
    - Keep answers concise, helpful, and sophisticated.
    - If you don't know the answer, politely suggest they contact the couple directly.
    - Use the provided context for specific details.
    - If someone asks for directions, mention: ${VENUE_DETAILS.directions}.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having a little trouble connecting. Please try again or check the FAQ section below!";
  }
};
