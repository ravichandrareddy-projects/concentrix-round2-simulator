import { useState, useEffect, useRef, useCallback } from "react";

interface StorySectionProps {
  stories: Array<{ id: string; title: string; text: string }>;
  onComplete: (answers: Record<string, string>) => void;
}

const READ_MS = 30_000;
const WRITE_MS = 90_000;

type Phase = "read" | "write";

export default function StorySection({ stories, onComplete }: StorySectionProps) {
  const [storyIndex, setStoryIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("read");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [deadline, setDeadline] = useState(() => Date.now() + READ_MS);
  const [remaining, setRemaining] = useState(READ_MS / 1000);
  const submittedRef = useRef(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const total = stories.length;
  const currentStory = stories[storyIndex];

  const advancePhase = useCallback(() => {
    if (phase === "read") {
      // Move to write phase
      setPhase("write");
      setDeadline(Date.now() + WRITE_MS);
      setRemaining(WRITE_MS / 1000);
    } else {
      // Write phase done — save answer and move to next story
      const updated = { ...answers };
      if (currentStory) {
        updated[currentStory.id] = currentAnswer;
      }

      if (storyIndex >= total - 1) {
        if (!submittedRef.current) {
          submittedRef.current = true;
          onComplete(updated);
        }
        return;
      }

      setAnswers(updated);
      setCurrentAnswer("");
      setStoryIndex((prev) => prev + 1);
      setPhase("read");
      setDeadline(Date.now() + READ_MS);
      setRemaining(READ_MS / 1000);
    }
  }, [phase, answers, currentAnswer, currentStory, storyIndex, total, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) {
        clearInterval(interval);
        advancePhase();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [deadline, advancePhase]);

  // Focus textarea when entering write phase
  useEffect(() => {
    if (phase === "write") {
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }, [phase]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = ((storyIndex + 1) / total) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Story Comprehension</h2>
              <p className="text-sm text-gray-500">
                Story {storyIndex + 1} of {total} —{" "}
                <span
                  className={`font-medium ${
                    phase === "read" ? "text-amber-600" : "text-green-600"
                  }`}
                >
                  {phase === "read" ? "Reading Phase" : "Writing Phase"}
                </span>
              </p>
            </div>
            <div
              className={`font-mono text-2xl font-bold px-4 py-2 rounded-lg ${
                remaining <= 10
                  ? "bg-red-100 text-red-600 animate-pulse"
                  : phase === "read"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-green-50 text-green-700"
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

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {phase === "read" ? (
            <>
              {/* Read phase */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wide">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Read Only
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{currentStory.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                {currentStory.text}
              </p>
              <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700">
                  📖 Read carefully. You will need to write what you understood after this phase.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Write phase */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wide">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Write
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{currentStory.title}</h3>
              <p className="text-sm text-gray-500 mb-6">
                Write what you understood from the story in your own words.
              </p>
              <textarea
                ref={textareaRef}
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="Write what you understood from the story..."
                className="w-full min-h-[250px] border border-gray-300 rounded-lg p-4 text-gray-800 text-base leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <div className="mt-3 text-sm text-gray-500">
                {currentAnswer.split(/\s+/).filter(Boolean).length} words
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
