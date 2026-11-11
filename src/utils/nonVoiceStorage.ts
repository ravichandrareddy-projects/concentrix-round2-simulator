import { NonVoiceAttemptResult } from '../types/nonVoice';

const NV_KEY = 'concentrix_nonvoice_attempts';
const NV_ACTIVE_KEY = 'concentrix_nonvoice_active';
const NV_USED_KEY = 'concentrix_nonvoice_used_questions';

export function loadNonVoiceAttempts(): NonVoiceAttemptResult[] {
  try {
    const raw = localStorage.getItem(NV_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveNonVoiceAttempt(attempt: NonVoiceAttemptResult): void {
  const all = loadNonVoiceAttempts();
  all.push(attempt);
  localStorage.setItem(NV_KEY, JSON.stringify(all));
}

export function clearNonVoiceAttempts(): void {
  localStorage.removeItem(NV_KEY);
}

export function saveActiveNonVoiceAttempt(data: any): void {
  try {
    localStorage.setItem(NV_ACTIVE_KEY, JSON.stringify(data));
  } catch {}
}

export function loadActiveNonVoiceAttempt(): any | null {
  try {
    const raw = localStorage.getItem(NV_ACTIVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearActiveNonVoiceAttempt(): void {
  localStorage.removeItem(NV_ACTIVE_KEY);
}

export function getUsedQuestionIds(candidateName: string): string[] {
  try {
    const raw = localStorage.getItem(`${NV_USED_KEY}_${candidateName}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveUsedQuestionIds(candidateName: string, ids: string[]): void {
  try {
    const existing = getUsedQuestionIds(candidateName);
    const combined = Array.from(new Set([...existing, ...ids]));
    localStorage.setItem(`${NV_USED_KEY}_${candidateName}`, JSON.stringify(combined));
  } catch {}
}
