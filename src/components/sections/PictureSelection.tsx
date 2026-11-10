import { useState } from 'react';
import { CheckCircle, XCircle, Image as ImageIcon } from 'lucide-react';
import { shuffle } from '../../utils/helpers';
import { sound } from '../../utils/audio';

interface Option {
  label: string;
  image: string;
  correct: boolean;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

interface Props {
  question: Question;
  questionNumber: number;
  onAnswer: (score: number) => void;
}

export default function PictureSelection({ question, questionNumber, onAnswer }: Props) {
  const [shuffled] = useState(() => shuffle(question.options));
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  function handleSelect(i: number) {
    if (submitted) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null || submitted) return;
    setSubmitted(true);
    if (shuffled[selected].correct) {
      sound.playSuccess();
    }
  }

  function handleNext() {
    const score = selected !== null && shuffled[selected].correct ? 5 : 0;
    onAnswer(score);
  }

  const isCorrect = selected !== null && shuffled[selected].correct;

  // Fallback themes for offline / image fail
  const fallbackGradients = [
    'from-blue-900 to-indigo-950',
    'from-emerald-900 to-teal-950',
    'from-purple-900 to-slate-950',
    'from-amber-900 to-stone-950',
    'from-rose-900 to-slate-950',
  ];

  return (
    <div className="space-y-6">
      {/* Question Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Section 2 · Picture Selection</span>
          <h3 className="text-lg font-bold text-white">Question {questionNumber} of 5</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-blue-900/60 text-blue-300 border border-blue-700/50 px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
            Visual Identification
          </span>
          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-medium border border-slate-700">
            5 Points
          </span>
        </div>
      </div>

      {/* Question Box */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h4 className="text-xl font-bold text-white mb-6 leading-snug">
          {question.question}
        </h4>

        {/* 5 Distinct Picture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {shuffled.map((opt, i) => {
            const isSelected = selected === i;
            const isOptCorrect = opt.correct;
            const hasImgError = imageErrors[i];

            let cardBorder = 'border-slate-800 hover:border-slate-600 bg-slate-950';
            if (submitted) {
              if (isOptCorrect) {
                cardBorder = 'border-emerald-500 bg-emerald-950/40 ring-2 ring-emerald-500/30';
              } else if (isSelected && !isOptCorrect) {
                cardBorder = 'border-rose-500 bg-rose-950/40 ring-2 ring-rose-500/30';
              } else {
                cardBorder = 'border-slate-800/60 opacity-60 bg-slate-950';
              }
            } else if (isSelected) {
              cardBorder = 'border-blue-500 bg-blue-950/40 ring-2 ring-blue-500/40';
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={submitted}
                className={`relative group rounded-xl border-2 overflow-hidden transition-all text-left flex flex-col cursor-pointer ${cardBorder}`}
              >
                {/* Image Area with Fallback */}
                <div className="w-full h-36 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                  {!hasImgError ? (
                    <img
                      src={opt.image}
                      alt={opt.label}
                      loading="lazy"
                      onError={() => setImageErrors(prev => ({ ...prev, [i]: true }))}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${fallbackGradients[i % fallbackGradients.length]} flex flex-col items-center justify-center p-3 text-center`}>
                      <ImageIcon className="w-8 h-8 text-slate-400 mb-1" />
                      <span className="text-[11px] text-slate-300 font-medium line-clamp-2">
                        {opt.label}
                      </span>
                    </div>
                  )}

                  {/* Letter Badge (A, B, C, D, E) */}
                  <div className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-slate-900/90 backdrop-blur-sm border border-slate-700/80 flex items-center justify-center text-xs font-bold text-white shadow-md">
                    {String.fromCharCode(65 + i)}
                  </div>

                  {/* Status Indicator Badge */}
                  {submitted && isOptCorrect && (
                    <div className="absolute top-2 right-2 bg-emerald-600 rounded-full p-1 shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {submitted && isSelected && !isOptCorrect && (
                    <div className="absolute top-2 right-2 bg-rose-600 rounded-full p-1 shadow-lg">
                      <XCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Option Label */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs font-medium text-slate-300 line-clamp-2 leading-relaxed">
                    {opt.label}
                  </p>
                  <span className={`text-[11px] font-semibold mt-2 ${
                    isSelected ? 'text-blue-400' : 'text-slate-500'
                  }`}>
                    {isSelected ? 'Selected' : 'Click to select'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Banner after submission */}
        {submitted && (
          <div className={`mt-6 p-4 rounded-xl border text-sm flex items-start gap-3 ${
            isCorrect
              ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200'
              : 'bg-rose-950/60 border-rose-800 text-rose-200'
          }`}>
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-bold text-base">
                {isCorrect ? 'Correct! (+5 points)' : 'Incorrect (0 points)'}
              </p>
              <p className="text-xs opacity-90 mt-1">
                The correct option is: <strong className="underline">{shuffled.find(o => o.correct)?.label}</strong>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {!submitted ? (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl py-3.5 font-bold transition-all shadow-lg hover:shadow-blue-500/20"
        >
          {selected === null ? 'Select an image option above' : 'Confirm & Submit Answer →'}
        </button>
      ) : (
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-bold transition-all shadow-lg hover:shadow-blue-500/20"
        >
          Continue to Next Question →
        </button>
      )}
    </div>
  );
}
