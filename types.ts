export interface MockupItem {
  id: string;
  title: string;
  category: 'facade' | 'print' | 'digital' | 'signage';
  description: string;
  imageUrl?: string; 
}

export enum GeminiModel {
  TEXT = 'gemini-2.5-flash',
  IMAGE = 'gemini-2.5-flash-image',
}

export interface GeneratedContent {
  type: 'text' | 'image';
  content: string;
}
