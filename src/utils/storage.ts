import { AttemptResult } from '../types';

const KEY = 'concentrix_attempts';

export function loadAttempts(): AttemptResult[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAttempt(attempt: AttemptResult): void {
  const all = loadAttempts();
  all.push(attempt);
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function clearAttempts(): void {
  localStorage.removeItem(KEY);
}

export function getStats(attempts: AttemptResult[]) {
  if (attempts.length === 0) {
    return { highest: 0, average: 0, total: 0, passed: 0 };
  }
  const scores = attempts.map((a) => a.totalScore);
  return {
    highest: Math.max(...scores),
    average: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
    total: attempts.length,
    passed: attempts.filter((a) => a.passed).length,
  };
}
