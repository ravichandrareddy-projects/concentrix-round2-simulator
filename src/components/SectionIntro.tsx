import { ExamMode, SectionId } from '../types';

interface Props {
  section: SectionId;
  mode: ExamMode;
  questionCount?: number;
  onStart: () => void;
}

const SECTION_INFO: Record<SectionId, { name: string; icon: string; desc: string; questionsCount: number; pointsPerQ: number; totalMarks: number; tips: string[] }> = {
  1: {
    name: 'Session 1: Listen and Repeat',
    icon: '🎧',
    desc: 'You will hear customer service and workplace sentences spoken aloud. Listen carefully and repeat into your microphone within the 12-second speech benchmark.',
    questionsCount: 5,
    pointsPerQ: 5,
    totalMarks: 25,
    tips: [
      'Each sentence is played once in Full Exam Mode.',
      'Allow 12 seconds for speaking as a practice benchmark.',
      'Word accuracy, missing words, extra words, and sequence are evaluated.',
      'The original sentence is never revealed before submission.',
    ],
  },
  2: {
    name: 'Session 2: Story Listening',
    icon: '📖',
    desc: 'A complete narrative scenario will be read aloud through Text-to-Speech. Listen actively without on-screen text, then answer 5 comprehension questions.',
    questionsCount: 5,
    pointsPerQ: 5,
    totalMarks: 25,
    tips: [
      'The story is read once through TTS (text is hidden during exam).',
      'Focus on who, where, when, why, key events, and outcomes.',
      'Five comprehension questions will follow with 4 options each.',
      'Learning Mode allows story replay and speed adjustments.',
    ],
  },
  3: {
    name: 'Session 3: Mixed Aptitude and Reasoning',
    icon: '📊',
    desc: 'A comprehensive 25-question mixed aptitude test covering Data Interpretation (pie charts, bar charts, tables), Non-Verbal Reasoning (nested squares, geometric patterns), Numerical Aptitude, and Logical Reasoning.',
    questionsCount: 25,
    pointsPerQ: 1,
    totalMarks: 25,
    tips: [
      'Contains 25 questions displayed one at a time (1/25).',
      'Analyze pie charts, bar charts, data tables, and concentric nested squares.',
      'Test your numerical aptitude, percentages, ratios, and logical patterns.',
      'Each question has 4 or 5 options with mathematical verification.',
    ],
  },
  4: {
    name: 'Session 4: Content Moderation',
    icon: '🛡️',
    desc: 'Review 5 Trust & Safety moderation cases and select the correct policy classification across 14 categories, using "Appropriate Content" for harmless images.',
    questionsCount: 5,
    pointsPerQ: 5,
    totalMarks: 25,
    tips: [
      'Classify according to platform safety policy and context.',
      'Use the exact category "Appropriate Content" for ordinary safe images.',
      'Consider context and intent, not merely isolated objects.',
      'Detailed policy reasoning is displayed after each submission.',
    ],
  },
};

export default function SectionIntro({ section, mode, questionCount, onStart }: Props) {
  const info = SECTION_INFO[section];
  const modeLabel = mode === 'full' ? 'Full Exam Mode' : mode === 'rapid' ? 'Rapid Practice Mode' : 'Learning Mode (Untimed)';
  const activeQCount = questionCount || info.questionsCount;
  const activePointsPerQ = (25 / activeQCount).toFixed(1).replace(/\.0$/, '');

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center shadow-2xl">
        <div className="text-6xl mb-4 select-none drop-shadow-md">{info.icon}</div>
        <div className="inline-block bg-blue-900/80 border border-blue-700/60 text-blue-300 text-xs font-bold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
          Session {section} of 4 · {modeLabel}
        </div>
        <h2 className="text-2xl font-extrabold text-white mb-2">{info.name}</h2>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">{info.desc}</p>

        <div className="bg-slate-950 rounded-2xl p-5 text-left mb-6 border border-slate-800/80">
          <p className="text-xs uppercase tracking-wider font-bold text-slate-300 mb-3">📌 Key Session Guidelines</p>
          <ul className="space-y-2">
            {info.tips.map((tip, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                <span className="text-blue-400 mt-0.5">•</span> {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-950 rounded-2xl p-4 mb-6 flex justify-around text-center border border-slate-800 text-sm">
          <div>
            <p className="text-slate-500 text-xs">Questions</p>
            <p className="font-extrabold text-white text-lg">{activeQCount}</p>
          </div>
          <div className="border-r border-slate-800" />
          <div>
            <p className="text-slate-500 text-xs">Points Each</p>
            <p className="font-extrabold text-amber-400 text-lg">{activePointsPerQ} pts</p>
          </div>
          <div className="border-r border-slate-800" />
          <div>
            <p className="text-slate-500 text-xs">Session Marks</p>
            <p className="font-extrabold text-blue-400 text-lg">{info.totalMarks} marks</p>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-6">
          Please ensure your audio devices and microphone are working. You cannot pause during Full Exam Mode.
        </p>

        <button
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4 font-bold text-base transition-all shadow-xl hover:shadow-blue-500/20 cursor-pointer"
        >
          Begin Session {section} →
        </button>
      </div>
    </div>
  );
}
