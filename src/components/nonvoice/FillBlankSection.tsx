import { useState, useEffect, useRef, useCallback } from "react";

interface FillBlankSectionProps {
  questions: Array<{ id: string; sentenceWithBlank: string }>;
  onComplete: (answers: Record<string, string>) => void;
}

const PER_QUESTION_MS = 25_000;

export default function FillBlankSection({ questions, onComplete }: FillBlankSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [deadline, setDeadline] = useState(() => Date.now() + PER_QUESTION_MS);
  const [remaining, setRemaining] = useState(PER_QUESTION_MS / 1000);
  const submittedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const total = questions.length;
  const currentQuestion = questions[currentIndex];

  const advanceToNext = useCallback(() => {
    const updated = { ...answers };
    if (currentQuestion) {
      updated[currentQuestion.id] = currentAnswer;
    }

    if (currentIndex >= total - 1) {
      // Last question — submit all
      if (!submittedRef.current) {
        submittedRef.current = true;
        onComplete(updated);
      }
      return;
    }

    setAnswers(updated);
    setCurrentAnswer("");
    setCurrentIndex((prev) => prev + 1);
    setDeadline(Date.now() + PER_QUESTION_MS);
  }, [answers, currentAnswer, currentIndex, currentQuestion, onComplete, total]);

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

  // Focus input on question change
  useEffect(() => {
    inputRef.current?.focus();
  }, [currentIndex]);

  const formatTime = (s: number) => {
    return `0:${s.toString().padStart(2, "0")}`;
  };

  // Render sentence with blank highlighted
  const renderSentence = (sentence: string) => {
    const parts = sentence.split("___");
    if (parts.length < 2) {
      return <span className="text-gray-800 text-lg leading-relaxed">{sentence}</span>;
    }
    return (
      <span className="text-gray-800 text-lg leading-relaxed">
        {parts[0]}
        <span className="inline-block mx-1 px-3 py-0.5 bg-blue-100 border-b-2 border-blue-400 rounded text-blue-600 font-semibold min-w-[80px] text-center">
          {currentAnswer || "______"}
        </span>
        {parts.slice(1).join("___")}
      </span>
    );
  };

  // Progress bar percentage
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Fill in the Blank</h2>
              <p className="text-sm text-gray-500">
                Question {currentIndex + 1} of {total}
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
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Complete the sentence
            </p>
            <div className="py-4">{renderSentence(currentQuestion.sentenceWithBlank)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Your answer</label>
            <input
              ref={inputRef}
              type="text"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") advanceToNext();
              }}
              placeholder="Type your answer..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="mt-2 text-xs text-gray-400">Press Enter to submit and move to next</p>
          </div>
        </div>
      </div>
    </div>
  );
}
