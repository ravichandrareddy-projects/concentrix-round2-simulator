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
  mode: ExamMode;
  onComplete: (results: QuestionResult[], timeTaken: number, sectionScores: [number, number, number, number]) => void;
}

type Phase = 'section-intro' | 'question';

export default function ExamFlow({ mode, onComplete }: Props) {
  // Session 1: 5 sentences drawn from 100-sentence bank
  const [sentences] = useState(() => pickRandom(LISTEN_SENTENCES, 5));
  // Session 2: 1 story (with 5 questions) drawn from 50-story bank
  const [story] = useState(() => pickRandom(STORIES, 1)[0]);
  // Session 3: 25 mixed aptitude questions drawn from 105-question bank
  const [aptitudeQuestions] = useState(() => pickRandom(APTITUDE_QUESTIONS, 25));
  // Session 4: 5 moderation scenarios drawn from 100-scenario bank
  const [scenarios] = useState(() => pickRandom(MODERATION_SCENARIOS, 5));

  const [section, setSection] = useState<SectionId>(1);
  const [phase, setPhase] = useState<Phase>('section-intro');

  // Sub-indices for questions within sections
  const [s1Index, setS1Index] = useState(0); // 0 to 4
  const [storyQIndex, setStoryQIndex] = useState(0); // 0 to 4
  const [aptIndex, setAptIndex] = useState(0); // 0 to 24
  const [s4Index, setS4Index] = useState(0); // 0 to 4

  const [results, setResults] = useState<QuestionResult[]>([]);
  const [sectionScores, setSectionScores] = useState<[number, number, number, number]>([0, 0, 0, 0]);
  const resultsRef = useRef<QuestionResult[]>([]);
  const sectionScoresRef = useRef<[number, number, number, number]>([0, 0, 0, 0]);

  // Timers: Full Exam: 15 min, Rapid Practice: 10 min, Learning: untimed (45 min safe cap)
  const totalSeconds = mode === 'full' ? 15 * 60 : mode === 'rapid' ? 10 * 60 : 45 * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [startTime] = useState(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [warned, setWarned] = useState(false);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (timeLeft === 120 && !warned) {
      setWarned(true);
    }
  }, [timeLeft, warned]);

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
      setStoryQIndex(0);
      setAptIndex(0);
      setS4Index(0);
    } else {
      finishExam();
    }
  }

  function handleSectionStart() {
    setPhase('question');
  }

  // ---- Session 1: Listen & Repeat (5 Qs, 5 marks each = 25 marks) ----
  function handleListenAnswer(score: number) {
    addResult({
      questionId: sentences[s1Index].id,
      section: 1,
      earned: score,
      max: 5,
      correct: score >= 3
    });
    if (s1Index < 4) {
      setS1Index(prev => prev + 1);
    } else {
      advanceSection();
    }
  }

  // ---- Session 2: Story Listening (5 Qs, 5 marks each = 25 marks) ----
  function handleStoryAnswer(score: number) {
    addResult({
      questionId: `${story.id}_q${storyQIndex}`,
      section: 2,
      earned: score,
      max: 5,
      correct: score === 5
    });
    if (storyQIndex < 4) {
      setStoryQIndex(prev => prev + 1);
    } else {
      advanceSection();
    }
  }

  // ---- Session 3: Mixed Aptitude & Reasoning (25 Qs, 1 mark each = 25 marks) ----
  function handleAptitudeAnswer(score: number) {
    addResult({
      questionId: aptitudeQuestions[aptIndex].id,
      section: 3,
      earned: score,
      max: 1,
      correct: score === 1
    });
    if (aptIndex < 24) {
      setAptIndex(prev => prev + 1);
    } else {
      advanceSection();
    }
  }

  // ---- Session 4: Content Moderation (5 Qs, 5 marks each = 25 marks) ----
  function handleModerationAnswer(score: number) {
    addResult({
      questionId: scenarios[s4Index].id,
      section: 4,
      earned: score,
      max: 5,
      correct: score === 5
    });
    if (s4Index < 4) {
      setS4Index(prev => prev + 1);
    } else {
      finishExam();
    }
  }

  // 40 questions total per attempt (5 + 5 + 25 + 5)
  const totalQ = 40;
  const doneQ = results.length;
  const progressPct = (doneQ / totalQ) * 100;

  function getSectionProgress() {
    switch (section) {
      case 1: return `Listen ${s1Index + (phase === 'question' ? 1 : 0)}/5`;
      case 2: return `Story Q${storyQIndex + (phase === 'question' ? 1 : 0)}/5`;
      case 3: return `Aptitude ${aptIndex + (phase === 'question' ? 1 : 0)}/25`;
      case 4: return `Moderation ${s4Index + (phase === 'question' ? 1 : 0)}/5`;
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

        {/* Timer */}
        <div className={`flex items-center gap-2 font-mono font-black text-lg sm:text-xl ${timerColor}`}>
          <Clock className="w-5 h-5 animate-pulse" />
          {formatTime(timeLeft)}
        </div>

        <div className="text-xs sm:text-sm font-semibold text-slate-300">
          Total: <span className="text-blue-400 font-bold">{doneQ}</span> / {totalQ} · {getSectionProgress()}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1.5">
        <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Warning Banner */}
      {warned && timeLeft > 0 && timeLeft <= 120 && (
        <div className="bg-rose-950 border-b border-rose-800 px-6 py-2.5 flex items-center justify-center gap-2 text-rose-300 text-xs font-bold animate-pulse">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" /> Less than 2 minutes remaining! Unanswered questions will be auto-submitted on expiration.
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {phase === 'section-intro' && (
          <SectionIntro section={section} mode={mode} onStart={handleSectionStart} />
        )}

        {phase === 'question' && section === 1 && (
          <ListenRepeat
            key={sentences[s1Index].id}
            sentence={sentences[s1Index]}
            questionNumber={s1Index + 1}
            mode={mode}
            onAnswer={(score) => handleListenAnswer(score)}
          />
        )}

        {phase === 'question' && section === 2 && (
          <StoryComprehension
            key={story.id}
            story={story}
            questionNumber={storyQIndex + 1}
            mode={mode}
            isFirstQuestion={storyQIndex === 0}
            onAnswer={(score) => handleStoryAnswer(score)}
          />
        )}

        {phase === 'question' && section === 3 && (
          <MixedAptitude
            key={aptitudeQuestions[aptIndex].id}
            question={aptitudeQuestions[aptIndex]}
            questionNumber={aptIndex + 1}
            totalQuestions={25}
            onAnswer={(score) => handleAptitudeAnswer(score)}
          />
        )}

        {phase === 'question' && section === 4 && (
          <ContentModeration
            key={scenarios[s4Index].id}
            scenario={scenarios[s4Index]}
            questionNumber={s4Index + 1}
            onAnswer={(score) => handleModerationAnswer(score)}
          />
        )}
      </main>
    </div>
  );
}
