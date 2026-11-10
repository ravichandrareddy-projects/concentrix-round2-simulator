import { useEffect, useState } from 'react';
import { Volume2, RefreshCw, CheckCircle, XCircle, Headphones } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';
import { ExamMode } from '../../types';
import { shuffle } from '../../utils/helpers';
import { sound } from '../../utils/audio';

interface StoryQuestion {
  question: string;
  options: string[];
  correct: number;
}

interface Story {
  id: string;
  title: string;
  text: string;
  difficulty: string;
  questions: StoryQuestion[];
}

interface Props {
  story: Story;
  questionNumber: number;
  mode: ExamMode;
  isFirstQuestion: boolean;
  onAnswer: (score: number) => void;
}

export default function StoryComprehension({ story, questionNumber, mode, isFirstQuestion, onAnswer }: Props) {
  const { speak, speaking, stop } = useTTS();
  const [phase, setPhase] = useState<'intro' | 'playing' | 'questions'>('intro');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState(mode === 'learning' ? 0.9 : 1.0);

  // Shuffled options for the current question
  const [shuffledOptions, setShuffledOptions] = useState<{ text: string; originalIndex: number }[]>([]);

  // Initialize options when question index changes
  useEffect(() => {
    const q = story.questions[currentQIndex];
    if (q) {
      const mapped = q.options.map((text, idx) => ({ text, originalIndex: idx }));
      setShuffledOptions(shuffle(mapped));
      setSelected(null);
      setSubmitted(false);
    }
  }, [currentQIndex, story.id]);

  // If first question and haven't played yet, start in intro or auto-play
  function handleStartAudio() {
    setPhase('playing');
    setHasPlayedOnce(true);
    speak(story.text, speechSpeed, () => {
      setPhase('questions');
      sound.playSuccess();
    });
  }

  function handleReplayStory() {
    if (mode === 'full') return; // Strict: no replay in Full Exam Mode
    stop();
    setPhase('playing');
    speak(story.text, speechSpeed, () => {
      setPhase('questions');
    });
  }

  function handleSelect(index: number) {
    if (submitted) return;
    setSelected(index);
  }

  function handleSubmit() {
    if (selected === null || submitted) return;
    setSubmitted(true);
    const chosenOriginalIdx = shuffledOptions[selected]?.originalIndex;
    const isCorrect = chosenOriginalIdx === story.questions[currentQIndex].correct;
    if (isCorrect) {
      sound.playSuccess();
    }
  }

  function handleNextQuestion() {
    const chosenOriginalIdx = selected !== null ? shuffledOptions[selected]?.originalIndex : -1;
    const isCorrect = chosenOriginalIdx === story.questions[currentQIndex].correct;
    const score = isCorrect ? 5 : 0;

    // Report answer
    onAnswer(score);

    // If more questions in this story, advance
    if (currentQIndex < story.questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    }
  }

  const currentQ = story.questions[currentQIndex];
  const chosenOriginalIdx = selected !== null ? shuffledOptions[selected]?.originalIndex : -1;
  const isCorrect = submitted && chosenOriginalIdx === currentQ.correct;

  // Render Story Audio Introduction
  if (phase === 'intro') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Section 3 · Story Comprehension</span>
            <h3 className="text-lg font-bold text-white">Audio Story Presentation</h3>
          </div>
          <span className="text-xs bg-purple-900/60 text-purple-300 border border-purple-700/50 px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
            Case: {story.title}
          </span>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 bg-purple-900/30 border border-purple-500/40 rounded-full flex items-center justify-center mx-auto text-purple-400">
            <Headphones className="w-10 h-10" />
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white mb-2">{story.title}</h4>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              You will listen to a realistic customer service and workplace case story.
              The text will <strong>not</strong> be shown on screen.
              Pay close attention to key facts: <span className="text-purple-300 font-semibold">Who, What, When, Where, Why, and Decisions</span>.
            </p>
          </div>

          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-left max-w-md mx-auto space-y-2 text-xs text-slate-300">
            <p className="font-semibold text-slate-200">Exam Guidelines:</p>
            <p>• 5 comprehension questions will follow the story.</p>
            <p>• Each question is worth 5 points (25 points total).</p>
            <p>• {mode === 'full' ? 'In Full Exam Mode: Played strictly once.' : 'Learning Mode allows audio replay if needed.'}</p>
          </div>

          <button
            onClick={handleStartAudio}
            className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-purple-500/20 inline-flex items-center gap-2"
          >
            <Volume2 className="w-5 h-5" /> Start Listening to Story →
          </button>
        </div>
      </div>
    );
  }

  // Render Story Audio Playback
  if (phase === 'playing') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Section 3 · Story Comprehension</span>
            <h3 className="text-lg font-bold text-white">Listening in Progress</h3>
          </div>
          <span className="text-xs bg-purple-900/60 text-purple-300 border border-purple-700/50 px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
            {story.title}
          </span>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-10 shadow-xl text-center space-y-6">
          <div className="flex justify-center items-center gap-2 h-16">
            {[35, 70, 95, 60, 85, 100, 75, 50, 90, 65, 80, 45, 95, 70, 55].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-purple-500 to-indigo-400 rounded-full animate-pulse"
                style={{
                  height: `${h}%`,
                  animationDelay: `${(i * 0.07).toFixed(2)}s`,
                  animationDuration: '0.65s'
                }}
              />
            ))}
          </div>

          <div>
            <h4 className="text-xl font-bold text-purple-300 flex items-center justify-center gap-2">
              <Volume2 className="w-5 h-5 animate-bounce" /> Playing: {story.title}
            </h4>
            <p className="text-slate-400 text-sm mt-2">
              Listen carefully. Questions will unlock automatically when the narrator finishes.
            </p>
          </div>

          <div className="text-xs text-slate-500 italic">
            Story text is hidden during exam playback to evaluate auditory comprehension.
          </div>
        </div>
      </div>
    );
  }

  // Render Comprehension Questions
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Section 3 · Story Comprehension
          </span>
          <h3 className="text-lg font-bold text-white">
            Story Question {currentQIndex + 1} of 5
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {mode === 'learning' && (
            <button
              onClick={handleReplayStory}
              disabled={speaking}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-800 px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Replay Story
            </button>
          )}
          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-medium border border-slate-700">
            5 Points
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
        <div>
          <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
            Context: {story.title}
          </span>
          <h4 className="text-xl font-bold text-white mt-1 leading-snug">
            {currentQ.question}
          </h4>
        </div>

        {/* 4 Multiple Choice Options */}
        <div className="space-y-3">
          {shuffledOptions.map((opt, i) => {
            const isSelected = selected === i;
            const isThisCorrect = opt.originalIndex === currentQ.correct;

            let btnCls = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60';
            if (submitted) {
              if (isThisCorrect) {
                btnCls = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 ring-2 ring-emerald-500/30';
              } else if (isSelected && !isThisCorrect) {
                btnCls = 'border-rose-500 bg-rose-950/40 text-rose-200 ring-2 ring-rose-500/30';
              } else {
                btnCls = 'border-slate-800/60 bg-slate-950/50 text-slate-600';
              }
            } else if (isSelected) {
              btnCls = 'border-purple-500 bg-purple-950/40 text-white ring-2 ring-purple-500/30';
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={submitted}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${btnCls}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isSelected ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-medium text-sm sm:text-base leading-relaxed">
                    {opt.text}
                  </span>
                </div>

                {submitted && isThisCorrect && (
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 ml-2" />
                )}
                {submitted && isSelected && !isThisCorrect && (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Banner after submission */}
        {submitted && (
          <div className={`p-4 rounded-xl border text-sm flex items-start gap-3 ${
            isCorrect
              ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200'
              : 'bg-rose-950/60 border-rose-800 text-rose-200'
          }`}>
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-bold text-base">
                {isCorrect ? 'Correct! (+5 points)' : 'Incorrect (0 points)'}
              </p>
              <p className="text-xs opacity-90 mt-1">
                Correct answer: <strong className="underline">{currentQ.options[currentQ.correct]}</strong>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {!submitted ? (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl py-3.5 font-bold transition-all shadow-lg hover:shadow-purple-500/20"
        >
          {selected === null ? 'Select an answer option above' : 'Confirm Answer →'}
        </button>
      ) : (
        <button
          type="button"
          onClick={handleNextQuestion}
          className="w-full bg-purple-600 hover:bg-purple-500 text-white rounded-xl py-3.5 font-bold transition-all shadow-lg hover:shadow-purple-500/20"
        >
          {currentQIndex < story.questions.length - 1 ? 'Next Story Question →' : 'Complete Section 3 →'}
        </button>
      )}
    </div>
  );
}
