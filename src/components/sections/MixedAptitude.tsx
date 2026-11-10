import { useState } from 'react';
import { CheckCircle, XCircle, PieChart, BarChart2, Table as TableIcon, Layers, Brain, HelpCircle } from 'lucide-react';
import { AptitudeQuestion } from '../../data/questionBank';
import { sound } from '../../utils/audio';

interface Props {
  question: AptitudeQuestion;
  questionNumber: number; // 1 to 25
  totalQuestions: number; // 25
  onAnswer: (score: number) => void;
}

export default function MixedAptitude({ question, questionNumber, totalQuestions, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(i: number) {
    if (submitted) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null || submitted) return;
    setSubmitted(true);
    if (selected === question.correct) {
      sound.playSuccess();
    }
  }

  function handleNext() {
    const score = selected === question.correct ? 1 : 0;
    onAnswer(score);
  }

  const isCorrect = submitted && selected === question.correct;

  // Category display badge & icon
  function getCategoryInfo(category: AptitudeQuestion['category']) {
    switch (category) {
      case 'data-interpretation':
        return { label: 'Data Interpretation', icon: PieChart, color: 'text-blue-400 bg-blue-950/80 border-blue-800' };
      case 'non-verbal-reasoning':
        return { label: 'Non-Verbal / Pattern Reasoning', icon: Layers, color: 'text-purple-400 bg-purple-950/80 border-purple-800' };
      case 'numerical-aptitude':
        return { label: 'Numerical Aptitude', icon: BarChart2, color: 'text-emerald-400 bg-emerald-950/80 border-emerald-800' };
      case 'logical-reasoning':
        return { label: 'Logical Reasoning', icon: Brain, color: 'text-amber-400 bg-amber-950/80 border-amber-800' };
      case 'image-reasoning':
        return { label: 'Image & Object Reasoning', icon: HelpCircle, color: 'text-cyan-400 bg-cyan-950/80 border-cyan-800' };
      default:
        return { label: 'Reasoning', icon: Brain, color: 'text-slate-400 bg-slate-900 border-slate-700' };
    }
  }

  const catInfo = getCategoryInfo(question.category);
  const CatIcon = catInfo.icon;

  // Helper to render SVG Pie Chart with polar coordinates
  function renderPieChart(chartData: any) {
    const slices = chartData.slices || [];
    let currentAngle = -90; // Start at top (12 o'clock)

    const slicePaths = slices.map((s: any, idx: number) => {
      const angle = (s.pct / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      currentAngle = endAngle;

      // Polar to cartesian (center cx=150, cy=150, radius=110)
      const r = 110;
      const cx = 150;
      const cy = 150;

      const x1 = cx + r * Math.cos((startAngle * Math.PI) / 180);
      const y1 = cy + r * Math.sin((startAngle * Math.PI) / 180);
      const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180);
      const y2 = cy + r * Math.sin((endAngle * Math.PI) / 180);

      const largeArc = angle > 180 ? 1 : 0;
      const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;

      // Text position (halfway through slice)
      const midAngle = startAngle + angle / 2;
      const tx = cx + (r * 0.65) * Math.cos((midAngle * Math.PI) / 180);
      const ty = cy + (r * 0.65) * Math.sin((midAngle * Math.PI) / 180);

      return (
        <g key={idx}>
          <path d={d} fill={s.color} stroke="#0f172a" strokeWidth="2.5" />
          {s.pct >= 10 && (
            <text
              x={tx}
              y={ty + 4}
              fontSize="12"
              fontWeight="bold"
              fill="#ffffff"
              textAnchor="middle"
              className="drop-shadow-md select-none"
            >
              {s.pct}%
            </text>
          )}
        </g>
      );
    });

    return (
      <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex flex-col items-center">
          <p className="text-xs font-semibold text-slate-300 mb-2">{chartData.title}</p>
          <svg width="240" height="240" viewBox="0 0 300 300" className="drop-shadow-lg">
            {slicePaths}
            {/* Center circle for donut look */}
            <circle cx="150" cy="150" r="32" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
          </svg>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-slate-400 uppercase tracking-wider text-[11px] mb-2">Category Legend</p>
          {slices.map((s: any, idx: number) => (
            <div key={idx} className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-md flex-shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-slate-300 font-medium">{s.label}:</span>
              <span className="font-bold text-white font-mono">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Helper to render SVG Bar Chart
  function renderBarChart(chartData: any) {
    const bars = chartData.bars || [];
    const maxVal = Math.max(...bars.map((b: any) => b.value), 100);

    return (
      <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800">
        <p className="text-xs font-semibold text-slate-300 text-center mb-4">{chartData.title}</p>
        <div className="h-44 flex items-end justify-around gap-2 pt-6 px-4 border-b border-slate-800">
          {bars.map((b: any, idx: number) => {
            const hPct = Math.round((b.value / maxVal) * 100);
            return (
              <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                <span className="text-[11px] font-bold text-slate-300 mb-1">{b.value}</span>
                <div
                  className="w-full max-w-[48px] rounded-t-lg transition-all"
                  style={{
                    height: `${Math.max(10, hPct)}%`,
                    backgroundColor: b.color || '#3b82f6'
                  }}
                />
                <span className="text-[10px] text-slate-400 mt-2 truncate w-full text-center">{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Helper to render Data Table
  function renderTable(tableData: any) {
    return (
      <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              {tableData.headers?.map((h: string, i: number) => (
                <th key={i} className="pb-2.5 font-semibold px-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {tableData.rows?.map((row: string[], rIdx: number) => (
              <tr key={rIdx} className="hover:bg-slate-900/50">
                {row.map((cell: string, cIdx: number) => (
                  <td key={cIdx} className={`py-2 px-3 ${cIdx === 0 ? 'font-medium text-slate-200' : 'text-slate-300 font-mono'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Helper to render Concentrix Nested Squares SVG pattern
  function renderNestedSquares(patternData: any) {
    const stage = patternData?.stage || 4;
    return (
      <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col items-center justify-center">
        <p className="text-xs font-semibold text-purple-300 mb-3">Non-Verbal Geometric Analysis (Nested Squares Pattern)</p>
        <svg width="220" height="220" viewBox="0 0 220 220" className="drop-shadow-lg">
          {/* Outer Square 1 */}
          <rect x="15" y="15" width="190" height="190" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
          {/* Nested Square 2 */}
          <rect x="40" y="40" width="140" height="140" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2" />
          {/* Nested Square 3 */}
          <rect x="65" y="65" width="90" height="90" fill="#2e1065" stroke="#c4b5fd" strokeWidth="1.5" />
          {/* Center Square 4 */}
          <rect x="90" y="90" width="40" height="40" fill="#581c87" stroke="#e9d5ff" strokeWidth="1.5" />

          {/* Shaded Quadrant indicator */}
          <polygon points="15,15 105,15 105,105 15,105" fill="#a78bfa" fillOpacity="0.35" />
          <polygon points="105,15 205,15 205,105 105,105" fill="#8b5cf6" fillOpacity="0.45" />
          <polygon points="105,105 205,105 205,205 105,205" fill="#7c3aed" fillOpacity="0.55" />

          {/* Inner focal dot */}
          <circle cx="110" cy="110" r="5" fill="#ffffff" />
        </svg>
        <span className="text-[11px] text-slate-400 mt-3 italic text-center max-w-sm">
          {patternData?.rule || 'Examine concentric boundary rotation, vertex midpoints, and quadrant transitions.'}
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with 1/25 question counter */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Session 3 · Mixed Aptitude and Reasoning
          </span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mt-0.5">
            Question {questionNumber} <span className="text-slate-500 font-normal">/ {totalQuestions}</span>
          </h3>
        </div>

        <div className="flex items-center gap-2.5">
          <span className={`text-xs px-3 py-1 rounded-full border font-semibold flex items-center gap-1.5 ${catInfo.color}`}>
            <CatIcon className="w-3.5 h-3.5" /> {catInfo.label}
          </span>
          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-medium border border-slate-700">
            1 Mark
          </span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        {/* Visual Media (SVG Diagram from /images/aptitude/) */}
        {question.type === 'table' && question.tableData ? (
          renderTable(question.tableData)
        ) : (
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg bg-slate-950 flex justify-center p-2">
            <img
              src={`/images/aptitude/${question.id}.svg`}
              alt="Aptitude Diagram Reference"
              className="w-full max-w-lg h-auto max-h-[260px] object-contain select-none"
              onError={(e) => {
                // If direct SVG image fails, fallback to inline SVG chart
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Question Text */}
        <div className="border-l-4 border-blue-500 pl-4 py-1">
          <p className="text-lg font-bold text-white leading-relaxed">
            {question.question}
          </p>
        </div>

        {/* Options List (4 or 5 options) */}
        <div className="space-y-3 pt-2">
          {question.options.map((opt, i) => {
            const isSelected = selected === i;
            const isThisCorrect = i === question.correct;

            let cardCls = 'border-slate-800 bg-slate-950 text-slate-200 hover:border-slate-700 hover:bg-slate-900/60';
            if (submitted) {
              if (isThisCorrect) {
                cardCls = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 ring-2 ring-emerald-500/40 font-bold';
              } else if (isSelected && !isThisCorrect) {
                cardCls = 'border-rose-500 bg-rose-950/40 text-rose-200 ring-2 ring-rose-500/40 font-bold';
              } else {
                cardCls = 'border-slate-800/50 bg-slate-950/50 text-slate-600 opacity-50';
              }
            } else if (isSelected) {
              cardCls = 'border-blue-500 bg-blue-950/40 text-white ring-2 ring-blue-500/40 font-bold';
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={submitted}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${cardCls}`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm sm:text-base font-medium">{opt}</span>
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

        {/* Detailed Explanation Banner */}
        {submitted && (
          <div className={`p-5 rounded-2xl border text-sm space-y-2 ${
            isCorrect
              ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200'
              : 'bg-rose-950/60 border-rose-800 text-rose-200'
          }`}>
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400" />
              )}
              <span className="font-bold text-base">
                {isCorrect ? 'Correct Answer! (+1 mark)' : 'Incorrect (0 marks)'}
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Correct choice: <strong className="underline text-white">{question.options[question.correct]}</strong>
            </p>
            <p className="text-xs leading-relaxed text-slate-200 pt-1.5 border-t border-white/10">
              <strong>Mathematical & Logical Explanation:</strong> {question.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Action Submit / Next Button */}
      {!submitted ? (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-2xl py-4 font-bold text-base transition-all shadow-lg hover:shadow-blue-500/20"
        >
          {selected === null ? 'Select an answer option above' : 'Confirm & Submit Answer →'}
        </button>
      ) : (
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4 font-bold text-base transition-all shadow-lg hover:shadow-blue-500/20"
        >
          {questionNumber < totalQuestions ? `Continue to Question ${questionNumber + 1} of ${totalQuestions} →` : 'Complete Aptitude Session 3 →'}
        </button>
      )}
    </div>
  );
}
