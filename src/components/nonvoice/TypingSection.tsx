import { useState, useEffect, useRef, useCallback } from "react";

interface TypingSectionProps {
  paragraph: { id: string; text: string; title: string };
  onComplete: (response: string) => void;
}

const TOTAL_MS = 60_000;

export default function TypingSection({ paragraph, onComplete }: TypingSectionProps) {
  const [deadline] = useState(() => Date.now() + TOTAL_MS);
  const [remaining, setRemaining] = useState(TOTAL_MS / 1000);
  const [typed, setTyped] = useState("");
  const submittedRef = useRef(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    onComplete(typed);
  }, [typed, onComplete]);

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

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
  };

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
            <h2 className="text-lg font-semibold text-gray-800">Typing Test</h2>
            <p className="text-sm text-gray-500">Type the paragraph as accurately as possible</p>
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
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Paragraph */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            {paragraph.title}
          </h3>
          <p className="text-gray-800 leading-relaxed text-base select-none">
            {paragraph.text}
          </p>
        </div>

        {/* Right - Textarea */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Your Typing
          </h3>
          <textarea
            ref={textareaRef}
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            onPaste={handlePaste}
            placeholder="Start typing here..."
            autoFocus
            className="flex-1 min-h-[300px] w-full border border-gray-300 rounded-lg p-4 text-gray-800 text-base leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
            <span>{typed.length} characters typed</span>
            <span>{typed.split(/\s+/).filter(Boolean).length} words</span>
          </div>
        </div>
      </div>
    </div>
  );
}
