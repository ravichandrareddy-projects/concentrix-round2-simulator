import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Mic, Monitor, Speaker, XCircle, ArrowRight, ArrowLeft, Volume2 } from 'lucide-react';
import { ExamMode } from '../types';
import { sound } from '../utils/audio';

interface Props {
  mode: ExamMode;
  onProceed: () => void;
  onBack: () => void;
}

type CheckStatus = 'pending' | 'ok' | 'fail';

export default function SystemCheck({ mode, onProceed, onBack }: Props) {
  const [tts, setTts] = useState<CheckStatus>('pending');
  const [mic, setMic] = useState<CheckStatus>('pending');
  const [browser, setBrowser] = useState<CheckStatus>('pending');
  const [screenRes, setScreenRes] = useState<CheckStatus>('pending');
  const [micLevel, setMicLevel] = useState(0);
  const [testedAudio, setTestedAudio] = useState(false);
  const [resolutionInfo, setResolutionInfo] = useState('');

  const audioStreamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // 1. Text to Speech Check
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setTts('ok');
    } else {
      setTts('fail');
    }

    // 2. Speech Recognition (Chrome / WebKit) Check
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SR) {
      setBrowser('ok');
    } else {
      setBrowser('fail');
    }

    // 3. Screen Resolution Check (Desktop first: >= 1024px is ideal, min 768px)
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setResolutionInfo(`${width} × ${height} px`);
      if (width >= 768) {
        setScreenRes('ok');
      } else {
        setScreenRes('fail');
      }
    }

    // 4. Microphone Stream & Visual Level Check
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          audioStreamRef.current = stream;
          setMic('ok');

          // Audio Context meter
          try {
            const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
            const audioCtx = new AudioCtx();
            const analyser = audioCtx.createAnalyser();
            const source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);
            analyser.fftSize = 256;
            const dataArray = new Uint8Array(analyser.frequencyBinCount);

            const updateMeter = () => {
              analyser.getByteFrequencyData(dataArray);
              let sum = 0;
              for (let i = 0; i < dataArray.length; i++) {
                sum += dataArray[i];
              }
              const avg = sum / dataArray.length;
              setMicLevel(Math.min(100, Math.round((avg / 128) * 100)));
              animFrameRef.current = requestAnimationFrame(updateMeter);
            };
            updateMeter();
          } catch (e) {
            // Volume meter optional
          }
        })
        .catch(() => {
          setMic('fail');
        });
    } else {
      setMic('fail');
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  function handleTestAudio() {
    sound.playChime();
    setTestedAudio(true);
    setTimeout(() => {
      const utter = new SpeechSynthesisUtterance('Audio check complete. Your speakers are ready for Concentrix Round 2.');
      utter.lang = 'en-US';
      utter.rate = 1.0;
      window.speechSynthesis.speak(utter);
    }, 250);
  }

  const checks = [
    {
      label: 'Audio Playback (Speakers/Headphones)',
      status: tts,
      icon: Speaker,
      info: tts === 'ok' ? 'Web Speech Synthesis active' : 'SpeechSynthesis API not detected in browser',
      action: handleTestAudio,
      actionLabel: testedAudio ? '✓ Audio Tested (Click to repeat)' : 'Click to Play Audio Test Sample',
    },
    {
      label: 'Microphone & Voice Input',
      status: mic,
      icon: Mic,
      info:
        mic === 'ok'
          ? 'Microphone access granted. Speak to test the live meter below.'
          : mic === 'pending'
          ? 'Requesting browser microphone permission...'
          : 'Microphone permission blocked or unavailable. Keyboard typing fallback will be enabled.',
      showMeter: mic === 'ok',
    },
    {
      label: 'Speech Recognition Engine',
      status: browser,
      icon: Monitor,
      info:
        browser === 'ok'
          ? 'Google Chrome Web Speech API available'
          : 'WebkitSpeechRecognition not found. Please use Google Chrome on Linux for optimal speech input.',
    },
    {
      label: 'Display & Screen Resolution',
      status: screenRes,
      icon: Monitor,
      info:
        screenRes === 'ok'
          ? `Resolution ${resolutionInfo} meets desktop assessment standards`
          : `Resolution ${resolutionInfo} is narrower than recommended. Fullscreen recommended.`,
    },
  ];

  const readyToProceed = tts === 'ok';

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl space-y-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Pre-Assessment Setup</span>
          <h2 className="text-2xl font-bold text-white mt-1">System Diagnostic & Device Verification</h2>
          <p className="text-slate-400 text-sm mt-1">
            Concentrix requires verified audio output and speech input to evaluate pronunciation and comprehension.
          </p>
        </div>

        {/* Diagnostic Items */}
        <div className="space-y-3.5">
          {checks.map((c) => (
            <div key={c.label} className="bg-slate-950 rounded-2xl p-4 border border-slate-800/90 flex items-start gap-4">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  c.status === 'ok'
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800'
                    : c.status === 'fail'
                    ? 'bg-rose-950/80 text-rose-400 border border-rose-800'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                <c.icon className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm text-slate-200">{c.label}</p>
                  {c.status === 'ok' && (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                      <CheckCircle className="w-4 h-4" /> Ready
                    </span>
                  )}
                  {c.status === 'fail' && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 font-semibold">
                      <XCircle className="w-4 h-4" /> Notice
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 mt-1">{c.info}</p>

                {c.action && (
                  <button
                    type="button"
                    onClick={c.action}
                    className="mt-2.5 text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5 bg-blue-950/60 border border-blue-800/70 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> {c.actionLabel}
                  </button>
                )}

                {/* Live Mic Level Bar */}
                {c.showMeter && (
                  <div className="mt-3">
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>Live Mic Input Level:</span>
                      <span className="font-mono text-emerald-400">{micLevel}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-75"
                        style={{ width: `${Math.max(5, micLevel)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Mode Summary */}
        <div className="bg-slate-950 rounded-2xl p-4 border border-blue-900/40 text-xs flex items-center justify-between">
          <div>
            <span className="text-slate-400">Selected Practice Mode:</span>
            <p className="font-bold text-sm text-blue-300 mt-0.5">
              {mode === 'full'
                ? '📋 Full Exam Simulator (15 Minutes · 20 Questions)'
                : mode === 'rapid'
                ? '⚡ Rapid Practice Mode (~10 Minutes · High Pace)'
                : '📚 Learning & Mastery Mode (Replays + Explanations)'}
            </p>
          </div>
          <span className="text-right text-slate-400">
            Pass Threshold: <strong className="text-emerald-400">60/100</strong>
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl py-3.5 font-bold transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>

          <button
            type="button"
            onClick={onProceed}
            className={`flex-2 flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-base transition-all shadow-lg ${
              readyToProceed
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
                : 'bg-amber-600 hover:bg-amber-500 text-white'
            }`}
          >
            Enter Assessment Room <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
