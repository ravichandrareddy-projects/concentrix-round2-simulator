import { useEffect, useRef, useState } from 'react';
import { Mic, MicOff, RefreshCw, Volume2, Keyboard, CheckCircle, AlertCircle } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';
import { wordDiff, wordErrorRate, werToScore } from '../../utils/helpers';
import { sound } from '../../utils/audio';
import { ExamMode } from '../../types';

interface Sentence {
  id: string;
  text: string;
  difficulty: string;
}

interface Props {
  sentence: Sentence;
  questionNumber: number;
  mode: ExamMode;
  onAnswer: (score: number, details: { wer: number; transcript: string; diff: ReturnType<typeof wordDiff> }) => void;
}

export default function ListenRepeat({ sentence, questionNumber, mode, onAnswer }: Props) {
  const { speak, speaking, supported: ttsSupported, voices, selectedVoice, setSelectedVoice } = useTTS();
  const { state: recState, transcript, supported: recSupported, permissionError, startListening, stopListening, reset } = useSpeechRecognition();

  const [phase, setPhase] = useState<'ready' | 'playing' | 'recording' | 'submitted'>('ready');
  const [playedCount, setPlayedCount] = useState(0);
  const [manualText, setManualText] = useState('');
  const [useManualInput, setUseManualInput] = useState(false);
  const [speechRate, setSpeechRate] = useState(mode === 'learning' ? 0.9 : 1.0);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ wer: number; score: number; diff: ReturnType<typeof wordDiff>; finalInput: string } | null>(null);

  const autoRecordRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-play sentence on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      playSentence();
    }, 500);
    return () => {
      clearTimeout(timer);
      if (autoRecordRef.current) clearTimeout(autoRecordRef.current);
    };
  }, [sentence.id]);

  function playSentence() {
    if (phase === 'submitted') return;
    if (mode === 'full' && playedCount >= 1) return; // Strict: only once in Full Exam Mode

    setPhase('playing');
    setPlayedCount(prev => prev + 1);

    speak(sentence.text, speechRate, () => {
      setPhase('recording');
      sound.playBeep();
      // Auto-start recording if supported and not in manual mode
      if (recSupported && !useManualInput) {
        startListening();
      }
    });
  }

  function handleStartRecording() {
    sound.playBeep();
    reset();
    setPhase('recording');
    startListening();
  }

  function handleStopRecording() {
    stopListening();
  }

  function handleSubmit() {
    if (submitted) return;
    setSubmitted(true);
    stopListening();

    const finalHypothesis = (useManualInput ? manualText : transcript).trim();
    const wer = wordErrorRate(sentence.text, finalHypothesis);
    const score = werToScore(wer);
    const diff = wordDiff(sentence.text, finalHypothesis);

    if (score >= 3) {
      sound.playSuccess();
    }

    setResult({ wer, score, diff, finalInput: finalHypothesis });
    setPhase('submitted');
  }

  function handleNext() {
    if (result) {
      onAnswer(result.score, {
        wer: result.wer,
        transcript: result.finalInput,
        diff: result.diff
      });
    }
  }

  const accuracy = result ? Math.round((1 - result.wer) * 100) : 0;
  const canReplay = mode === 'learning' || (mode === 'rapid' && playedCount < 2);

  return (
    <div className="space-y-6">
      {/* Question Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Section 1 · Listen & Repeat</span>
          <h3 className="text-lg font-bold text-white">Question {questionNumber} of 5</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider ${
            sentence.difficulty === 'easy' ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50' :
            sentence.difficulty === 'medium' ? 'bg-amber-900/60 text-amber-300 border border-amber-700/50' :
            'bg-rose-900/60 text-rose-300 border border-rose-700/50'
          }`}>
            {sentence.difficulty}
          </span>
          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-medium border border-slate-700">
            5 Points
          </span>
        </div>
      </div>

      {/* Main Interaction Card */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-xl">
        {/* Phase: Ready */}
        {phase === 'ready' && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-blue-900/30 border border-blue-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <Volume2 className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-slate-200 font-medium text-lg">Preparing audio...</p>
            <p className="text-slate-400 text-sm mt-1">Listen closely and repeat the sentence exactly as spoken.</p>
            <button
              onClick={playSentence}
              className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/20"
            >
              Play Sentence Now
            </button>
          </div>
        )}

        {/* Phase: Playing Audio */}
        {phase === 'playing' && (
          <div className="text-center py-8">
            <div className="flex justify-center items-center gap-1.5 mb-6 h-12">
              {[40, 65, 90, 50, 80, 100, 70, 45, 85, 60, 95, 55].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full animate-pulse"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${(i * 0.08).toFixed(2)}s`,
                    animationDuration: '0.6s'
                  }}
                />
              ))}
            </div>
            <p className="text-blue-300 font-semibold text-lg flex items-center justify-center gap-2">
              <Volume2 className="w-5 h-5 animate-bounce" /> Listening to sentence...
            </p>
            <p className="text-slate-400 text-sm mt-2">
              The written text is hidden. Keep headphones on and listen actively.
            </p>
            {mode === 'full' && (
              <span className="inline-block mt-3 text-xs bg-amber-950/80 border border-amber-800 text-amber-300 px-3 py-1 rounded-full">
                Full Exam: Plays only ONCE
              </span>
            )}
          </div>
        )}

        {/* Phase: Recording / Candidate Repetition */}
        {phase === 'recording' && (
          <div className="text-center py-4 space-y-6">
            {!useManualInput ? (
              <>
                <div className="relative inline-block">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                    recState === 'listening'
                      ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40 ring-8 ring-rose-600/20 animate-pulse'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {recState === 'listening' ? <Mic className="w-10 h-10 animate-bounce" /> : <MicOff className="w-10 h-10" />}
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold text-white">
                    {recState === 'listening' ? '🔴 Recording... Repeat the sentence now!' : 'Microphone Ready'}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">Speak clearly at a natural conversational pace.</p>
                </div>

                {/* Live Speech Recognition Transcript Box */}
                <div className="min-h-[70px] bg-slate-950 rounded-xl p-4 border border-slate-800 text-left">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Detected Speech</p>
                  <p className="text-slate-200 text-base font-medium italic">
                    {transcript ? `"${transcript}"` : (
                      <span className="text-slate-600">Waiting for your voice... speak into the microphone.</span>
                    )}
                  </p>
                </div>

                {permissionError && (
                  <div className="bg-rose-950/80 border border-rose-800 rounded-xl p-3 text-xs text-rose-300 flex items-start gap-2 text-left">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Microphone Notice</p>
                      <p>{permissionError}</p>
                      <button
                        onClick={() => setUseManualInput(true)}
                        className="mt-2 text-cyan-400 underline font-semibold"
                      >
                        Switch to keyboard input fallback →
                      </button>
                    </div>
                  </div>
                )}

                {/* Recording Control Buttons */}
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  {recState !== 'listening' ? (
                    <button
                      onClick={handleStartRecording}
                      className="bg-rose-600 hover:bg-rose-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-rose-600/20"
                    >
                      <Mic className="w-4 h-4" /> Start Recording
                    </button>
                  ) : (
                    <button
                      onClick={handleStopRecording}
                      className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2"
                    >
                      <MicOff className="w-4 h-4" /> Stop Recording
                    </button>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={!transcript && recState === 'listening'}
                    className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white px-8 py-2.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/20"
                  >
                    Submit Response →
                  </button>
                </div>
              </>
            ) : (
              /* Fallback: Keyboard typing input */
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <Keyboard className="w-4 h-4 text-blue-400" /> Type the sentence you heard:
                  </label>
                  <button
                    onClick={() => setUseManualInput(false)}
                    className="text-xs text-blue-400 hover:underline"
                  >
                    Use Microphone instead
                  </button>
                </div>
                <textarea
                  value={manualText}
                  onChange={(e) => setManualText(e.target.value)}
                  placeholder="Type the exact sentence you heard..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!manualText.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white py-3 rounded-xl font-semibold transition-all"
                >
                  Submit Typed Response →
                </button>
              </div>
            )}

            {/* Optional Replay in Learning Mode */}
            {canReplay && (
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <button
                  onClick={playSentence}
                  disabled={speaking}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Replay sentence ({mode === 'learning' ? 'Learning Mode' : 'Rapid Practice'})
                </button>
                {!useManualInput && (
                  <button
                    onClick={() => setUseManualInput(true)}
                    className="text-slate-400 hover:text-slate-300 underline"
                  >
                    Having mic issues? Type text instead
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Phase: Submitted Feedback */}
        {phase === 'submitted' && result && (
          <div className="space-y-6">
            {/* Score Banner */}
            <div className="text-center py-2">
              <div className={`text-6xl font-black mb-1 ${
                result.score >= 4 ? 'text-emerald-400' :
                result.score >= 3 ? 'text-blue-400' :
                result.score >= 2 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                +{result.score} <span className="text-2xl font-bold text-slate-400">/ 5 pts</span>
              </div>
              <p className="text-slate-300 font-semibold text-lg">{accuracy}% Accuracy Match</p>
              <p className="text-slate-500 text-xs mt-0.5">Scored via normalized word similarity and word order analysis.</p>
            </div>

            {/* Comparative Breakdown */}
            <div className="space-y-4 bg-slate-950 rounded-xl p-5 border border-slate-800 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" /> Original Sentence
                </p>
                <p className="text-white font-medium text-base bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  {sentence.text}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5 flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-slate-400" /> Candidate Recognized Response
                </p>
                <p className="text-slate-300 italic text-base bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  {result.finalInput ? `"${result.finalInput}"` : '(No speech detected or empty input)'}
                </p>
              </div>

              {/* Word Level Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="bg-emerald-950/30 border border-emerald-900/60 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-emerald-400 mb-1.5">Correct Words ({result.diff.correct.length})</p>
                  <div className="flex flex-wrap gap-1">
                    {result.diff.correct.length > 0 ? (
                      result.diff.correct.map((w, i) => (
                        <span key={i} className="bg-emerald-900/80 text-emerald-200 text-xs px-2 py-0.5 rounded font-mono">
                          {w}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-500">None</span>
                    )}
                  </div>
                </div>

                <div className="bg-rose-950/30 border border-rose-900/60 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-rose-400 mb-1.5">Missing Words ({result.diff.missing.length})</p>
                  <div className="flex flex-wrap gap-1">
                    {result.diff.missing.length > 0 ? (
                      result.diff.missing.map((w, i) => (
                        <span key={i} className="bg-rose-900/80 text-rose-200 text-xs px-2 py-0.5 rounded font-mono">
                          {w}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-emerald-400">All words present!</span>
                    )}
                  </div>
                </div>

                <div className="bg-amber-950/30 border border-amber-900/60 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-amber-400 mb-1.5">Extra/Substituted ({result.diff.extra.length})</p>
                  <div className="flex flex-wrap gap-1">
                    {result.diff.extra.length > 0 ? (
                      result.diff.extra.map((w, i) => (
                        <span key={i} className="bg-amber-900/80 text-amber-200 text-xs px-2 py-0.5 rounded font-mono">
                          {w}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-500">None</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-bold text-base transition-all shadow-lg hover:shadow-blue-500/20"
            >
              Continue to Next Question →
            </button>
          </div>
        )}
      </div>

      {/* Voice & Rate Controls (Visible in Learning Mode) */}
      {mode === 'learning' && (
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span>Speech Speed:</span>
            {[0.8, 1.0, 1.2].map(rate => (
              <button
                key={rate}
                onClick={() => setSpeechRate(rate)}
                className={`px-2.5 py-1 rounded font-medium ${
                  speechRate === rate ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>

          {voices.length > 0 && (
            <div className="flex items-center gap-2 text-slate-400">
              <span>Voice:</span>
              <select
                value={selectedVoice?.name || ''}
                onChange={(e) => {
                  const v = voices.find(v => v.name === e.target.value);
                  if (v) setSelectedVoice(v);
                }}
                className="bg-slate-800 border border-slate-700 text-slate-200 rounded px-2 py-1 max-w-[200px] truncate"
              >
                {voices.map(v => (
                  <option key={v.name} value={v.name}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
