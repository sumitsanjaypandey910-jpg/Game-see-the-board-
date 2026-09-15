import React from 'react';
import { Volume2, VolumeX, Map, RotateCcw, HelpCircle, Maximize2 } from 'lucide-react';
import { LevelData } from '../types';

interface TopBannerProps {
  currentLevel: LevelData;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenLevelSelect: () => void;
  onResetLevel: () => void;
  onOpenHelp: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  currentLevel,
  soundEnabled,
  onToggleSound,
  onOpenLevelSelect,
  onResetLevel,
  onOpenHelp,
}) => {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const [isBannerCollapsed, setIsBannerCollapsed] = React.useState<boolean>(false);

  return (
    <div id="top-banner" className="relative w-full z-20 select-none max-w-4xl mx-auto px-2 pt-1">
      {/* Curved Sky Blue Banner Container */}
      <div className="relative bg-gradient-to-b from-[#38bdf8] to-[#0ea5e9] pt-1.5 pb-3 sm:pb-4 px-3 sm:px-5 shadow-xl rounded-b-[1.75rem] border-b-4 border-[#0284c7]/40 overflow-hidden backdrop-blur-sm">
        {/* Playful subtle background clouds */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          <div className="absolute -top-4 -left-6 w-32 h-20 bg-white rounded-full blur-[1px]"></div>
          <div className="absolute top-2 left-20 w-24 h-16 bg-white rounded-full blur-[1px]"></div>
          <div className="absolute -top-6 right-10 w-40 h-24 bg-white rounded-full blur-[1px]"></div>
          <div className="absolute top-4 right-32 w-28 h-18 bg-white rounded-full blur-[1px]"></div>
        </div>

        {/* Top Utility Bar */}
        <div className="relative flex items-center justify-between mb-1">
          {/* Level Switcher Button */}
          <button
            id="level-select-btn"
            onClick={onOpenLevelSelect}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/90 hover:bg-white active:scale-95 text-sky-900 font-bold text-xs sm:text-sm rounded-full shadow transition-all border border-sky-200 cursor-pointer"
            title="Choose Level"
          >
            <Map className="w-3.5 h-3.5 text-sky-600" />
            <span className="hidden sm:inline">Map:</span>
            <span className="truncate max-w-[110px] sm:max-w-[160px]">{currentLevel.name}</span>
          </button>

          {/* Quick Controls */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              id="help-btn"
              onClick={onOpenHelp}
              className="p-1.5 bg-white/80 hover:bg-white active:scale-90 text-sky-800 rounded-full shadow-sm transition-all cursor-pointer"
              title="How to Play"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>

            <button
              id="sound-toggle-btn"
              onClick={onToggleSound}
              className="p-1.5 bg-white/80 hover:bg-white active:scale-90 text-sky-800 rounded-full shadow-sm transition-all cursor-pointer"
              title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-rose-500" />
              )}
            </button>

            <button
              id="reset-level-btn"
              onClick={onResetLevel}
              className="p-1.5 bg-white/80 hover:bg-white active:scale-90 text-sky-800 rounded-full shadow-sm transition-all cursor-pointer"
              title="Restart Level"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              id="fullscreen-btn"
              onClick={toggleFullscreen}
              className="hidden sm:flex p-1.5 bg-white/80 hover:bg-white active:scale-90 text-sky-800 rounded-full shadow-sm transition-all cursor-pointer"
              title="Toggle Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* Toggle Banner Collapse Button */}
            <button
              id="toggle-banner-btn"
              onClick={() => setIsBannerCollapsed(!isBannerCollapsed)}
              className="p-1.5 bg-white/80 hover:bg-white active:scale-90 text-sky-800 rounded-full shadow-sm transition-all cursor-pointer text-xs font-bold"
              title={isBannerCollapsed ? 'Expand Header' : 'Compact Header'}
            >
              {isBannerCollapsed ? '▼' : '▲'}
            </button>
          </div>
        </div>

        {/* Center Title Matching Screenshots! */}
        {!isBannerCollapsed && (
          <div className="relative text-center py-0.5">
            <h1
              className="inline-block text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide font-bubble drop-shadow-[0_4px_4px_rgba(2,132,199,0.5)]"
              style={{
                textShadow: '0 3px 0 #0369a1, 0 4px 6px rgba(0,0,0,0.3)',
              }}
            >
              <span className="text-white drop-shadow-md mr-1.5">
                {currentLevel.titlePrefix}
              </span>
              <span
                className="text-[#facc15] font-black"
                style={{
                  WebkitTextStroke: '1px #0369a1',
                  textShadow: '0 3px 0 #b45309, 0 4px 6px rgba(0,0,0,0.3)',
                }}
              >
                {currentLevel.titleHighlight}
              </span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
