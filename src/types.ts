export type ExamMode = 'full' | 'learning' | 'rapid';
export type SectionId = 1 | 2 | 3 | 4;
export type AppScreen =
  | 'exam-select'
  | 'dashboard'
  | 'system-check'
  | 'section-intro'
  | 'exam'
  | 'results'
  | 'history'
  | 'nonvoice-exam'
  | 'nonvoice-results';

export interface AttemptResult {
  id: string;
  date: string;
  mode: ExamMode;
  totalScore: number;
  sectionScores: [number, number, number, number];
  timeTaken: number; // seconds
  passed: boolean;
}

export interface QuestionResult {
  questionId: string;
  section: SectionId;
  earned: number;
  max: number;
  correct: boolean;
}
