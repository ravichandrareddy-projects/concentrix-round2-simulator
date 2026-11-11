import { Award, CheckCircle, XCircle, ArrowLeft, RotateCcw, Clock, BookOpen, AlertCircle } from 'lucide-react';
import { NonVoiceAttemptResult } from '../../types/nonVoice';

interface Props {
  candidateName: string;
  result: NonVoiceAttemptResult;
  onRetake: () => void;
  onHome: () => void;
}

export default function NonVoiceResults({ candidateName, result, onRetake, onHome }: Props) {
  const isPass = result.totalScore >= 60;
  const minutes = Math.floor(result.timeTaken / 60);
  const seconds = result.timeTaken % 60;

  const sectionDetails = [
    {
      id: 'A',
      title: 'Section A: Typing Paragraph',
      score: result.sectionScores.A,
      desc: 'Typing speed & word accuracy under 60-second limit',
      max: 20,
    },
    {
      id: 'B',
      title: 'Section B: Fill in the Blanks',
      score: result.sectionScores.B,
      desc: 'Grammar, tenses, vocabulary & prepositions (20 questions)',
      max: 20,
    },
    {
      id: 'C',
      title: 'Section C: Dictation (Listen & Type)',
      score: result.sectionScores.C,
      desc: 'Auditory transcription accuracy (16 spoken sentences)',
      max: 20,
    },
    {
      id: 'D',
      title: 'Section D: Story Reconstruction',
      score: result.sectionScores.D,
      desc: 'Passage comprehension & key details recall (4 passages)',
      max: 20,
    },
    {
      id: 'E',
      title: 'Section E: Email Writing',
      score: result.sectionScores.E,
      desc: 'Customer scenario response (length, etiquette, relevance)',
      max: 20,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <span className="text-xs font-mono uppercase tracking-wider text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
            Attempt ID: {result.id}
          </span>
        </div>

        {/* Hero Card */}
        <div
          className={`rounded-2xl p-8 border shadow-lg text-center relative overflow-hidden ${
            isPass
              ? 'bg-gradient-to-b from-emerald-50 to-white border-emerald-200'
              : 'bg-gradient-to-b from-rose-50 to-white border-rose-200'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-md bg-white">
            {isPass ? (
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            ) : (
              <XCircle className="w-10 h-10 text-rose-600" />
            )}
          </div>

          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest mb-2 ${
              isPass ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }`}
          >
            {isPass ? 'PASSED — CONCENTRIX BENCHMARK MET' : 'NEEDS PRACTICE — BENCHMARK 60/100'}
          </span>

          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            {candidateName || result.candidateName}
          </h1>
          <p className="text-sm text-gray-500 mt-1">Customer Support Non-Voice Assessment Evaluation</p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <span
              className={`text-6xl font-black tracking-tight ${
                isPass ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {result.totalScore}
            </span>
            <span className="text-3xl font-bold text-gray-400">/ 100</span>
          </div>

          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>Time Taken: {minutes}m {seconds}s</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gray-400" />
              <span>Pass Benchmark: 60/100</span>
            </div>
          </div>
        </div>

        {/* Section Breakdown Grid */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" /> 5-Section Performance Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectionDetails.map((sec) => {
              const pct = Math.round((sec.score / sec.max) * 100);
              return (
                <div
                  key={sec.id}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-gray-900">{sec.title}</span>
                      <span className="font-mono font-black text-sm text-blue-600">
                        {sec.score} / {sec.max}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{sec.desc}</p>
                  </div>

                  <div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          pct >= 70 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1.5 text-[11px] text-gray-400 font-mono">
                      <span>{pct}% score</span>
                      <span>Weight: 20 pts</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Concentrix Hiring Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-blue-900 space-y-1">
            <p className="font-bold text-sm">Concentrix Evaluation Guidance</p>
            <p>
              Candidates for non-voice customer support roles are assessed on written speed, grammatical precision,
              auditory listening accuracy, retention of case context, and customer-facing email etiquette.
              Scores above 60/100 meet the hiring threshold.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onRetake}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Start Next Attempt (Fresh Questions)
          </button>
          <button
            onClick={onHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-semibold px-8 py-3.5 rounded-xl border border-gray-300 shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
