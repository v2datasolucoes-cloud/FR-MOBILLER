import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBrandCopy = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: GeminiModel.TEXT,
      contents: `You are the lead brand strategist for "FR MOBILLER", an ultra-luxury, minimalist, black-and-white aesthetic real estate brand. 
      Tone: Sophisticated, Architectural, Cold but Premium, Essentialist.
      Language: Brazilian Portuguese (pt-BR).
      Task: ${prompt}
      Keep it brief and punchy.`,
    });
    return response.text || "Luxo indefinido.";
  } catch (error) {
    console.error("Copy generation failed:", error);
    return "Experimente a estrutura do luxo.";
  }
};

export const generateConceptImage = async (prompt: string): Promise<string | null> => {
  try {
    // Using gemini-2.5-flash-image for image generation as requested
    // Keeping image prompt in English for better model adherence to visual style keywords
    const response = await ai.models.generateContent({
      model: GeminiModel.IMAGE,
      contents: `Create a photorealistic, ultra-luxury real estate image in black and white.
      Subject: ${prompt}.
      
      Mandatory Aesthetic:
      - Architecture: Contemporary glass-front skyscrapers, modern penthouses, infinity pools, or brutalist mansions.
      - Materials: Glass, steel, marble, polished concrete, dark wood.
      - Lighting: Dramatic, cinematic, high-contrast, "golden hour" or city night lights (monochrome).
      - Vibe: Exclusive, status-oriented, expensive, trusted, editorial fashion style.
      - Composition: Minimalist, lots of negative space, precise geometric alignment.
      
      NO text overlays. Grayscale only.`,
      config: {
        // Nano banana models output images within the parts
      }
    });

    // Parse response for image data
    if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    return null;
  }
};