import { useState, useEffect, useRef, useCallback } from "react";

interface DictationSectionProps {
  sentences: Array<{ id: string; sentence: string }>;
  onComplete: (answers: Record<string, string>) => void;
}

const PER_QUESTION_MS = 25_000;

export default function DictationSection({ sentences, onComplete }: DictationSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [deadline, setDeadline] = useState(() => Date.now() + PER_QUESTION_MS);
  const [remaining, setRemaining] = useState(PER_QUESTION_MS / 1000);
  const [speechError, setSpeechError] = useState(false);
  const submittedRef = useRef(false);
  const spokenRef = useRef<Set<number>>(new Set());
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const total = sentences.length;
  const currentSentence = sentences[currentIndex];

  const speakSentence = useCallback(
    (index: number) => {
      if (spokenRef.current.has(index)) return;
      spokenRef.current.add(index);
      setSpeechError(false);

      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(sentences[index].sentence);
        utterance.rate = 0.9;
        utterance.pitch = 1;

        // Try to pick en-IN or en-US voice
        const voices = window.speechSynthesis.getVoices();
        const preferred = voices.find(
          (v) => v.lang === "en-IN" || v.lang === "en-US"
        );
        if (preferred) utterance.voice = preferred;
        utterance.lang = preferred?.lang ?? "en-US";

        utterance.onerror = () => setSpeechError(true);
        window.speechSynthesis.speak(utterance);
      } catch {
        setSpeechError(true);
      }
    },
    [sentences]
  );

  // Speak the current sentence on index change
  useEffect(() => {
    // Voices may load asynchronously
    const trySpeak = () => speakSentence(currentIndex);

    if (window.speechSynthesis.getVoices().length > 0) {
      trySpeak();
    } else {
      window.speechSynthesis.onvoiceschanged = () => trySpeak();
      // Fallback if voices already loaded but event doesn't fire
      setTimeout(trySpeak, 300);
    }
  }, [currentIndex, speakSentence]);

  const advanceToNext = useCallback(() => {
    window.speechSynthesis.cancel();
    const updated = { ...answers };
    if (currentSentence) {
      updated[currentSentence.id] = currentAnswer;
    }

    if (currentIndex >= total - 1) {
      if (!submittedRef.current) {
        submittedRef.current = true;
        onComplete(updated);
      }
      return;
    }

    setAnswers(updated);
    setCurrentAnswer("");
    setSpeechError(false);
    setCurrentIndex((prev) => prev + 1);
    setDeadline(Date.now() + PER_QUESTION_MS);
  }, [answers, currentAnswer, currentIndex, currentSentence, onComplete, total]);

  useEffect(() => {
    const interval = setInterval(() => {
      const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) {
        clearInterval(interval);
        advanceToNext();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [deadline, advanceToNext]);

  useEffect(() => {
    textareaRef.current?.focus();
  }, [currentIndex]);

  const handleRetry = () => {
    spokenRef.current.delete(currentIndex);
    speakSentence(currentIndex);
  };

  const formatTime = (s: number) => `0:${s.toString().padStart(2, "0")}`;
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Dictation</h2>
              <p className="text-sm text-gray-500">
                Sentence {currentIndex + 1} of {total}
              </p>
            </div>
            <div
              className={`font-mono text-2xl font-bold px-4 py-2 rounded-lg ${
                remaining <= 10
                  ? "bg-red-100 text-red-600 animate-pulse"
                  : "bg-blue-50 text-blue-700"
              }`}
            >
              {formatTime(remaining)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Dictation card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Audio status */}
          <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h2l3.5-4.5A.5.5 0 0110.5 5v14a.5.5 0 01-.854.354L6 15z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">
                Listen carefully — the sentence plays only once.
              </p>
              <p className="text-xs text-gray-500">
                Type exactly what you hear in the text area below.
              </p>
            </div>
          </div>

          {/* Speech error */}
          {speechError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
              <p className="text-sm text-red-700">
                Audio playback failed. Click retry to hear the sentence.
              </p>
              <button
                onClick={handleRetry}
                className="px-4 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Type what you heard
            </label>
            <textarea
              ref={textareaRef}
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="Start typing what you heard..."
              className="w-full min-h-[180px] border border-gray-300 rounded-lg p-4 text-gray-800 text-base leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
