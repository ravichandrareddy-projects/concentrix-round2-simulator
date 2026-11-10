import { useState } from 'react';
import { CheckCircle, XCircle, ShieldAlert, Info, HelpCircle } from 'lucide-react';
import { CATEGORIES } from '../../data/questionBank';
import { sound } from '../../utils/audio';

interface Scenario {
  id: string;
  description: string;
  context: string;
  emoji: string;
  bgColor: string;
  image?: string;
  correct: number;
  explanation: string;
}

interface Props {
  scenario: Scenario;
  questionNumber: number;
  onAnswer: (score: number) => void;
}

export default function ContentModeration({ scenario, questionNumber, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(index: number) {
    if (submitted) return;
    setSelected(index);
  }

  function handleSubmit() {
    if (selected === null || submitted) return;
    setSubmitted(true);
    if (selected === scenario.correct) {
      sound.playSuccess();
    }
  }

  function handleNext() {
    const score = selected === scenario.correct ? 5 : 0;
    onAnswer(score);
  }

  const isCorrect = submitted && selected === scenario.correct;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Section 4 · Trust & Safety / Content Moderation
          </span>
          <h3 className="text-lg font-bold text-white">
            Scenario {questionNumber} of 5
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-amber-900/60 text-amber-300 border border-amber-700/50 px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
            Policy Assessment
          </span>
          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-medium border border-slate-700">
            5 Points
          </span>
        </div>
      </div>

      {/* Scenario Layout: Image/Visual card + Context */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Scenario Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-950 flex flex-col items-center justify-center text-center relative group p-2">
            <img
              src={scenario.image || `/images/moderation/${scenario.id}.svg`}
              alt={scenario.description}
              className="w-full h-auto object-contain max-h-[280px] rounded-xl"
              onError={(e) => {
                // If svg fails, show gradient card
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Context Details */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-400" /> Content Description
              </p>
              <p className="text-slate-100 text-sm font-medium leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                {scenario.description}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Platform & Audience Context
              </p>
              <p className="text-slate-300 text-xs italic bg-slate-950 p-3 rounded-xl border border-slate-800">
                {scenario.context}
              </p>
            </div>

            <div className="text-[11px] text-slate-500 leading-normal border-t border-slate-800/80 pt-3">
              💡 <em>Important:</em> Policy classification evaluates intent, harm potential, and community standards—not merely isolated objects.
            </div>
          </div>
        </div>

        {/* Right Column: 14 Classification Choices */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" /> Select Policy Classification:
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Choose the single category that best represents platform safety rules for this content:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
              {CATEGORIES.map((cat, i) => {
                const isSelected = selected === i;
                const isCorrectCat = i === scenario.correct;

                let btnCls = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900';
                if (submitted) {
                  if (isCorrectCat) {
                    btnCls = 'border-emerald-500 bg-emerald-950/50 text-emerald-200 ring-2 ring-emerald-500/40 font-bold';
                  } else if (isSelected && !isCorrectCat) {
                    btnCls = 'border-rose-500 bg-rose-950/50 text-rose-200 ring-2 ring-rose-500/40 font-bold';
                  } else {
                    btnCls = 'border-slate-800/40 bg-slate-950/40 text-slate-600 opacity-50';
                  }
                } else if (isSelected) {
                  btnCls = 'border-blue-500 bg-blue-950/50 text-white ring-2 ring-blue-500/40 font-bold';
                }

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelect(i)}
                    disabled={submitted}
                    className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between cursor-pointer leading-snug ${btnCls}`}
                  >
                    <span>{cat}</span>
                    {submitted && isCorrectCat && (
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-1.5" />
                    )}
                    {submitted && isSelected && !isCorrectCat && (
                      <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 ml-1.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Policy Reasoning after submission */}
          {submitted && (
            <div className={`mt-5 p-4 rounded-xl border text-sm space-y-2 ${
              isCorrect
                ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200'
                : 'bg-rose-950/60 border-rose-800 text-rose-200'
            }`}>
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
                <span className="font-bold text-base">
                  {isCorrect ? 'Correct Decision! (+5 points)' : `Incorrect (0 points)`}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Official Category: <strong className="underline text-white">{CATEGORIES[scenario.correct]}</strong>
              </p>
              <p className="text-xs leading-relaxed text-slate-200 pt-1 border-t border-white/10">
                <strong>Policy Reasoning:</strong> {scenario.explanation}
              </p>
            </div>
          )}

          {/* Action button */}
          <div className="mt-5">
            {!submitted ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={selected === null}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl py-3.5 font-bold transition-all shadow-lg hover:shadow-blue-500/20"
              >
                {selected === null ? 'Select a category above' : 'Submit Moderation Verdict →'}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-bold transition-all shadow-lg hover:shadow-blue-500/20"
              >
                Continue to Next Scenario →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
