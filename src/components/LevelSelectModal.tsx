import React from 'react';
import { X, CheckCircle2, Play } from 'lucide-react';
import { LevelData, LevelId } from '../types';

interface LevelSelectModalProps {
  levels: LevelData[];
  currentLevelId: LevelId;
  completedLevelIds: Set<LevelId>;
  progressByLevel: Record<LevelId, number>;
  onSelectLevel: (levelId: LevelId) => void;
  onClose: () => void;
}

export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  levels,
  currentLevelId,
  completedLevelIds,
  progressByLevel,
  onSelectLevel,
  onClose,
}) => {
  return (
    <div
      id="level-select-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div>
            <h2 className="text-2xl font-black font-bubble text-slate-800">Choose a Map</h2>
            <p className="text-xs text-slate-500 font-medium">Explore hand-illustrated scavenger hunt scenes</p>
          </div>
          <button
            id="close-level-select-btn"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 active:scale-90 cursor-pointer transition-transform"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level List */}
        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {levels.map((lvl, index) => {
            const isCurrent = currentLevelId === lvl.id;
            const isComplete = completedLevelIds.has(lvl.id);
            const foundCount = progressByLevel[lvl.id] || 0;

            return (
              <div
                key={lvl.id}
                id={`level-card-${lvl.id}`}
                onClick={() => {
                  onSelectLevel(lvl.id);
                  onClose();
                }}
                className={`relative group flex items-center gap-3.5 p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                  isCurrent
                    ? 'border-sky-500 bg-sky-50/70 shadow-md ring-2 ring-sky-300/40'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                {/* Level Image Thumbnail */}
                <div className="relative w-20 h-24 rounded-xl overflow-hidden shadow shrink-0 border border-slate-200 bg-slate-100">
                  <img
                    src={lvl.backgroundImage}
                    alt={lvl.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {isComplete && (
                    <div className="absolute top-1 right-1 bg-emerald-500 text-white p-0.5 rounded-full shadow">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Level Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      Map {index + 1}
                    </span>
                    {isCurrent && (
                      <span className="px-2 py-0.5 bg-sky-500 text-white rounded-md text-[10px] font-bold">
                        Playing Now
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-extrabold text-slate-800 truncate font-bubble">
                    {lvl.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1 mb-2">
                    {lvl.subtitle}
                  </p>

                  {/* Progress bar */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                      <div
                        className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                        style={{ width: `${(foundCount / lvl.totalItems) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-600 font-bubble">
                      {foundCount}/{lvl.totalItems}
                    </span>
                  </div>
                </div>

                {/* Play icon */}
                <div className="shrink-0 pr-1 text-sky-500 group-hover:translate-x-0.5 transition-transform">
                  <Play className="w-5 h-5 fill-current" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
