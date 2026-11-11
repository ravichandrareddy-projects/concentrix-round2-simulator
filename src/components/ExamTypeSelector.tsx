import { Headphones, Mail, ArrowRight, Shield, Award, CheckCircle2, Pencil } from 'lucide-react';

interface Props {
  candidateName: string;
  onSelectVoice: () => void;
  onSelectNonVoice: () => void;
  onChangeName: () => void;
}

export default function ExamTypeSelector({
  candidateName,
  onSelectVoice,
  onSelectNonVoice,
  onChangeName,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between pb-12">
      {/* Header */}
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
                  ASSESSMENT PORTAL
                </span>
              </div>
              <p className="text-xs text-slate-400">Official Candidate Evaluation Tracks</p>
            </div>
          </div>

          <button
            onClick={onChangeName}
            className="flex items-center gap-3 p-1.5 -mr-1.5 rounded-2xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all text-left group cursor-pointer"
            title="Click to edit candidate name"
          >
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider flex items-center justify-end gap-1">
                Candidate <Pencil className="w-2.5 h-2.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </span>
              <span className="font-bold text-blue-400 text-sm tracking-wide group-hover:underline">
                {candidateName || 'Set Name'}
              </span>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-950 border border-blue-700 flex items-center justify-center font-bold text-xs text-blue-300 group-hover:scale-105 group-hover:border-blue-400 transition-all shadow-md">
              {candidateName ? candidateName[0].toUpperCase() : 'C'}
            </div>
          </button>
        </div>
      </header>

      {/* Main Choice Section */}
      <main className="max-w-5xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 px-3 py-1 rounded-full text-xs font-semibold text-blue-300">
            <Shield className="w-3.5 h-3.5 text-blue-400" /> Select Your Designated Evaluation Stream
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Choose Examination Track
          </h2>
          <p className="text-slate-400 text-sm">
            Select the assessment format assigned by Concentrix recruitment. Both tracks are timed and scored out of 100 points with a 60-point passing threshold.
          </p>
        </div>

        {/* Two Large Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Customer Support Voice */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-900/90 rounded-3xl p-8 border-2 border-blue-700/60 hover:border-blue-500 shadow-2xl flex flex-col justify-between transition-all hover:scale-[1.01] group relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/40">
                  <Headphones className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold bg-blue-950 border border-blue-800 text-blue-300 px-3 py-1 rounded-full uppercase">
                  Voice Track
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                  Customer Support Voice
                </h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Round 2 Voice assessment simulating customer interactions, auditory recall, cognitive reasoning, and content moderation.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Section 1: Listen &amp; Repeat (Fluency)</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Section 2: Auditory Story Comprehension</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Section 3: SHL Visual &amp; Logic Reasoning</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Section 4: Content Moderation Policy</span>
                </div>
              </div>
            </div>

            <button
              onClick={onSelectVoice}
              className="mt-8 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4 font-bold text-base transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-blue-500/50"
            >
              <span>Launch Voice Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Customer Support Non-Voice */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-900/90 rounded-3xl p-8 border-2 border-emerald-600/60 hover:border-emerald-500 shadow-2xl flex flex-col justify-between transition-all hover:scale-[1.01] group relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/40">
                  <Mail className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold bg-emerald-950 border border-emerald-800 text-emerald-300 px-3 py-1 rounded-full uppercase">
                  Non-Voice Track
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  Customer Support Non-Voice
                </h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Written assessment evaluating typing, grammar, single-play dictation, story reconstruction, and professional email drafting.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Section A: Typing Paragraph (60s speed)</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Section B: Fill in the Blanks (20 questions)</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Section C: Dictation / Listen &amp; Type (16 Qs)</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Section D: Story Reconstruction (4 passages)</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Section E: Scenario Email Writing (9 mins)</span>
                </div>
              </div>
            </div>

            <button
              onClick={onSelectNonVoice}
              className="mt-8 w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl py-4 font-bold text-base transition-all shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-emerald-500/50"
            >
              <span>Launch Non-Voice Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-slate-400" /> Passing Threshold: 60 / 100
          </span>
          <span>·</span>
          <span>Automatic Countdown Timers</span>
          <span>·</span>
          <span>Zero Question Overlap Per Attempt</span>
        </div>
      </main>
    </div>
  );
}
