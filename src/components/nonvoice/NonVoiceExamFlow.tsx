import { useState, useMemo } from 'react';
import {
  typingParagraphs,
  fillBlankQuestions,
  dictationSentences,
  reconstructionStories,
  emailScenarios,
} from '../../data/nonVoiceBank';
import {
  NonVoiceAttemptResult,
  NonVoiceSectionResult,
  TypingParagraph,
  FillBlankQuestion,
  DictationSentence,
  ReconstructionStory,
  EmailScenario,
} from '../../types/nonVoice';
import { getUsedQuestionIds, saveUsedQuestionIds } from '../../utils/nonVoiceStorage';

import TypingSection from './TypingSection';
import FillBlankSection from './FillBlankSection';
import DictationSection from './DictationSection';
import StorySection from './StorySection';
import EmailSection from './EmailSection';

interface Props {
  candidateName: string;
  onComplete: (result: NonVoiceAttemptResult) => void;
  onExit: () => void;
}

type SectionKey = 'A' | 'B' | 'C' | 'D' | 'E';

export default function NonVoiceExamFlow({ candidateName, onComplete, onExit }: Props) {
  const [currentSection, setCurrentSection] = useState<SectionKey>('A');
  const [showTransition, setShowTransition] = useState(false);
  const [startTime] = useState(() => Date.now());

  // Random selection picking fresh questions
  const selectedQuestions = useMemo(() => {
    const used = new Set(getUsedQuestionIds(candidateName));

    function pickRandom<T extends { id: string }>(bank: T[], count: number): T[] {
      const fresh = bank.filter((item) => !used.has(item.id));
      const pool = fresh.length >= count ? fresh : [...bank];
      // shuffle
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }

    const paragraph = pickRandom(typingParagraphs, 1)[0] || typingParagraphs[0];
    const fillBlanks = pickRandom(fillBlankQuestions, 20);
    const dictations = pickRandom(dictationSentences, 16);
    const stories = pickRandom(reconstructionStories, 4);
    const email = pickRandom(emailScenarios, 1)[0] || emailScenarios[0];

    return {
      paragraph,
      fillBlanks,
      dictations,
      stories,
      email,
    };
  }, [candidateName]);

  // Candidate answers state
  const [responses, setResponses] = useState<{
    typing: string;
    fillBlanks: Record<string, string>;
    dictation: Record<string, string>;
    stories: Record<string, string>;
    email: string;
  }>({
    typing: '',
    fillBlanks: {},
    dictation: {},
    stories: {},
    email: '',
  });

  // Section completion handlers
  function handleTypingComplete(text: string) {
    setResponses((prev) => ({ ...prev, typing: text }));
    transitionTo('B');
  }

  function handleFillBlanksComplete(answers: Record<string, string>) {
    setResponses((prev) => ({ ...prev, fillBlanks: answers }));
    transitionTo('C');
  }

  function handleDictationComplete(answers: Record<string, string>) {
    setResponses((prev) => ({ ...prev, dictation: answers }));
    transitionTo('D');
  }

  function handleStoryComplete(answers: Record<string, string>) {
    setResponses((prev) => ({ ...prev, stories: answers }));
    transitionTo('E');
  }

  function handleEmailComplete(emailText: string) {
    const allResponses = { ...responses, email: emailText };
    finalizeExam(allResponses);
  }

  function transitionTo(next: SectionKey) {
    setShowTransition(true);
    setTimeout(() => {
      setCurrentSection(next);
      setShowTransition(false);
    }, 1500);
  }

  function finalizeExam(finalResp: typeof responses) {
    const timeTaken = Math.round((Date.now() - startTime) / 1000);

    // Section A scoring (Typing: word accuracy out of 20)
    const targetWords = selectedQuestions.paragraph.text.trim().toLowerCase().split(/\s+/);
    const typedWords = finalResp.typing.trim().toLowerCase().split(/\s+/);
    let matchedWords = 0;
    targetWords.forEach((tw, i) => {
      if (typedWords[i] === tw) matchedWords++;
    });
    const typingScore = Math.min(20, Math.round((matchedWords / Math.max(1, targetWords.length)) * 20));

    // Section B scoring (Fill in the blanks: 20 Qs, 1 pt each)
    let bCorrect = 0;
    selectedQuestions.fillBlanks.forEach((q) => {
      const ans = (finalResp.fillBlanks[q.id] || '').trim().toLowerCase();
      const validAnswers = q.acceptedAnswers.map((a) => a.trim().toLowerCase());
      if (validAnswers.includes(ans)) {
        bCorrect++;
      }
    });
    const fillScore = bCorrect; // 0-20

    // Section C scoring (Dictation: 16 Qs, word accuracy mapped to 20 pts)
    let totalAccuracy = 0;
    selectedQuestions.dictations.forEach((d) => {
      const original = d.sentence.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
      const typed = (finalResp.dictation[d.id] || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
      let matches = 0;
      original.forEach((w, idx) => {
        if (typed[idx] === w) matches++;
      });
      const acc = original.length > 0 ? matches / original.length : 0;
      totalAccuracy += acc;
    });
    const dictScore = Math.round((totalAccuracy / Math.max(1, selectedQuestions.dictations.length)) * 20);

    // Section D scoring (Stories: 4 stories, keypoints recall mapped to 20 pts)
    let matchedKeyPoints = 0;
    let totalKeyPoints = 0;
    selectedQuestions.stories.forEach((st) => {
      const candText = (finalResp.stories[st.id] || '').toLowerCase();
      st.keyPoints.forEach((kp) => {
        totalKeyPoints++;
        const words = kp.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
        const match = words.some((w) => candText.includes(w));
        if (match) matchedKeyPoints++;
      });
    });
    const storyScore = Math.round((matchedKeyPoints / Math.max(1, totalKeyPoints)) * 20);

    // Section E scoring (Email writing: out of 20)
    const emailWords = finalResp.email.trim().split(/\s+/).filter(Boolean);
    const emailLower = finalResp.email.toLowerCase();
    let emailScore = 0;
    // Word count criteria (min 100 words -> 5 pts)
    if (emailWords.length >= 100) emailScore += 6;
    else if (emailWords.length >= 70) emailScore += 4;
    else if (emailWords.length >= 40) emailScore += 2;
    // Customer greeting (Dear / Hello / Hi) -> 3 pts
    if (/^(dear|hello|hi|good\s+(morning|afternoon|day))\b/i.test(finalResp.email.trim())) emailScore += 3;
    // Professional closing (regards / sincerely / best / thank) -> 3 pts
    if (/(regards|sincerely|best|thank\s+you|respectfully)/i.test(emailLower)) emailScore += 3;
    // Mentions customer name -> 2 pts
    if (emailLower.includes(selectedQuestions.email.customerName.toLowerCase())) emailScore += 2;
    // Scenario relevance keywords -> 6 pts
    let kwMatch = 0;
    selectedQuestions.email.keyElements.forEach((kw) => {
      if (emailLower.includes(kw.toLowerCase())) kwMatch++;
    });
    emailScore += Math.min(6, Math.round((kwMatch / Math.max(1, selectedQuestions.email.keyElements.length)) * 6));

    const totalScore = typingScore + fillScore + dictScore + storyScore + emailScore;

    // Save used IDs
    const usedIds = [
      selectedQuestions.paragraph.id,
      ...selectedQuestions.fillBlanks.map((q) => q.id),
      ...selectedQuestions.dictations.map((d) => d.id),
      ...selectedQuestions.stories.map((s) => s.id),
      selectedQuestions.email.id,
    ];
    saveUsedQuestionIds(candidateName, usedIds);

    const sectionResults: NonVoiceSectionResult[] = [
      { sectionId: 'A', name: 'Typing Paragraph', score: typingScore, maxScore: 20, details: { targetWords: targetWords.length, matchedWords } },
      { sectionId: 'B', name: 'Fill in the Blanks', score: fillScore, maxScore: 20, details: { correct: bCorrect, total: 20 } },
      { sectionId: 'C', name: 'Dictation / Listen & Type', score: dictScore, maxScore: 20, details: { sentences: 16 } },
      { sectionId: 'D', name: 'Story Reconstruction', score: storyScore, maxScore: 20, details: { matchedKeyPoints, totalKeyPoints } },
      { sectionId: 'E', name: 'Email Writing', score: emailScore, maxScore: 20, details: { wordCount: emailWords.length } },
    ];

    const result: NonVoiceAttemptResult = {
      id: `nv-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      candidateName,
      date: new Date().toISOString(),
      totalScore,
      passed: totalScore >= 60,
      timeTaken,
      sectionScores: {
        A: typingScore,
        B: fillScore,
        C: dictScore,
        D: storyScore,
        E: emailScore,
      },
      sectionResults,
    };

    onComplete(result);
  }

  if (showTransition) {
    const nextNames: Record<SectionKey, string> = {
      A: 'Section A: Typing Paragraph',
      B: 'Section B: Fill in the Blanks',
      C: 'Section C: Dictation / Listen & Type',
      D: 'Section D: Story Reconstruction',
      E: 'Section E: Email Writing',
    };
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
        <div className="text-center space-y-4 max-w-md animate-fade-in">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <h2 className="text-2xl font-bold tracking-tight">Proceeding to Next Section</h2>
          <p className="text-blue-400 font-semibold text-lg">{nextNames[currentSection]}</p>
          <p className="text-xs text-gray-400">Timer will start automatically. Get ready.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {currentSection === 'A' && (
        <TypingSection
          paragraph={{
            id: selectedQuestions.paragraph.id,
            title: selectedQuestions.paragraph.title,
            text: selectedQuestions.paragraph.text,
          }}
          onComplete={handleTypingComplete}
        />
      )}

      {currentSection === 'B' && (
        <FillBlankSection
          questions={selectedQuestions.fillBlanks.map((q) => ({
            id: q.id,
            sentenceWithBlank: q.sentenceWithBlank,
          }))}
          onComplete={handleFillBlanksComplete}
        />
      )}

      {currentSection === 'C' && (
        <DictationSection
          sentences={selectedQuestions.dictations.map((d) => ({
            id: d.id,
            sentence: d.sentence,
          }))}
          onComplete={handleDictationComplete}
        />
      )}

      {currentSection === 'D' && (
        <StorySection
          stories={selectedQuestions.stories.map((s) => ({
            id: s.id,
            title: s.title,
            text: s.text,
          }))}
          onComplete={handleStoryComplete}
        />
      )}

      {currentSection === 'E' && (
        <EmailSection
          scenario={{
            id: selectedQuestions.email.id,
            title: selectedQuestions.email.title,
            situation: selectedQuestions.email.situation,
            instructions: selectedQuestions.email.instructions,
            customerName: selectedQuestions.email.customerName,
          }}
          onComplete={handleEmailComplete}
        />
      )}
    </div>
  );
}
