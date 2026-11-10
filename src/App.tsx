import { useState } from 'react';
import Dashboard from './components/Dashboard';
import SystemCheck from './components/SystemCheck';
import ExamFlow from './components/ExamFlow';
import Results from './components/Results';
import CandidateNameModal from './components/CandidateNameModal';
import { AppScreen, AttemptResult, ExamMode, QuestionResult } from './types';
import { saveAttempt, loadAttempts, clearAttempts } from './utils/storage';
import { performanceLabel, formatTime } from './utils/helpers';
import { Trash2, ArrowLeft, Pencil } from 'lucide-react';

export default function App() {
  const [candidateName, setCandidateName] = useState(() => {
    return localStorage.getItem('concentrix_candidate_name') || '';
  });
  const [showNameModal, setShowNameModal] = useState(() => {
    return !localStorage.getItem('concentrix_candidate_name');
  });

  const [screen, setScreen] = useState<AppScreen>('dashboard');
  const [mode, setMode] = useState<ExamMode>('full');
  const [sessionId, setSessionId] = useState(Date.now());
  const [lastResults, setLastResults] = useState<QuestionResult[] | null>(null);
  const [lastSectionScores, setLastSectionScores] = useState<[number, number, number, number]>([0, 0, 0, 0]);
  const [lastTimeTaken, setLastTimeTaken] = useState(0);
  const [lastAttempt, setLastAttempt] = useState<AttemptResult | null>(null);

  function handleSaveCandidateName(newName: string) {
    setCandidateName(newName);
    localStorage.setItem('concentrix_candidate_name', newName);
    setShowNameModal(false);
  }

  function handleStart(selectedMode: ExamMode) {
    if (!candidateName) {
      setShowNameModal(true);
      return;
    }
    setMode(selectedMode);
    setSessionId(Date.now());
    setScreen('system-check');
  }

  function handleSystemCheckProceed() {
    setSessionId(Date.now());
    setScreen('exam');
  }

  function handleExamComplete(
    results: QuestionResult[],
    timeTaken: number,
    sectionScores: [number, number, number, number]
  ) {
    const total = sectionScores.reduce((a, b) => a + b, 0);
    const attempt: AttemptResult = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toISOString(),
      mode,
      totalScore: total,
      sectionScores,
      timeTaken,
      passed: total >= 60,
    };
    saveAttempt(attempt);
    setLastResults(results);
    setLastSectionScores(sectionScores);
    setLastTimeTaken(timeTaken);
    setLastAttempt(attempt);
    setScreen('results');
  }

  function handleStartNewAttempt() {
    setSessionId(Date.now());
    setScreen('system-check');
  }

  return (
    <>
      {/* Global Candidate Name Verification Modal with Screen Blur Center Line */}
      <CandidateNameModal
        isOpen={showNameModal}
        currentName={candidateName}
        canCancel={Boolean(candidateName)}
        onSave={handleSaveCandidateName}
        onClose={() => setShowNameModal(false)}
      />

      {screen === 'dashboard' && (
        <Dashboard
          candidateName={candidateName}
          onStart={handleStart}
          onHistory={() => setScreen('history')}
          onChangeName={() => setShowNameModal(true)}
        />
      )}

      {screen === 'system-check' && (
        <SystemCheck
          mode={mode}
          onProceed={handleSystemCheckProceed}
          onBack={() => setScreen('dashboard')}
        />
      )}

      {screen === 'exam' && (
        <ExamFlow
          key={sessionId} // ensures fresh question selection on every attempt
          candidateName={candidateName}
          mode={mode}
          onComplete={handleExamComplete}
        />
      )}

      {screen === 'results' && lastResults && lastAttempt && (
        <Results
          candidateName={candidateName}
          results={lastResults}
          sectionScores={lastSectionScores}
          timeTaken={lastTimeTaken}
          mode={mode}
          attempt={lastAttempt}
          onNewAttempt={handleStartNewAttempt}
          onDashboard={() => setScreen('dashboard')}
        />
      )}

      {screen === 'history' && (
        <HistoryScreen
          candidateName={candidateName}
          onBack={() => setScreen('dashboard')}
          onChangeName={() => setShowNameModal(true)}
        />
      )}
    </>
  );
}

// Full History Screen
function HistoryScreen({
  candidateName,
  onBack,
  onChangeName,
}: {
  candidateName: string;
  onBack: () => void;
  onChangeName: () => void;
}) {
  const [attempts, setAttempts] = useState(() => loadAttempts().reverse());

  function handleClear() {
    if (confirm('Are you sure you want to reset all practice history?')) {
      clearAttempts();
      setAttempts([]);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-12">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={onChangeName}
            className="text-xs text-slate-300 font-mono flex items-center gap-1.5 hover:text-blue-400 transition-colors cursor-pointer bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700"
            title="Click to edit candidate name"
          >
            Candidate: <strong className="text-blue-400">{candidateName || 'Not Set'}</strong>
            <Pencil className="w-3 h-3 text-slate-400" />
          </button>
          {attempts.length > 0 && (
            <button
              onClick={handleClear}
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 bg-rose-950/60 border border-rose-900 px-3 py-1.5 rounded-lg transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear History
            </button>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">All Practice Sessions</h2>
          <p className="text-slate-400 text-sm mt-0.5">
            Total attempts recorded: <strong className="text-blue-400">{attempts.length}</strong>
          </p>
        </div>

        {attempts.length === 0 ? (
          <div className="bg-slate-900 rounded-3xl p-12 text-center border border-slate-800 text-slate-500 space-y-3">
            <p className="text-base font-semibold text-slate-400">No attempts logged yet.</p>
            <p className="text-sm">Start your first assessment run to track your scores and improvements here.</p>
            <button
              onClick={onBack}
              className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all"
            >
              Go to Dashboard
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {attempts.map((a: AttemptResult, i: number) => {
              const { label, color } = performanceLabel(a.totalScore);
              return (
                <div
                  key={a.id || i}
                  className="bg-slate-900 rounded-2xl px-5 py-4 border border-slate-800 flex items-center justify-between shadow-md"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-200">
                        Attempt #{attempts.length - i}
                      </span>
                      <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full capitalize">
                        {a.mode} Mode
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">
                      {new Date(a.date).toLocaleDateString()} at {new Date(a.date).toLocaleTimeString()} · Duration: {formatTime(a.timeTaken)}
                    </p>

                    <div className="flex gap-2 text-[11px] text-slate-400 pt-1 font-mono">
                      <span>Sec 1: {a.sectionScores[0]}/25</span>
                      <span>· Sec 2: {a.sectionScores[1]}/25</span>
                      <span>· Sec 3: {a.sectionScores[2]}/25</span>
                      <span>· Sec 4: {a.sectionScores[3]}/25</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`font-black text-2xl ${color}`}>{a.totalScore} / 100</p>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full inline-block mt-1 ${
                        a.passed
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}
                    >
                      {a.passed ? 'PASSED (≥60)' : 'FAILED (<60)'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
