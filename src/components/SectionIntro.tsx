import { ExamMode, SectionId } from '../types';

interface Props {
  section: SectionId;
  mode: ExamMode;
  onStart: () => void;
}

const SECTION_INFO: Record<SectionId, { name: string; icon: string; desc: string; tips: string[] }> = {
  1: {
    name: 'Listen & Repeat',
    icon: '🎧',
    desc: 'You will hear a sentence spoken aloud. Listen carefully, then repeat it as accurately as possible into your microphone.',
    tips: [
      'The sentence will be played once (Full Exam Mode).',
      'Speak clearly and at a natural pace.',
      'Avoid background noise for best recognition.',
      'You will be scored on word accuracy.',
    ],
  },
  2: {
    name: 'Picture Selection',
    icon: '🖼️',
    desc: 'Read the question and select the image that best matches the description from five options.',
    tips: [
      'Read the question carefully before selecting.',
      'Only one option is correct.',
      'All five images will be clearly different.',
      'You have one attempt per question.',
    ],
  },
  3: {
    name: 'Story Comprehension',
    icon: '📖',
    desc: 'A short story will be read to you. After listening, answer five multiple-choice questions about the story.',
    tips: [
      'The story is played once (Full Exam Mode).',
      'Focus on who, what, when, where, and why.',
      'Questions appear after the story ends.',
      'The written story is not shown — listen actively.',
    ],
  },
  4: {
    name: 'Content Moderation',
    icon: '🛡️',
    desc: 'Review each scenario and select the most appropriate content policy classification.',
    tips: [
      'Consider context carefully — not just objects shown.',
      'A kitchen knife in a cooking video is NOT a weapon.',
      'Think about intent, harm potential, and audience.',
      'Explanations are shown after each submission.',
    ],
  },
};

export default function SectionIntro({ section, mode, onStart }: Props) {
  const info = SECTION_INFO[section];
  const modeLabel = mode === 'full' ? 'Full Exam Mode' : mode === 'rapid' ? 'Rapid Practice Mode' : 'Learning Mode';

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
        <div className="text-6xl mb-4">{info.icon}</div>
        <div className="inline-block bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Section {section} of 4 · {modeLabel}
        </div>
        <h2 className="text-2xl font-bold mb-3">{info.name}</h2>
        <p className="text-slate-400 text-sm mb-6">{info.desc}</p>

        <div className="bg-slate-800 rounded-xl p-5 text-left mb-8">
          <p className="text-sm font-semibold text-slate-300 mb-3">📌 Instructions</p>
          <ul className="space-y-2">
            {info.tips.map((tip, i) => (
              <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span> {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 mb-6 flex justify-between text-sm">
          <div className="text-center">
            <p className="text-slate-400 text-xs">Questions</p>
            <p className="font-bold text-white">5</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-xs">Points Each</p>
            <p className="font-bold text-yellow-400">5</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-xs">Section Total</p>
            <p className="font-bold text-blue-400">25</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-xs">Replay</p>
            <p className={`font-bold ${mode === 'learning' ? 'text-emerald-400' : 'text-red-400'}`}>
              {mode === 'learning' ? 'Yes' : 'No'}
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-6">
          Please ensure your audio devices and microphone are working before clicking Start.
        </p>

        <button
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 font-bold text-lg transition-colors"
        >
          Start Section {section} →
        </button>
      </div>
    </div>
  );
}
