import React, { useRef } from 'react';
import { ChevronDown, ChevronUp, Search, Check } from 'lucide-react';
import { ItemCategory } from '../types';
import { ITEM_ICON_MAP } from './ItemIcons';

interface BottomTrayProps {
  categories: ItemCategory[];
  foundCountsByCategory: Record<string, number>;
  totalFound: number;
  totalItems: number;
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
  hintsRemaining: number;
  onUseHint: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  activeHintItemId: string | null;
}

export const BottomTray: React.FC<BottomTrayProps> = ({
  categories,
  foundCountsByCategory,
  totalFound,
  totalItems,
  selectedCategoryId,
  onSelectCategory,
  hintsRemaining,
  onUseHint,
  isCollapsed,
  onToggleCollapse,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="bottom-tray"
      className="relative z-20 w-full transition-transform duration-300 ease-in-out select-none"
    >
      {/* Floating Hint Button on the right, positioned just above the tray */}
      <div className="absolute -top-14 right-4 z-30 flex items-center">
        <button
          id="hint-button"
          onClick={onUseHint}
          disabled={hintsRemaining <= 0 && totalFound >= totalItems}
          className={`relative group flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.22)] border-3 border-sky-100 hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer ${
            hintsRemaining <= 0 ? 'opacity-70 grayscale' : 'hover:border-sky-300'
          }`}
          title={hintsRemaining > 0 ? `Use Hint (${hintsRemaining} left)` : 'No hints left'}
        >
          {/* Magnifying Glass Icon */}
          <Search className="w-7 h-7 text-indigo-900 stroke-[2.5]" />

          {/* Red Badge Counter */}
          <div
            id="hint-count-badge"
            className="absolute -top-1 -right-1 w-6 h-6 bg-rose-500 text-white font-extrabold text-xs rounded-full flex items-center justify-center border-2 border-white shadow-md animate-pulse"
          >
            {hintsRemaining}
          </div>
        </button>
      </div>

      {/* Main Bottom Shelf Bar */}
      <div className="bg-white/95 backdrop-blur-md border-t-2 border-slate-200 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-3 py-2.5 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          {/* Collapse / Expand Button */}
          <button
            id="toggle-tray-btn"
            onClick={onToggleCollapse}
            className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 active:scale-90 rounded-xl border border-slate-300 text-slate-600 transition-all shrink-0 cursor-pointer shadow-sm"
            title={isCollapsed ? 'Expand Tray' : 'Collapse Tray'}
          >
            {isCollapsed ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>

          {/* Progress Counter e.g. "12 / 30" */}
          <div
            id="progress-counter"
            className="flex items-baseline gap-1 shrink-0 font-bubble text-slate-800"
          >
            <span className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-tight">
              {totalFound}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-slate-400">
              /{totalItems}
            </span>
          </div>

          {/* Scrollable Item Cards Shelf */}
          {!isCollapsed && (
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-3 overflow-x-auto py-1 px-1 scrollbar-none no-scrollbar flex-1"
              style={{ scrollbarWidth: 'none' }}
            >
              {categories.map((cat) => {
                const found = foundCountsByCategory[cat.id] || 0;
                const remaining = Math.max(0, cat.totalCount - found);
                const isComplete = remaining === 0;
                const isSelected = selectedCategoryId === cat.id;
                const IconComponent = ITEM_ICON_MAP[cat.iconId] || null;

                return (
                  <button
                    key={cat.id}
                    id={`item-card-${cat.id}`}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`relative shrink-0 w-18 h-18 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center p-1.5 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-50/90 border-2 border-indigo-500 shadow-md ring-3 ring-indigo-300/50 scale-105'
                        : isComplete
                        ? 'bg-emerald-50/70 border border-emerald-200 opacity-80'
                        : 'bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                    }`}
                    title={`${cat.name} (${remaining} remaining)`}
                  >
                    {/* Item Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-0.5">
                      {IconComponent ? (
                        <IconComponent className="w-full h-full object-contain filter drop-shadow-sm" />
                      ) : (
                        <span className="text-2xl">🔍</span>
                      )}
                    </div>

                    {/* Bottom-left remaining count badge or Checkmark */}
                    <div className="absolute bottom-1 left-1.5 flex items-center">
                      {isComplete ? (
                        <div className="w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-sm">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-sm sm:text-base font-extrabold text-slate-800 leading-none font-bubble">
                          {remaining}
                        </span>
                      )}
                    </div>

                    {/* Active target dot indicator */}
                    {isSelected && !isComplete && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Quick Item Detail Tag when collapsed or compact */}
          {isCollapsed && selectedCategoryId && (
            <div className="text-sm font-medium text-slate-600 truncate flex-1 pl-2">
              Current target:{' '}
              <strong className="text-indigo-600">
                {categories.find((c) => c.id === selectedCategoryId)?.name}
              </strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
