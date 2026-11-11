import { useState, useEffect, useRef, useCallback } from "react";

interface EmailSectionProps {
  scenario: {
    id: string;
    title: string;
    situation: string;
    instructions: string[];
    customerName: string;
  };
  onComplete: (response: string) => void;
}

const TOTAL_MS = 540_000; // 9 minutes

export default function EmailSection({ scenario, onComplete }: EmailSectionProps) {
  const [deadline] = useState(() => Date.now() + TOTAL_MS);
  const [remaining, setRemaining] = useState(TOTAL_MS / 1000);
  const [email, setEmail] = useState("");
  const submittedRef = useRef(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = email.split(/\s+/).filter(Boolean).length;

  const handleSubmit = useCallback(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    onComplete(email);
  }, [email, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) {
        clearInterval(interval);
        handleSubmit();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [deadline, handleSubmit]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Email Writing</h2>
            <p className="text-sm text-gray-500">
              Compose a professional email response
            </p>
          </div>
          <div
            className={`font-mono text-2xl font-bold px-4 py-2 rounded-lg ${
              remaining <= 60
                ? "bg-red-100 text-red-600 animate-pulse"
                : "bg-blue-50 text-blue-700"
            }`}
          >
            {formatTime(remaining)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Scenario */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Scenario
          </h3>

          <div className="space-y-5">
            {/* Title */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Subject
              </p>
              <p className="text-gray-800 font-medium text-base">{scenario.title}</p>
            </div>

            {/* Customer */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Customer
              </p>
              <p className="text-gray-800 text-base">{scenario.customerName}</p>
            </div>

            {/* Situation */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Situation
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">{scenario.situation}</p>
            </div>

            {/* Instructions */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Instructions
              </p>
              <ul className="space-y-2">
                {scenario.instructions.map((inst, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{inst}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Email Composition */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Your Email
          </h3>

          {/* Email fields display */}
          <div className="border border-gray-200 rounded-lg mb-4 bg-gray-50">
            <div className="flex items-center border-b border-gray-200 px-4 py-2">
              <span className="text-xs font-medium text-gray-400 w-12">To:</span>
              <span className="text-sm text-gray-700">{scenario.customerName}</span>
            </div>
            <div className="flex items-center px-4 py-2">
              <span className="text-xs font-medium text-gray-400 w-12">Re:</span>
              <span className="text-sm text-gray-700">{scenario.title}</span>
            </div>
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={`Dear ${scenario.customerName},\n\nStart writing your email response here...`}
            autoFocus
            className="flex-1 min-h-[350px] w-full border border-gray-300 rounded-lg p-4 text-gray-800 text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {/* Footer stats */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {wordCount} {wordCount === 1 ? "word" : "words"}
              </span>
              {wordCount > 0 && wordCount < 100 && (
                <span className="inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-200">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Aim for at least 100 words
                </span>
              )}
            </div>
            <button
              onClick={handleSubmit}
              disabled={submittedRef.current}
              className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
