import { useState } from 'react';
import { Award, BarChart2, CheckCircle, RotateCcw, XCircle, ArrowLeft, TrendingUp, AlertTriangle } from 'lucide-react';
import { AttemptResult, ExamMode, QuestionResult, SectionId } from '../types';
import { formatTime, performanceLabel } from '../utils/helpers';
import { loadAttempts } from '../utils/storage';

interface Props {
  candidateName: string;
  results: QuestionResult[];
  sectionScores: [number, number, number, number];
  timeTaken: number;
  mode: ExamMode;
  attempt: AttemptResult;
  onNewAttempt: () => void;
  onDashboard: () => void;
}

const SECTION_NAMES: Record<SectionId, { title: string; icon: string }> = {
  1: { title: 'Listen & Repeat', icon: '🎧' },
  2: { title: 'Story Listening', icon: '📖' },
  3: { title: 'Mixed Aptitude & Reasoning', icon: '📊' },
  4: { title: 'Content Moderation', icon: '🛡️' },
};

export default function Results({ candidateName, results, sectionScores, timeTaken, mode, attempt, onNewAttempt, onDashboard }: Props) {
  const [filterSection, setFilterSection] = useState<SectionId | 'all'>('all');

  const total = sectionScores.reduce((a, b) => a + b, 0);
  const passed = total >= 60;
  const { label, color } = performanceLabel(total);

  // Identify weakest and strongest sections
  const minScore = Math.min(...sectionScores);
  const maxScore = Math.max(...sectionScores);
  const weakest = (sectionScores.indexOf(minScore) + 1) as SectionId;
  const strongest = (sectionScores.indexOf(maxScore) + 1) as SectionId;

  const correctCount = results.filter((r) => r.correct).length;
  const incorrectCount = results.filter((r) => !r.correct).length;
  const accuracyPct = results.length > 0 ? Math.round((correctCount / results.length) * 100) : 0;

  const allAttempts = loadAttempts();
  const recentTen = allAttempts.slice(-10);

  const displayedResults = filterSection === 'all'
    ? results
    : results.filter((r) => r.section === filterSection);

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-12">
      {/* Top Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onDashboard}
            className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full font-medium border border-slate-700">
            Candidate: {candidateName || 'Candidate'}
          </span>
          <span className="text-xs bg-blue-950 text-blue-300 border border-blue-800 px-3 py-1 rounded-full font-semibold uppercase">
            {mode === 'full' ? 'Full Exam' : mode === 'rapid' ? 'Rapid Practice' : 'Learning Mode'}
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Hero Score Card */}
        <div className={`rounded-3xl p-8 sm:p-10 text-center border-2 shadow-2xl relative overflow-hidden ${
          passed
            ? 'bg-gradient-to-b from-emerald-950/70 to-slate-900 border-emerald-600/60 shadow-emerald-950/50'
            : 'bg-gradient-to-b from-rose-950/70 to-slate-900 border-rose-600/60 shadow-rose-950/50'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border shadow-sm">
            {passed ? (
              <span className="bg-emerald-600 text-white px-3 py-1 rounded-full flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Assessment Status: PASSED
              </span>
            ) : (
              <span className="bg-rose-600 text-white px-3 py-1 rounded-full flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Needs Improvement (Target: 60)
              </span>
            )}
          </div>

          <div className="text-7xl sm:text-8xl font-black tracking-tight mb-2">
            <span className={color}>{total}</span>
            <span className="text-3xl sm:text-4xl font-bold text-slate-500"> / 100</span>
          </div>

          <p className={`text-2xl font-bold ${color}`}>{label}</p>
          <p className="text-slate-400 text-sm mt-1 max-w-md mx-auto">
            {passed
              ? 'Congratulations! You achieved the target benchmark for Concentrix Round 2 evaluation.'
              : 'Keep practicing! Concentrate on the weakest sections below to reach the 60+ benchmark.'}
          </p>

          {/* Quick Metrics Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-slate-800/80 text-sm font-medium">
            <div className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">Duration</span>
              <span className="text-white font-mono">{formatTime(timeTaken)}</span>
            </div>
            <div className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">Accuracy</span>
              <span className="text-emerald-400 font-bold">{accuracyPct}%</span>
            </div>
            <div className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">Questions Correct</span>
              <span className="text-blue-400 font-bold">{correctCount} of {results.length}</span>
            </div>
            <div className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">Pass Benchmark</span>
              <span className="text-amber-400 font-bold">60 / 100 pts</span>
            </div>
          </div>
        </div>

        {/* Section Breakdown Grid */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-blue-400" /> Section-by-Section Performance
            </h3>
            <span className="text-xs text-slate-400">25 points per section</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {([1, 2, 3, 4] as SectionId[]).map((s) => {
              const score = sectionScores[s - 1];
              const pct = (score / 25) * 100;
              const isWeak = s === weakest && minScore < 25;
              const isStrong = s === strongest && maxScore > 0;
              const info = SECTION_NAMES[s];

              return (
                <div key={s} className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{info.icon}</span>
                      <div>
                        <p className="font-bold text-sm text-slate-200">
                          Section {s}: {info.title}
                        </p>
                        <p className="text-[11px] text-slate-500">5 questions</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-base text-white">{score}</span>
                      <span className="text-xs text-slate-500"> / 25</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-800 rounded-full h-2.5 my-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        score >= 20 ? 'bg-emerald-500' :
                        score >= 15 ? 'bg-blue-500' :
                        score >= 10 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] mt-1">
                    <span className="text-slate-400">{Math.round(pct)}% mastery</span>
                    {isStrong && (
                      <span className="text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                        ★ Strongest Section
                      </span>
                    )}
                    {isWeak && !isStrong && (
                      <span className="text-rose-400 font-semibold bg-rose-950/60 border border-rose-800 px-2 py-0.5 rounded-full">
                        ⚠️ Focus Area to Practice
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 10-Attempt Historical Progress Trend */}
        {recentTen.length > 0 && (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" /> Improvement Graph (Last {recentTen.length} Attempts)
              </h3>
              <span className="text-xs text-slate-400 font-medium">Target: 10 Practice Attempts</span>
            </div>

            <div className="pt-4">
              {/* Bar Graph */}
              <div className="flex items-end gap-2.5 h-36 border-b border-slate-800 pb-2 relative">
                {/* 60 Target Line */}
                <div
                  className="absolute w-full border-t border-dashed border-amber-500/70 z-10 pointer-events-none"
                  style={{ bottom: '60%' }}
                >
                  <span className="absolute right-0 -top-4 text-[10px] text-amber-400 font-bold bg-slate-900 px-1 rounded">
                    Passing Line (60)
                  </span>
                </div>

                {recentTen.map((att, i) => {
                  const barHeight = Math.max(8, att.totalScore);
                  const isCurrent = att.id === attempt.id;
                  const barColor =
                    att.totalScore >= 80 ? 'bg-emerald-500' :
                    att.totalScore >= 60 ? 'bg-blue-500' :
                    att.totalScore >= 40 ? 'bg-amber-500' : 'bg-rose-500';

                  return (
                    <div key={att.id || i} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                      {/* Tooltip on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-slate-800 border border-slate-700 text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-20 pointer-events-none">
                        Attempt #{i + 1}: {att.totalScore}/100 ({att.mode})
                      </div>

                      <span className="text-[11px] font-bold text-slate-300 mb-1">{att.totalScore}</span>
                      <div
                        className={`w-full rounded-t-md transition-all duration-300 ${barColor} ${
                          isCurrent ? 'ring-2 ring-white shadow-lg' : 'opacity-85 hover:opacity-100'
                        }`}
                        style={{ height: `${barHeight}%` }}
                      />
                      <span className={`text-[10px] mt-1 font-mono ${isCurrent ? 'text-blue-400 font-bold' : 'text-slate-500'}`}>
                        #{i + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                <span>Earliest Attempt</span>
                <span>Latest Session (Valtooy)</span>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Question Review List */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-bold text-lg text-white">Question Review</h3>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 text-xs">
              {(['all', 1, 2, 3, 4] as const).map((sec) => (
                <button
                  key={sec}
                  onClick={() => setFilterSection(sec)}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    filterSection === sec
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {sec === 'all' ? 'All Questions (20)' : `Sec ${sec}`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
            {displayedResults.map((r, i) => (
              <div
                key={i}
                className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-3">
                  {r.correct ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  )}
                  <div>
                    <span className="font-medium text-slate-200">
                      Q{i + 1} · Section {r.section}: {SECTION_NAMES[r.section].title}
                    </span>
                    <span className="text-xs text-slate-500 block">Item Code: {r.questionId}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`font-bold ${r.correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                    +{r.earned} / {r.max} pts
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    {r.correct ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <button
            onClick={onNewAttempt}
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4 font-bold text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-500/20 transition-all"
          >
            <RotateCcw className="w-5 h-5" /> Start Another Practice Attempt
          </button>

          <button
            onClick={onDashboard}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-2xl py-4 font-bold text-base flex items-center justify-center gap-2 border border-slate-700 shadow-xl transition-all"
          >
            <Award className="w-5 h-5" /> Return to Performance Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
