import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { ExamMode, QuestionResult, SectionId } from '../types';
import { LISTEN_SENTENCES, MODERATION_SCENARIOS, APTITUDE_QUESTIONS, STORIES } from '../data/questionBank';
import { formatTime, pickRandom } from '../utils/helpers';
import SectionIntro from './SectionIntro';
import ListenRepeat from './sections/ListenRepeat';
import StoryComprehension from './sections/StoryComprehension';
import MixedAptitude from './sections/MixedAptitude';
import ContentModeration from './sections/ContentModeration';

interface Props {
  candidateName?: string;
  mode: ExamMode;
  learningQuestionCount?: number; // 5, 10, 20, or 30 questions
  onComplete: (results: QuestionResult[], timeTaken: number, sectionScores: [number, number, number, number]) => void;
}

type Phase = 'section-intro' | 'question';

export default function ExamFlow({ candidateName, mode, learningQuestionCount = 10, onComplete }: Props) {
  // Question count per section:
  // Learning Mode: user-selected count (5, 10, 20, or 30)
  // Full / Rapid Mode: 5 questions per section (20 questions total)
  const effectiveCount = mode === 'learning' ? learningQuestionCount : 5;

  // Session 1: effectiveCount sentences from 125-sentence bank (all 7-17 words)
  const [sentences] = useState(() => pickRandom(LISTEN_SENTENCES, effectiveCount));

  // Session 2: Stories configured according to effectiveCount:
  // <= 5: 1 story, 5 questions
  // 10: 1 story, all 10 questions
  // 20: 2 stories, all 10 questions each
  // 30: 3 stories, all 10 questions each
  const [stories] = useState(() => {
    if (effectiveCount <= 5) {
      const chosen = pickRandom(STORIES, 1)[0];
      return [{
        ...chosen,
        questions: pickRandom(chosen.questions, 5)
      }];
    } else if (effectiveCount === 10) {
      return pickRandom(STORIES, 1);
    } else if (effectiveCount === 20) {
      return pickRandom(STORIES, 2);
    } else {
      return pickRandom(STORIES, 3);
    }
  });

  // Session 3: effectiveCount questions featuring the exact YouTube screenshot questions (shl1, odd1, ret1) + practice questions
  const [aptitudeQuestions] = useState(() => {
    const q1 = APTITUDE_QUESTIONS.find(q => q.id === 'shl1');
    const q2 = APTITUDE_QUESTIONS.find(q => q.id === 'odd1');
    const q3 = APTITUDE_QUESTIONS.find(q => q.id === 'ret1');
    const others = APTITUDE_QUESTIONS.filter(q => q.id !== 'shl1' && q.id !== 'odd1' && q.id !== 'ret1');

    const screenshotPicks = [q1, q2, q3].filter(Boolean) as typeof APTITUDE_QUESTIONS;
    const remainingNeeded = Math.max(0, effectiveCount - screenshotPicks.length);
    const additional = pickRandom(others, remainingNeeded);

    return [...screenshotPicks, ...additional].slice(0, effectiveCount);
  });

  // Session 4: effectiveCount moderation scenarios drawn from 100-scenario bank
  const [scenarios] = useState(() => pickRandom(MODERATION_SCENARIOS, effectiveCount));

  const [section, setSection] = useState<SectionId>(1);
  const [phase, setPhase] = useState<Phase>('section-intro');

  // Sub-indices for questions within sections
  const [s1Index, setS1Index] = useState(0);

  // Session 2 multi-story tracking
  const [s2StoryIndex, setS2StoryIndex] = useState(0); // which story (0, 1, 2)
  const [s2GlobalIndex, setS2GlobalIndex] = useState(0); // 0 to effectiveCount - 1

  const [aptIndex, setAptIndex] = useState(0);
  const [s4Index, setS4Index] = useState(0);

  const [results, setResults] = useState<QuestionResult[]>([]);
  const [sectionScores, setSectionScores] = useState<[number, number, number, number]>([0, 0, 0, 0]);
  const resultsRef = useRef<QuestionResult[]>([]);
  const sectionScoresRef = useRef<[number, number, number, number]>([0, 0, 0, 0]);

  // Timers: Full Exam: 15 min, Rapid Practice: 10 min, Learning: 100% UNTIMED
  const totalSeconds = mode === 'full' ? 15 * 60 : mode === 'rapid' ? 10 * 60 : 0;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime] = useState(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [warned, setWarned] = useState(false);

  useEffect(() => {
    if (mode === 'learning') {
      // 100% untimed practice: track elapsed time with no deadline or cutoff
      const interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      // Countdown timer for Exam and Rapid modes
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current!);
            finishExam();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current!);
      };
    }
  }, [mode]);

  useEffect(() => {
    if (mode !== 'learning' && timeLeft === 120 && !warned) {
      setWarned(true);
    }
  }, [mode, timeLeft, warned]);

  function addResult(result: QuestionResult) {
    resultsRef.current.push(result);
    setResults([...resultsRef.current]);

    const idx = result.section - 1;
    sectionScoresRef.current[idx] += result.earned;
    setSectionScores([...sectionScoresRef.current]);
  }

  function finishExam() {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeTaken = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    onComplete(resultsRef.current, timeTaken, sectionScoresRef.current);
  }

  function advanceSection() {
    if (section < 4) {
      setSection((s) => (s + 1) as SectionId);
      setPhase('section-intro');
      setS1Index(0);
      setS2StoryIndex(0);
      setS2GlobalIndex(0);
      setAptIndex(0);
      setS4Index(0);
    } else {
      finishExam();
    }
  }

  function handleSectionStart() {
    setPhase('question');
  }

  // Points per question in each section (total 25 marks per section)
  const pointsPerQuestion = 25 / effectiveCount;

  // ---- Session 1: Listen & Repeat ----
  function handleListenAnswer(score: number) {
    // score from ListenRepeat is on a 0-5 scale; normalize to pointsPerQuestion
    const normalizedScore = (score / 5) * pointsPerQuestion;
    addResult({
      questionId: sentences[s1Index].id,
      section: 1,
      earned: normalizedScore,
      max: pointsPerQuestion,
      correct: score >= 3
    });
    if (s1Index < sentences.length - 1) {
      setS1Index(prev => prev + 1);
    } else {
      advanceSection();
    }
  }

  // ---- Session 2: Story Listening ----
  function handleStoryAnswer(score: number) {
    const currentStory = stories[s2StoryIndex];
    addResult({
      questionId: `${currentStory.id}_q${s2GlobalIndex}`,
      section: 2,
      earned: score,
      max: pointsPerQuestion,
      correct: score > 0
    });

    const nextGlobal = s2GlobalIndex + 1;
    setS2GlobalIndex(nextGlobal);

    if (nextGlobal < effectiveCount) {
      // Check if we need to advance to the next story
      const questionsPerStory = stories[s2StoryIndex].questions.length;
      const currentStoryLocalQ = s2GlobalIndex % questionsPerStory;
      if (currentStoryLocalQ === questionsPerStory - 1 && s2StoryIndex < stories.length - 1) {
        setS2StoryIndex(prev => prev + 1);
      }
    } else {
      advanceSection();
    }
  }

  // ---- Session 3: Mixed Aptitude & Reasoning ----
  function handleAptitudeAnswer(score: number) {
    const isCorrect = score > 0;
    const earned = isCorrect ? pointsPerQuestion : 0;
    addResult({
      questionId: aptitudeQuestions[aptIndex].id,
      section: 3,
      earned: earned,
      max: pointsPerQuestion,
      correct: isCorrect
    });
    if (aptIndex < aptitudeQuestions.length - 1) {
      setAptIndex(prev => prev + 1);
    } else {
      advanceSection();
    }
  }

  // ---- Session 4: Content Moderation ----
  function handleModerationAnswer(score: number) {
    const isCorrect = score > 0;
    const earned = isCorrect ? pointsPerQuestion : 0;
    addResult({
      questionId: scenarios[s4Index].id,
      section: 4,
      earned: earned,
      max: pointsPerQuestion,
      correct: isCorrect
    });
    if (s4Index < scenarios.length - 1) {
      setS4Index(prev => prev + 1);
    } else {
      finishExam();
    }
  }

  // Total questions in this assessment run
  const totalQ = effectiveCount * 4;
  const doneQ = results.length;
  const progressPct = totalQ > 0 ? (doneQ / totalQ) * 100 : 0;

  function getSectionProgress() {
    switch (section) {
      case 1: return `Listen ${s1Index + (phase === 'question' ? 1 : 0)}/${effectiveCount}`;
      case 2: return `Story Q${s2GlobalIndex + (phase === 'question' ? 1 : 0)}/${effectiveCount}`;
      case 3: return `Aptitude ${aptIndex + (phase === 'question' ? 1 : 0)}/${effectiveCount}`;
      case 4: return `Moderation ${s4Index + (phase === 'question' ? 1 : 0)}/${effectiveCount}`;
    }
  }

  const timerColor = timeLeft < 120 ? 'text-rose-400' : timeLeft < 300 ? 'text-amber-400' : 'text-emerald-400';

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-12">
      {/* Top Assessment Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-wider font-bold text-slate-300">
            Session {section} of 4
          </span>
          <div className="flex gap-1.5">
            {([1, 2, 3, 4] as SectionId[]).map((s) => (
              <div
                key={s}
                className={`w-7 sm:w-10 h-2 rounded-full transition-colors ${
                  s < section ? 'bg-emerald-500' : s === section ? 'bg-blue-500 ring-2 ring-blue-400/40' : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Timer or Untimed Learning Stopwatch */}
        {mode === 'learning' ? (
          <div className="flex items-center gap-2 font-mono font-bold text-emerald-400 text-xs sm:text-sm bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800 shadow-sm">
            <Clock className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Untimed Practice · {formatTime(elapsedTime)}</span>
          </div>
        ) : (
          <div className={`flex items-center gap-2 font-mono font-black text-lg sm:text-xl ${timerColor}`}>
            <Clock className="w-5 h-5 animate-pulse" />
            {formatTime(timeLeft)}
          </div>
        )}

        <div className="flex items-center gap-3">
          {candidateName && (
            <span className="hidden md:inline-block text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
              Candidate: <strong className="text-blue-400">{candidateName}</strong>
            </span>
          )}
          <div className="text-xs sm:text-sm font-semibold text-slate-300">
            Total: <span className="text-blue-400 font-bold">{doneQ}</span> / {totalQ} · {getSectionProgress()}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1.5">
        <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Warning Banner (Exam and Rapid modes only) */}
      {mode !== 'learning' && warned && timeLeft > 0 && timeLeft <= 120 && (
        <div className="bg-rose-950 border-b border-rose-800 px-6 py-2.5 flex items-center justify-center gap-2 text-rose-300 text-xs font-bold animate-pulse">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" /> Less than 2 minutes remaining! Unanswered questions will be auto-submitted on expiration.
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {phase === 'section-intro' && (
          <SectionIntro
            section={section}
            mode={mode}
            questionCount={effectiveCount}
            onStart={handleSectionStart}
          />
        )}

        {phase === 'question' && section === 1 && sentences[s1Index] && (
          <ListenRepeat
            key={sentences[s1Index].id}
            sentence={sentences[s1Index]}
            questionNumber={s1Index + 1}
            totalQuestions={effectiveCount}
            mode={mode}
            onAnswer={(score) => handleListenAnswer(score)}
          />
        )}

        {phase === 'question' && section === 2 && stories[s2StoryIndex] && (
          <StoryComprehension
            key={stories[s2StoryIndex].id}
            story={stories[s2StoryIndex]}
            storyIndex={s2StoryIndex + 1}
            totalStories={stories.length}
            questionNumber={s2GlobalIndex + 1}
            totalQuestions={effectiveCount}
            mode={mode}
            isFirstQuestion={s2GlobalIndex === 0}
            onAnswer={(score) => handleStoryAnswer(score)}
          />
        )}

        {phase === 'question' && section === 3 && aptitudeQuestions[aptIndex] && (
          <MixedAptitude
            key={aptitudeQuestions[aptIndex].id}
            question={aptitudeQuestions[aptIndex]}
            questionNumber={aptIndex + 1}
            totalQuestions={effectiveCount}
            onAnswer={(score) => handleAptitudeAnswer(score)}
          />
        )}

        {phase === 'question' && section === 4 && scenarios[s4Index] && (
          <ContentModeration
            key={scenarios[s4Index].id}
            scenario={scenarios[s4Index]}
            questionNumber={s4Index + 1}
            totalQuestions={effectiveCount}
            onAnswer={(score) => handleModerationAnswer(score)}
          />
        )}
      </main>
    </div>
  );
}
