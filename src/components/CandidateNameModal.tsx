import { useState, useEffect } from 'react';
import { User, ShieldCheck, ArrowRight, X, Sparkles } from 'lucide-react';

interface Props {
  currentName: string;
  isOpen: boolean;
  canCancel?: boolean;
  onSave: (name: string) => void;
  onClose?: () => void;
}

export default function CandidateNameModal({
  currentName,
  isOpen,
  canCancel = false,
  onSave,
  onClose,
}: Props) {
  const [name, setName] = useState(currentName || '');
  const [error, setError] = useState('');

  useEffect(() => {
    setName(currentName || '');
    setError('');
  }, [currentName, isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Please enter a valid candidate name.');
      return;
    }
    if (trimmed.length < 2) {
      setError('Name must be at least 2 characters long.');
      return;
    }
    onSave(trimmed);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-2xl bg-slate-950/90 transition-all animate-in fade-in duration-200">
      {/* Full-width Screen Center Line glowing across the blurred background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

      <div className="relative w-full max-w-lg bg-slate-900/95 border border-slate-700/90 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/90 overflow-hidden ring-1 ring-blue-500/20">
        {/* Decorative Top Accent Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        {/* Close Button if editing existing name */}
        {canCancel && onClose && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Top Header Badge & Logo */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-blue-900/40">
            C
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold bg-blue-900/80 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-700/50 uppercase tracking-wider">
                Concentrix Assessment
              </span>
              <span className="text-xs text-slate-400 font-medium">Round 2</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
              Candidate Profile Setup
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Please enter your candidate name before beginning. Your name will be recorded on all practice sessions, audio repetition transcripts, and performance analytics.
        </p>

        {/* SCREEN BLUR CENTER LINE (Prominent Center Divider) */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
          <div className="absolute px-4 bg-slate-900 text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5 border border-blue-600/60 rounded-full py-1 shadow-md shadow-blue-950">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Candidate Identification</span>
          </div>
        </div>

        {/* Name Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="candidate-name-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Enter Candidate Full Name:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <User className="w-5 h-5" />
              </div>
              <input
                id="candidate-name-input"
                type="text"
                autoFocus
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="e.g., Alex Johnson"
                className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-2xl text-white text-base placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"
              />
            </div>
            {error && (
              <p className="text-xs text-rose-400 mt-2 font-medium flex items-center gap-1">
                <span>⚠️</span> {error}
              </p>
            )}
          </div>

          <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800 text-[11.5px] text-slate-400 flex items-start gap-2 leading-relaxed">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>
              You can change this name at any time by clicking your candidate profile badge in the top navigation bar.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3">
            {canCancel && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/40 hover:shadow-blue-900/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm &amp; Proceed</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
