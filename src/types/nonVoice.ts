export interface TypingParagraph {
  id: string;
  title: string;
  text: string;
  category: string;
}

export interface FillBlankQuestion {
  id: string;
  sentenceWithBlank: string; // "We appreciate your patience while our technical team ______ the server issue."
  correctAnswer: string;     // e.g. "investigates"
  acceptedAnswers: string[]; // e.g. ["investigates", "resolves", "examines"]
  category: 'grammar' | 'tenses' | 'articles' | 'prepositions' | 'vocabulary' | 'workplace' | 'expressions';
  explanation: string;
}

export interface DictationSentence {
  id: string;
  sentence: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ReconstructionStory {
  id: string;
  title: string;
  category: string;
  text: string;
  keyPoints: string[];
}

export interface EmailScenario {
  id: string;
  title: string;
  category: string;
  customerName: string;
  situation: string;
  instructions: string[];
  keyElements: string[];
}

export interface NonVoiceSectionResult {
  sectionId: 'A' | 'B' | 'C' | 'D' | 'E';
  name: string;
  score: number; // 0 to 20
  maxScore: 20;
  details: any;
}

export interface NonVoiceAttemptResult {
  id: string;
  candidateName: string;
  date: string;
  totalScore: number; // 0 to 100
  passed: boolean;    // >= 60
  timeTaken: number;  // seconds
  sectionScores: {
    A: number; // Typing
    B: number; // Fill in the blanks
    C: number; // Dictation
    D: number; // Story reconstruction
    E: number; // Email writing
  };
  sectionResults: NonVoiceSectionResult[];
}
