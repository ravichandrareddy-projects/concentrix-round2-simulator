import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { ExamMode, QuestionResult, SectionId } from '../types';
import { LISTEN_SENTENCES, MODERATION_SCENARIOS, PICTURE_QUESTIONS, STORIES } from '../data/questionBank';
import { formatTime, pickRandom } from '../utils/helpers';
import SectionIntro from './SectionIntro';
import ListenRepeat from './sections/ListenRepeat';
import PictureSelection from './sections/PictureSelection';
import StoryComprehension from './sections/StoryComprehension';
import ContentModeration from './sections/ContentModeration';

interface Props {
  mode: ExamMode;
  onComplete: (results: QuestionResult[], timeTaken: number, sectionScores: [number, number, number, number]) => void;
}

type Phase = 'section-intro' | 'question';

export default function ExamFlow({ mode, onComplete }: Props) {
  // Pick 5 from each bank once
  const [sentences] = useState(() => pickRandom(LISTEN_SENTENCES, 5));
  const [pictures] = useState(() => pickRandom(PICTURE_QUESTIONS, 5));
  const [story] = useState(() => pickRandom(STORIES, 1)[0]);
  const [scenarios] = useState(() => pickRandom(MODERATION_SCENARIOS, 5));

  const [section, setSection] = useState<SectionId>(1);
  const [phase, setPhase] = useState<Phase>('section-intro');
  // Within each section, track question index
  const [qIndex, setQIndex] = useState(0);
  // Story MCQ sub-index
  const [storyQIndex, setStoryQIndex] = useState(0);

  const [results, setResults] = useState<QuestionResult[]>([]);
  const [sectionScores, setSectionScores] = useState<[number, number, number, number]>([0, 0, 0, 0]);
  const resultsRef = useRef<QuestionResult[]>([]);
  const sectionScoresRef = useRef<[number, number, number, number]>([0, 0, 0, 0]);

  // Timer
  const totalSeconds = mode === 'full' ? 15 * 60 : mode === 'rapid' ? 10 * 60 : 25 * 60;
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
    return () => { if (timerRef.current) clearInterval(timerRef.current!); };
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
      setQIndex(0);
      setStoryQIndex(0);
    } else {
      finishExam();
    }
  }

  function handleSectionStart() {
    setPhase('question');
    setQIndex(0);
    setStoryQIndex(0);
  }

  // ---- Section 1 handler ----
  function handleListenAnswer(score: number) {
    addResult({ questionId: sentences[qIndex].id, section: 1, earned: score, max: 5, correct: score >= 3 });
    if (qIndex < 4) {
      setQIndex(qIndex + 1);
    } else {
      advanceSection();
    }
  }

  // ---- Section 2 handler ----
  function handlePictureAnswer(score: number) {
    addResult({ questionId: pictures[qIndex].id, section: 2, earned: score, max: 5, correct: score === 5 });
    if (qIndex < 4) {
      setQIndex(qIndex + 1);
    } else {
      advanceSection();
    }
  }

  // ---- Section 3 handler ----
  // Story has 5 MCQ, we pass them one by one
  function handleStoryAnswer(score: number) {
    addResult({ questionId: `${story.id}_q${storyQIndex}`, section: 3, earned: score, max: 5, correct: score === 5 });
    if (storyQIndex < 4) {
      setStoryQIndex(storyQIndex + 1);
    } else {
      advanceSection();
    }
  }

  // ---- Section 4 handler ----
  function handleModerationAnswer(score: number) {
    addResult({ questionId: scenarios[qIndex].id, section: 4, earned: score, max: 5, correct: score === 5 });
    if (qIndex < 4) {
      setQIndex(qIndex + 1);
    } else {
      finishExam();
    }
  }

  // ---- Progress indicator ----
  const totalQ = 20;
  const doneQ = results.length;
  const progressPct = (doneQ / totalQ) * 100;

  // ---- Section progress within current section ----
  function getSectionProgress() {
    switch (section) {
      case 1: return `${qIndex + (phase === 'question' ? 1 : 0)}/5`;
      case 2: return `${qIndex + (phase === 'question' ? 1 : 0)}/5`;
      case 3: return phase === 'question' ? `Q${storyQIndex + 1}/5` : '0/5';
      case 4: return `${qIndex + (phase === 'question' ? 1 : 0)}/5`;
    }
  }

  const timerColor = timeLeft < 120 ? 'text-red-400' : timeLeft < 300 ? 'text-yellow-400' : 'text-emerald-400';

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">Section {section}/4</span>
          <div className="flex gap-1">
            {([1,2,3,4] as SectionId[]).map((s) => (
              <div key={s} className={`w-8 h-2 rounded-full transition-colors ${
                s < section ? 'bg-emerald-500' : s === section ? 'bg-blue-500' : 'bg-slate-700'
              }`} />
            ))}
          </div>
        </div>
        <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timerColor}`}>
          <Clock className="w-5 h-5" />
          {formatTime(timeLeft)}
        </div>
        <div className="text-sm text-slate-400">
          Q{doneQ}/{totalQ} · {getSectionProgress()}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1">
        <div className="h-1 bg-blue-500 transition-all" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Warning Banner */}
      {warned && timeLeft > 0 && timeLeft <= 120 && (
        <div className="bg-red-900 border-b border-red-700 px-6 py-2 flex items-center gap-2 text-red-300 text-sm">
          <AlertTriangle className="w-4 h-4" /> Less than 2 minutes remaining! Your exam will auto-submit when time expires.
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        {phase === 'section-intro' && (
          <SectionIntro section={section} mode={mode} onStart={handleSectionStart} />
        )}

        {phase === 'question' && section === 1 && (
          <ListenRepeat
            key={sentences[qIndex].id}
            sentence={sentences[qIndex]}
            questionNumber={qIndex + 1}
            mode={mode}
            onAnswer={(score) => handleListenAnswer(score)}
          />
        )}

        {phase === 'question' && section === 2 && (
          <PictureSelection
            key={pictures[qIndex].id}
            question={pictures[qIndex]}
            questionNumber={qIndex + 1}
            onAnswer={(score) => handlePictureAnswer(score)}
          />
        )}

        {phase === 'question' && section === 3 && (
          <StoryComprehension
            key={story.id}
            story={story}
            questionNumber={storyQIndex + 1}
            mode={mode}
            isFirstQuestion={storyQIndex === 0}
            onAnswer={(score) => handleStoryAnswer(score)}
          />
        )}

        {phase === 'question' && section === 4 && (
          <ContentModeration
            key={scenarios[qIndex].id}
            scenario={scenarios[qIndex]}
            questionNumber={qIndex + 1}
            onAnswer={(score) => handleModerationAnswer(score)}
          />
        )}
      </main>
    </div>
  );
}
