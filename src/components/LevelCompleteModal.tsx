import React from 'react';
import { Star, Trophy, ArrowRight, RotateCcw, Map } from 'lucide-react';
import { LevelData } from '../types';

interface LevelCompleteModalProps {
  currentLevel: LevelData;
  timeElapsed: number;
  hintsUsed: number;
  hasNextLevel: boolean;
  onNextLevel: () => void;
  onReplayLevel: () => void;
  onOpenLevelSelect: () => void;
}

export const LevelCompleteModal: React.FC<LevelCompleteModalProps> = ({
  currentLevel,
  timeElapsed,
  hintsUsed,
  hasNextLevel,
  onNextLevel,
  onReplayLevel,
  onOpenLevelSelect,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      id="level-complete-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in select-none"
    >
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 text-center shadow-2xl border-4 border-amber-300 overflow-hidden">
        {/* Decorative Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* 3 Golden Stars */}
        <div className="flex justify-center items-center gap-3 mb-3">
          <Star className="w-10 h-10 fill-amber-400 text-amber-500 drop-shadow-md animate-bounce delay-75" />
          <Star className="w-14 h-14 fill-amber-400 text-amber-500 drop-shadow-lg animate-bounce" />
          <Star className="w-10 h-10 fill-amber-400 text-amber-500 drop-shadow-md animate-bounce delay-150" />
        </div>

        {/* Level Title */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold mb-2">
          <Trophy className="w-3.5 h-3.5" /> Stage Cleared!
        </div>

        <h2 className="text-3xl sm:text-4xl font-black font-bubble text-slate-800 mb-1">
          Splendid Search!
        </h2>
        <p className="text-slate-500 text-sm mb-6">
          You uncovered all 30 hidden items in {currentLevel.name}!
        </p>

        {/* Performance Stats */}
        <div className="grid grid-cols-3 gap-2 bg-slate-50 rounded-2xl p-3 mb-6 border border-slate-200">
          <div className="p-2">
            <span className="block text-xs text-slate-400 font-bold uppercase">Items</span>
            <span className="text-lg font-black text-indigo-600 font-bubble">30 / 30</span>
          </div>
          <div className="p-2 border-x border-slate-200">
            <span className="block text-xs text-slate-400 font-bold uppercase">Time</span>
            <span className="text-lg font-black text-slate-700 font-bubble">
              {formatTime(timeElapsed)}
            </span>
          </div>
          <div className="p-2">
            <span className="block text-xs text-slate-400 font-bold uppercase">Hints Used</span>
            <span className="text-lg font-black text-slate-700 font-bubble">{hintsUsed}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          {hasNextLevel ? (
            <button
              id="next-level-btn"
              onClick={onNextLevel}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-98 text-white font-black text-lg rounded-2xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform"
            >
              <span>Next Level</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>
          ) : (
            <button
              id="replay-btn"
              onClick={onReplayLevel}
              className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 active:scale-98 text-white font-black text-lg rounded-2xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Play Again</span>
            </button>
          )}

          <div className="flex gap-2">
            <button
              id="replay-level-btn"
              onClick={onReplayLevel}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-bold text-sm rounded-xl border border-slate-200 flex items-center justify-center gap-1.5 cursor-pointer transition-transform"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Replay</span>
            </button>

            <button
              id="select-map-btn"
              onClick={onOpenLevelSelect}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-bold text-sm rounded-xl border border-slate-200 flex items-center justify-center gap-1.5 cursor-pointer transition-transform"
            >
              <Map className="w-4 h-4" />
              <span>All Maps</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
