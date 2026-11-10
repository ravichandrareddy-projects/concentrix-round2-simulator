import { Award, BarChart2, BookOpen, Clock, Play, Zap, Shield, ChevronRight, CheckCircle2 } from 'lucide-react';
import { AttemptResult, ExamMode } from '../types';
import { getStats, loadAttempts } from '../utils/storage';
import { formatTime, performanceLabel } from '../utils/helpers';

interface Props {
  onStart: (mode: ExamMode) => void;
  onHistory: () => void;
}

export default function Dashboard({ onStart, onHistory }: Props) {
  const attempts: AttemptResult[] = loadAttempts();
  const stats = getStats(attempts);
  const recent = [...attempts].reverse().slice(0, 5);

  const sections = [
    {
      id: 1,
      name: 'Listen and Repeat',
      icon: '🎧',
      desc: '5 spoken workplace & customer sentences. Synthesizes voice input, tracks Word Error Rate (WER) and sentence accuracy.',
      points: '25 pts (5 questions)',
      badge: 'Spoken Fluency'
    },
    {
      id: 2,
      name: 'Picture Selection',
      icon: '🖼️',
      desc: '5 visual identification questions across daily activities, corporate situations, customer service, and transportation.',
      points: '25 pts (5 questions)',
      badge: 'Visual Cognition'
    },
    {
      id: 3,
      name: 'Story Listening & Comprehension',
      icon: '📖',
      desc: 'Listen to a complete real-world customer service narrative. Answer 5 MCQs on critical facts, sequence, and outcomes.',
      points: '25 pts (5 questions)',
      badge: 'Auditory Comprehension'
    },
    {
      id: 4,
      name: 'Content Moderation',
      icon: '🛡️',
      desc: 'Analyze 5 policy scenarios across 14 safety categories. Classify content with policy reasoning and safety justification.',
      points: '25 pts (5 questions)',
      badge: 'Trust & Safety Policy'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-16">
      {/* Corporate Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-900/40">
              C
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg leading-tight tracking-tight text-white">CONCENTRIX</h1>
                <span className="text-[10px] bg-blue-900/80 text-blue-300 font-bold px-2 py-0.5 rounded border border-blue-700/50">
                  ROUND 2
                </span>
              </div>
              <p className="text-xs text-slate-400">Realistic Voice & Behavioral Assessment Simulator</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-[11px] text-slate-400 block">Candidate Identity</span>
              <span className="font-bold text-blue-400 text-sm tracking-wide">VALTOOY</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-950 border border-blue-700 flex items-center justify-center font-bold text-xs text-blue-300">
              V
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-8 border border-blue-900/50 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/60 px-3 py-1 rounded-full text-xs font-semibold text-blue-300">
              <Shield className="w-3.5 h-3.5 text-blue-400" /> Interview Preparation Simulator · 10 Practice Target
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Welcome, <span className="text-blue-400">VALTOOY</span>.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              This system replicates the exact 4-section Concentrix Round 2 evaluation. Test your voice repetition,
              visual discernment, auditory story recall, and Trust & Safety policy moderation. Complete 10 practice runs to ensure passing readiness tomorrow.
            </p>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: 'Highest Score',
              value: stats.total ? `${stats.highest}/100` : '—',
              sub: stats.highest >= 60 ? 'Passing benchmark met' : 'Needs practice',
              icon: Award,
              color: 'text-amber-400',
              bg: 'bg-amber-950/30 border-amber-900/40'
            },
            {
              label: 'Average Score',
              value: stats.total ? `${stats.average}/100` : '—',
              sub: `Across ${stats.total} sessions`,
              icon: BarChart2,
              color: 'text-blue-400',
              bg: 'bg-blue-950/30 border-blue-900/40'
            },
            {
              label: 'Practice Sessions',
              value: `${stats.total} / 10`,
              sub: 'Target: 10 attempts',
              icon: Clock,
              color: 'text-purple-400',
              bg: 'bg-purple-950/30 border-purple-900/40'
            },
            {
              label: 'Pass Ratio',
              value: stats.total ? `${stats.passed} of ${stats.total}` : '—',
              sub: 'Passing score: 60/100',
              icon: CheckCircle2,
              color: 'text-emerald-400',
              bg: 'bg-emerald-950/30 border-emerald-900/40'
            },
          ].map((s) => (
            <div key={s.label} className={`rounded-2xl p-5 border shadow-lg ${s.bg}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-medium">{s.label}</span>
                <s.icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-[11px] text-slate-500 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Practice Mode Launch Buttons */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-white flex items-center gap-2">
            <Play className="w-5 h-5 text-blue-400" /> Launch Assessment Modes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Full Exam Mode */}
            <div className="bg-slate-900 rounded-3xl p-6 border-2 border-blue-600/60 hover:border-blue-500 shadow-xl flex flex-col justify-between transition-all group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                    <Play className="w-6 h-6 ml-0.5" />
                  </span>
                  <span className="text-xs font-bold bg-blue-950 border border-blue-800 text-blue-300 px-3 py-1 rounded-full uppercase">
                    15 Minutes
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Full Exam Mode
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Realistic examination conditions. 20 questions across all 4 sections. Strict countdown, single-play audio, no replays or pauses.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onStart('full')}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-bold text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Full Exam Simulator <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Rapid Practice Mode */}
            <div className="bg-slate-900 rounded-3xl p-6 border-2 border-purple-600/60 hover:border-purple-500 shadow-xl flex flex-col justify-between transition-all group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-purple-700 flex items-center justify-center text-white shadow-lg shadow-purple-700/30">
                    <Zap className="w-6 h-6" />
                  </span>
                  <span className="text-xs font-bold bg-purple-950 border border-purple-800 text-purple-300 px-3 py-1 rounded-full uppercase">
                    ~10 Minutes
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    Rapid Practice Mode
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Optimized for rapid repetition. Designed to complete 10 attempts in 2 hours with brisk pacing across all 4 assessment sections.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onStart('rapid')}
                className="mt-6 w-full bg-purple-700 hover:bg-purple-600 text-white rounded-xl py-3.5 font-bold text-sm transition-all shadow-lg shadow-purple-700/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Rapid Practice <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Learning Mastery Mode */}
            <div className="bg-slate-900 rounded-3xl p-6 border-2 border-emerald-600/60 hover:border-emerald-500 shadow-xl flex flex-col justify-between transition-all group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-700/30">
                    <BookOpen className="w-6 h-6" />
                  </span>
                  <span className="text-xs font-bold bg-emerald-950 border border-emerald-800 text-emerald-300 px-3 py-1 rounded-full uppercase">
                    Untimed / Replay
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Learning Mode
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Guided practice with adjustable audio speed, audio replay buttons, question explanations, and instant word-diff feedback.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onStart('learning')}
                className="mt-6 w-full bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl py-3.5 font-bold text-sm transition-all shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Launch Learning Mode <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Assessment Sections Overview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" /> Assessment Structure (20 Questions · 100 Points)
            </h3>
            <span className="text-xs text-slate-400">Target passing score: 60/100</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((s) => (
              <div key={s.id} className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-lg flex items-start gap-4">
                <div className="text-3xl p-2 bg-slate-950 rounded-xl border border-slate-800 flex-shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-slate-200">
                      Section {s.id}: {s.name}
                    </h4>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                      {s.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  <p className="text-xs font-semibold text-blue-400 pt-1">{s.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scoring Scale Guide */}
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-lg space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Scoring Benchmark</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs text-center font-medium">
            <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-300 p-2.5 rounded-xl">
              <span className="font-bold block text-sm">90–100</span>
              <span>Excellent</span>
            </div>
            <div className="bg-blue-950/60 border border-blue-800 text-blue-300 p-2.5 rounded-xl">
              <span className="font-bold block text-sm">80–89</span>
              <span>Very Good</span>
            </div>
            <div className="bg-cyan-950/60 border border-cyan-800 text-cyan-300 p-2.5 rounded-xl">
              <span className="font-bold block text-sm">70–79</span>
              <span>Good</span>
            </div>
            <div className="bg-amber-950/60 border border-amber-800 text-amber-300 p-2.5 rounded-xl">
              <span className="font-bold block text-sm">60–69</span>
              <span>Pass (Threshold)</span>
            </div>
            <div className="bg-rose-950/60 border border-rose-800 text-rose-300 p-2.5 rounded-xl col-span-2 sm:col-span-1">
              <span className="font-bold block text-sm">&lt; 60</span>
              <span>Needs Improvement</span>
            </div>
          </div>
        </div>

        {/* Recent Attempts History */}
        {recent.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-white">Recent Completed Attempts</h3>
              <button
                onClick={onHistory}
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
              >
                View Full History ({attempts.length}) →
              </button>
            </div>

            <div className="space-y-2.5">
              {recent.map((a, i) => {
                const { label, color } = performanceLabel(a.totalScore);
                return (
                  <div
                    key={a.id || i}
                    className="bg-slate-900 rounded-xl px-5 py-4 border border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-200">
                          Attempt #{attempts.length - i}
                        </span>
                        <span className="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded capitalize">
                          {a.mode} Mode
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {new Date(a.date).toLocaleDateString()} at {new Date(a.date).toLocaleTimeString()} · Duration: {formatTime(a.timeTaken)}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className={`text-xl font-black ${color}`}>{a.totalScore}/100</span>
                      <span className={`text-xs block font-semibold ${color}`}>{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
