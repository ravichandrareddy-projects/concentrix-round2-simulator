import { useState } from 'react';
import { CheckCircle, XCircle, PieChart, ShieldCheck, Layers, FileText } from 'lucide-react';
import { AptitudeQuestion } from '../../data/questionBank';
import { sound } from '../../utils/audio';

interface Props {
  question: AptitudeQuestion;
  questionNumber: number; // 1 to 5
  totalQuestions: number; // 5
  onAnswer: (score: number) => void;
}

export default function MixedAptitude({ question, questionNumber, totalQuestions, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'question'>('question');

  function handleSelect(i: number) {
    if (submitted) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null || submitted) return;
    setSubmitted(true);
    if (selected === question.correct) {
      sound.playSuccess();
    }
  }

  function handleNext() {
    const score = selected === question.correct ? 1 : 0;
    onAnswer(score);
  }

  const isCorrect = submitted && selected === question.correct;

  // Category display badge & icon
  function getCategoryInfo(type?: string) {
    switch (type) {
      case 'shl-dual-pie':
        return { label: 'Retail Merchandise Distribution', icon: PieChart, color: 'text-cyan-400 bg-cyan-950/80 border-cyan-800' };
      case 'shl-ppe-match':
        return { label: 'Workplace Safety & Equipment', icon: ShieldCheck, color: 'text-emerald-400 bg-emerald-950/80 border-emerald-800' };
      case 'shl-odd-one-out':
        return { label: 'Non-Verbal · Odd One Out', icon: Layers, color: 'text-purple-400 bg-purple-950/80 border-purple-800' };
      default:
        return { label: 'SHL Visual Reasoning', icon: Layers, color: 'text-blue-400 bg-blue-950/80 border-blue-800' };
    }
  }

  const catInfo = getCategoryInfo(question.type);
  const CatIcon = catInfo.icon;
  const isOddOneOut = question.type === 'shl-odd-one-out';
  const hasOptionImages = Boolean(question.optionImages && question.optionImages.length > 0);
  const hasPassage = Boolean(question.passageTitle || question.chartImage);

  return (
    <div className="space-y-6">
      {/* Authentic SHL Platform Top Bar (amcatglobal.aspiringminds.com simulation) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* SHL. Logo */}
          <div className="bg-teal-950/80 border border-teal-500/60 px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
            <span className="text-teal-300 font-black tracking-widest text-base">SHL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Concentrix Assessment · Session 3
              </span>
            </div>
            <p className="text-white font-bold text-sm sm:text-base">
              Choose the correct option.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Category Badge */}
          <span className={`text-xs px-3 py-1 rounded-full border font-semibold flex items-center gap-1.5 ${catInfo.color}`}>
            <CatIcon className="w-3.5 h-3.5" /> {catInfo.label}
          </span>

          {/* Question Counter Pill (Q1 / 5) */}
          <div className="bg-blue-950/90 border border-blue-800/80 px-3 py-1 rounded-full text-xs font-mono font-bold text-blue-300">
            Q{questionNumber} / {totalQuestions}
          </div>

          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-medium border border-slate-700">
            {(25 / totalQuestions).toFixed(1).replace(/\.0$/, '')} Marks
          </span>
        </div>
      </div>

      {/* Main Question & Assessment Card */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        {/* Dual Tab bar if passage / dual chart is present (Screenshot 4 clone) */}
        {hasPassage && (
          <div className="border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('info')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'info'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Information / Passage
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('question')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'question'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <PieChart className="w-3.5 h-3.5" /> Question & Charts
              </button>
            </div>
          </div>
        )}

        {/* Tab 1: Passage / Information View */}
        {hasPassage && activeTab === 'info' && (
          <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold rounded-lg uppercase tracking-wider">
              PASSAGE
            </div>
            <h4 className="text-base font-bold text-white">
              {question.passageTitle || 'Figure 1: Retail Store Merchandise Distribution'}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {question.passageText || 'The distribution of merchandise across retail outlets in Delhi is tracked for promotional posters and hanging danglers. Examine the company shares before answering.'}
            </p>
            {question.chartImage && (
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 p-2">
                <img
                  src={question.chartImage}
                  alt="Delhi Retail Store Merchandise Distribution"
                  className="w-full h-auto max-h-[300px] object-contain mx-auto"
                />
              </div>
            )}
            <button
              type="button"
              onClick={() => setActiveTab('question')}
              className="mt-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg"
            >
              Proceed to Question →
            </button>
          </div>
        )}

        {/* Tab 2 (or Default): Question View */}
        {(!hasPassage || activeTab === 'question') && (
          <>
            {/* Embedded Visual Chart for Dual Pie questions */}
            {question.chartImage && (
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-3 shadow-inner">
                <p className="text-xs font-semibold text-slate-400 mb-2 px-1">
                  Reference Figure:
                </p>
                <img
                  src={question.chartImage}
                  alt="Figure 1 Distribution Diagram"
                  className="w-full h-auto max-h-[280px] object-contain mx-auto select-none"
                />
              </div>
            )}

            {/* Workplace Safety Data Table (Screenshot 1 & 3 clone) */}
            {question.tableData && (
              <div className="bg-slate-950 rounded-2xl p-4 sm:p-5 border border-slate-800 overflow-x-auto shadow-inner space-y-2">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> {question.tableData.title || 'Workplace Safety Protocol Reference'}
                </p>
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      {question.tableData.headers?.map((h: string, i: number) => (
                        <th key={i} className="pb-2.5 pt-1 px-3 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {question.tableData.rows?.map((row: string[], rIdx: number) => (
                      <tr key={rIdx} className="hover:bg-slate-900/60">
                        {row.map((cell: string, cIdx: number) => (
                          <td
                            key={cIdx}
                            className={`py-2 px-3 ${
                              cIdx === 0
                                ? 'font-bold text-white'
                                : cIdx === row.length - 1
                                ? 'text-emerald-300 font-semibold'
                                : 'text-slate-300'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Question Text */}
            <div className="border-l-4 border-blue-500 pl-4 py-1.5">
              <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {question.question}
              </p>
            </div>

            {/* OPTIONS RENDERER */}
            {/* Format A: 2x2 Grid of Geometric Option Cards (Screenshot 2 clone for Odd-One-Out) */}
            {isOddOneOut && hasOptionImages ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {question.options.map((opt, i) => {
                  const isSelected = selected === i;
                  const isThisCorrect = i === question.correct;
                  const imgSrc = question.optionImages![i];

                  let cardCls = 'border-slate-800 bg-slate-950 hover:border-slate-700 hover:bg-slate-900/60';
                  if (submitted) {
                    if (isThisCorrect) {
                      cardCls = 'border-emerald-500 bg-emerald-950/40 ring-2 ring-emerald-500 font-bold';
                    } else if (isSelected && !isThisCorrect) {
                      cardCls = 'border-rose-500 bg-rose-950/40 ring-2 ring-rose-500 font-bold';
                    } else {
                      cardCls = 'border-slate-800/50 bg-slate-950/50 opacity-40';
                    }
                  } else if (isSelected) {
                    cardCls = 'border-blue-500 bg-blue-950/50 ring-2 ring-blue-500 shadow-lg shadow-blue-500/10 font-bold';
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelect(i)}
                      disabled={submitted}
                      className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer group relative ${cardCls}`}
                    >
                      {/* Top Letter Tag & Radio circle */}
                      <div className="w-full flex items-center justify-between mb-2">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-600'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>

                      {/* Geometric SVG diagram */}
                      <div className="w-full max-w-[160px] h-32 flex items-center justify-center p-1">
                        <img
                          src={imgSrc}
                          alt={`Option ${String.fromCharCode(65 + i)}`}
                          className="w-full h-full object-contain pointer-events-none select-none"
                        />
                      </div>

                      <span className="text-xs font-semibold text-slate-300 mt-2">
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : hasOptionImages ? (
              /* Format B: Visual PPE / Equipment Image Cards (Screenshot 1 & 3 clone) */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 pt-2">
                {question.options.map((opt, i) => {
                  const isSelected = selected === i;
                  const isThisCorrect = i === question.correct;
                  const imgSrc = question.optionImages![i];

                  let cardCls = 'border-slate-800 bg-slate-950 hover:border-slate-700 hover:bg-slate-900/60';
                  if (submitted) {
                    if (isThisCorrect) {
                      cardCls = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 ring-2 ring-emerald-500';
                    } else if (isSelected && !isThisCorrect) {
                      cardCls = 'border-rose-500 bg-rose-950/40 text-rose-200 ring-2 ring-rose-500';
                    } else {
                      cardCls = 'border-slate-800/50 bg-slate-950/50 opacity-40';
                    }
                  } else if (isSelected) {
                    cardCls = 'border-blue-500 bg-blue-950/50 ring-2 ring-blue-500 shadow-md';
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelect(i)}
                      disabled={submitted}
                      className={`p-3.5 rounded-2xl border-2 transition-all flex flex-col items-center justify-between cursor-pointer text-center group ${cardCls}`}
                    >
                      <div className="w-full flex items-center justify-between mb-1.5">
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-600'
                        }`}>
                          {isSelected && <div className="w-1 h-1 rounded-full bg-white" />}
                        </div>
                      </div>

                      {/* PPE SVG Icon */}
                      <div className="w-24 h-24 my-1 flex items-center justify-center">
                        <img
                          src={imgSrc}
                          alt={opt}
                          className="w-full h-full object-contain pointer-events-none select-none"
                        />
                      </div>

                      <span className="text-xs font-bold text-slate-200 mt-2 line-clamp-2">
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Format C: Clean Standard Text Option Rows (for Retail Pie calculations) */
              <div className="space-y-3 pt-2">
                {question.options.map((opt, i) => {
                  const isSelected = selected === i;
                  const isThisCorrect = i === question.correct;

                  let cardCls = 'border-slate-800 bg-slate-950 text-slate-200 hover:border-slate-700 hover:bg-slate-900/60';
                  if (submitted) {
                    if (isThisCorrect) {
                      cardCls = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 ring-2 ring-emerald-500/40 font-bold';
                    } else if (isSelected && !isThisCorrect) {
                      cardCls = 'border-rose-500 bg-rose-950/40 text-rose-200 ring-2 ring-rose-500/40 font-bold';
                    } else {
                      cardCls = 'border-slate-800/50 bg-slate-950/50 text-slate-600 opacity-50';
                    }
                  } else if (isSelected) {
                    cardCls = 'border-blue-500 bg-blue-950/40 text-white ring-2 ring-blue-500/40 font-bold';
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelect(i)}
                      disabled={submitted}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${cardCls}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-sm sm:text-base font-medium">{opt}</span>
                      </div>

                      {submitted && isThisCorrect && (
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 ml-2" />
                      )}
                      {submitted && isSelected && !isThisCorrect && (
                        <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* Detailed Explanation Banner */}
        {submitted && (
          <div className={`p-5 rounded-2xl border text-sm space-y-2 ${
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
                {isCorrect ? 'Correct Choice! (+5 marks)' : 'Incorrect (0 marks)'}
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Verified answer: <strong className="underline text-white">{question.options[question.correct]}</strong>
            </p>
            <p className="text-xs leading-relaxed text-slate-200 pt-1.5 border-t border-white/10">
              <strong>SHL Assessment Rationale:</strong> {question.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Action Footer: Authentic SHL Green Button */}
      <div className="flex items-center justify-end pt-2">
        {!submitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={selected === null}
            className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold tracking-wider text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 cursor-pointer disabled:cursor-not-allowed uppercase"
          >
            SUBMIT ANSWER
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/20"
          >
            {questionNumber < totalQuestions ? `Continue to Question ${questionNumber + 1} of ${totalQuestions} →` : 'Complete Session 3 →'}
          </button>
        )}
      </div>
    </div>
  );
}
