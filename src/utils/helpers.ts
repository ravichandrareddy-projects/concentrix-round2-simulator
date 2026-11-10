/** Shuffle an array in place using Fisher-Yates */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick `n` random unique items from array */
export function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

/** Normalize text for comparison */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Word Error Rate (0 = perfect, 1 = all wrong) */
export function wordErrorRate(reference: string, hypothesis: string): number {
  const ref = normalizeText(reference).split(' ');
  const hyp = normalizeText(hypothesis).split(' ');
  if (ref.length === 0) return 0;

  // Levenshtein on word sequences
  const dp: number[][] = Array.from({ length: ref.length + 1 }, (_, i) =>
    Array.from({ length: hyp.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= ref.length; i++) {
    for (let j = 1; j <= hyp.length; j++) {
      if (ref[i - 1] === hyp[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return Math.min(dp[ref.length][hyp.length] / ref.length, 1);
}

/** Convert WER to 0-5 score */
export function werToScore(wer: number): number {
  if (wer <= 0.05) return 5;
  if (wer <= 0.15) return 4;
  if (wer <= 0.3) return 3;
  if (wer <= 0.5) return 2;
  if (wer <= 0.7) return 1;
  return 0;
}

/** Detailed word diff for feedback */
export function wordDiff(reference: string, hypothesis: string) {
  const refWords = normalizeText(reference).split(' ');
  const hypWords = normalizeText(hypothesis).split(' ');
  const refSet = new Set(refWords);
  const hypSet = new Set(hypWords);

  const missing = refWords.filter((w) => !hypSet.has(w));
  const extra = hypWords.filter((w) => !refSet.has(w));
  const correct = refWords.filter((w) => hypSet.has(w));

  return { missing, extra, correct };
}

/** Format seconds as mm:ss */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

/** Performance label */
export function performanceLabel(score: number): { label: string; color: string } {
  if (score >= 90) return { label: 'Excellent', color: 'text-emerald-400' };
  if (score >= 80) return { label: 'Very Good', color: 'text-blue-400' };
  if (score >= 70) return { label: 'Good', color: 'text-cyan-400' };
  if (score >= 60) return { label: 'Pass', color: 'text-yellow-400' };
  return { label: 'Needs Improvement', color: 'text-red-400' };
}
