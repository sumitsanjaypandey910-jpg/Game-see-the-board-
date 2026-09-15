import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { LEVELS } from './data/levels';
import { LevelId, HiddenItem } from './types';
import { TopBanner } from './components/TopBanner';
import { BottomTray } from './components/BottomTray';
import { GameCanvas } from './components/GameCanvas';
import { LevelCompleteModal } from './components/LevelCompleteModal';
import { LevelSelectModal } from './components/LevelSelectModal';
import { HelpModal } from './components/HelpModal';
import { soundEngine } from './utils/audio';

export default function App() {
  // Level State
  const [currentLevelId, setCurrentLevelId] = useState<LevelId>('venice');
  const currentLevel = useMemo(
    () => LEVELS.find((lvl) => lvl.id === currentLevelId) || LEVELS[0],
    [currentLevelId]
  );

  // Persistence of Found Items per Level
  const [foundItemsMap, setFoundItemsMap] = useState<Record<LevelId, string[]>>(() => {
    try {
      const saved = localStorage.getItem('scavenger_hunt_progress');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      venice: [],
      mystic_river: [],
      woodland: [],
    };
  });

  // Category selection in bottom tray
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Hints System (Matches red badge "3" in screenshots)
  const [hintsRemaining, setHintsRemaining] = useState<number>(3);
  const [activeHintItemId, setActiveHintItemId] = useState<string | null>(null);
  const [hintsUsedTotal, setHintsUsedTotal] = useState<number>(0);

  // UI States
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isTrayCollapsed, setIsTrayCollapsed] = useState<boolean>(false);
  const [isLevelCompleteOpen, setIsLevelCompleteOpen] = useState<boolean>(false);
  const [isLevelSelectOpen, setIsLevelSelectOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  // Timer
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  // Current level's found item IDs as a Set
  const currentFoundItemIds = useMemo(() => {
    return new Set(foundItemsMap[currentLevelId] || []);
  }, [foundItemsMap, currentLevelId]);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('scavenger_hunt_progress', JSON.stringify(foundItemsMap));
    } catch {}
  }, [foundItemsMap]);

  // Timer interval
  useEffect(() => {
    if (isLevelCompleteOpen) return;
    const interval = setInterval(() => {
      setTimeElapsed((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isLevelCompleteOpen]);

  // Set default category when level changes
  useEffect(() => {
    if (currentLevel.categories.length > 0) {
      setSelectedCategoryId(currentLevel.categories[0].id);
    }
    setActiveHintItemId(null);
  }, [currentLevelId, currentLevel]);

  // Calculate found items per category
  const foundCountsByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    currentLevel.categories.forEach((cat) => {
      counts[cat.id] = 0;
    });

    currentLevel.items.forEach((item) => {
      if (currentFoundItemIds.has(item.id)) {
        counts[item.categoryId] = (counts[item.categoryId] || 0) + 1;
      }
    });

    return counts;
  }, [currentLevel, currentFoundItemIds]);

  const totalFoundInLevel = currentFoundItemIds.size;
  const isCurrentLevelComplete = totalFoundInLevel >= currentLevel.totalItems;

  // Completed levels set
  const completedLevelIds = useMemo(() => {
    const set = new Set<LevelId>();
    LEVELS.forEach((lvl) => {
      const foundCount = (foundItemsMap[lvl.id] || []).length;
      if (foundCount >= lvl.totalItems) {
        set.add(lvl.id);
      }
    });
    return set;
  }, [foundItemsMap]);

  // Progress count by level
  const progressByLevel = useMemo(() => {
    const prog: Record<LevelId, number> = {
      venice: (foundItemsMap.venice || []).length,
      mystic_river: (foundItemsMap.mystic_river || []).length,
      woodland: (foundItemsMap.woodland || []).length,
    };
    return prog;
  }, [foundItemsMap]);

  // Toggle sound
  const handleToggleSound = useCallback(() => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEngine.setMuted(!next);
  }, [soundEnabled]);

  // Item Clicked Handler
  const handleItemCollected = useCallback(
    (item: HiddenItem) => {
      if (currentFoundItemIds.has(item.id)) return;

      const updatedIds = [...(foundItemsMap[currentLevelId] || []), item.id];
      setFoundItemsMap((prev) => ({
        ...prev,
        [currentLevelId]: updatedIds,
      }));

      // If active hint was pointing to this item, dismiss hint
      if (activeHintItemId === item.id) {
        setActiveHintItemId(null);
      }

      // Check category completion
      const currentCatCount = (foundCountsByCategory[item.categoryId] || 0) + 1;
      const targetCat = currentLevel.categories.find((c) => c.id === item.categoryId);

      if (targetCat && currentCatCount >= targetCat.totalCount) {
        soundEngine.playCategoryComplete();
      }

      // Check Level completion
      if (updatedIds.length >= currentLevel.totalItems) {
        setTimeout(() => {
          soundEngine.playVictory();
          setIsLevelCompleteOpen(true);
        }, 500);
      }
    },
    [
      currentFoundItemIds,
      foundItemsMap,
      currentLevelId,
      activeHintItemId,
      foundCountsByCategory,
      currentLevel,
    ]
  );

  // Use Hint Handler
  const handleUseHint = useCallback(() => {
    if (hintsRemaining <= 0 || isCurrentLevelComplete) return;

    // Find unfound items
    const unfoundItems = currentLevel.items.filter(
      (item) => !currentFoundItemIds.has(item.id)
    );
    if (unfoundItems.length === 0) return;

    // Prioritize currently selected category if it has remaining items
    let target = unfoundItems.find((item) => item.categoryId === selectedCategoryId);
    if (!target) {
      target = unfoundItems[Math.floor(Math.random() * unfoundItems.length)];
      setSelectedCategoryId(target.categoryId);
    }

    setHintsRemaining((h) => Math.max(0, h - 1));
    setHintsUsedTotal((c) => c + 1);
    setActiveHintItemId(target.id);
    soundEngine.playHint();

    // Auto-clear active hint animation after 7 seconds
    setTimeout(() => {
      setActiveHintItemId((prev) => (prev === target!.id ? null : prev));
    }, 7000);
  }, [hintsRemaining, isCurrentLevelComplete, currentLevel, currentFoundItemIds, selectedCategoryId]);

  // Level Reset Handler
  const handleResetLevel = useCallback(() => {
    soundEngine.playClick();
    if (window.confirm(`Reset progress for ${currentLevel.name}?`)) {
      setFoundItemsMap((prev) => ({
        ...prev,
        [currentLevelId]: [],
      }));
      setActiveHintItemId(null);
      setTimeElapsed(0);
      setIsLevelCompleteOpen(false);
    }
  }, [currentLevel, currentLevelId]);

  // Next Level Handler
  const handleNextLevel = useCallback(() => {
    soundEngine.playClick();
    const currentIndex = LEVELS.findIndex((l) => l.id === currentLevelId);
    const nextIndex = (currentIndex + 1) % LEVELS.length;
    setCurrentLevelId(LEVELS[nextIndex].id);
    setIsLevelCompleteOpen(false);
    setTimeElapsed(0);
  }, [currentLevelId]);

  return (
    <div
      id="game-root"
      className="relative w-screen h-screen overflow-hidden bg-slate-950 text-slate-900 font-sans select-none"
    >
      {/* Main Interactive Pan/Zoom Map Viewport - Full Screen Edge-to-Edge */}
      <GameCanvas
        currentLevel={currentLevel}
        foundItemIds={currentFoundItemIds}
        selectedCategoryId={selectedCategoryId}
        activeHintItemId={activeHintItemId}
        onItemCollected={handleItemCollected}
        onCanvasClickMiss={() => {
          // Missed click
        }}
      />

      {/* Floating Top Banner (Explore the Map! / No Time, No Rush! / Collect All the Items!) */}
      <div className="absolute top-0 inset-x-0 z-30 pointer-events-none">
        <div className="pointer-events-auto">
          <TopBanner
            currentLevel={currentLevel}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
            onOpenLevelSelect={() => {
              soundEngine.playClick();
              setIsLevelSelectOpen(true);
            }}
            onResetLevel={handleResetLevel}
            onOpenHelp={() => {
              soundEngine.playClick();
              setIsHelpOpen(true);
            }}
          />
        </div>
      </div>

      {/* Floating Bottom Shelf Tray & Hint Button */}
      <div className="absolute bottom-0 inset-x-0 z-30 pointer-events-none">
        <div className="pointer-events-auto">
          <BottomTray
            categories={currentLevel.categories}
            foundCountsByCategory={foundCountsByCategory}
            totalFound={totalFoundInLevel}
            totalItems={currentLevel.totalItems}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={(catId) => {
              soundEngine.playClick();
              setSelectedCategoryId(catId);
            }}
            hintsRemaining={hintsRemaining}
            onUseHint={handleUseHint}
            isCollapsed={isTrayCollapsed}
            onToggleCollapse={() => {
              soundEngine.playClick();
              setIsTrayCollapsed(!isTrayCollapsed);
            }}
            activeHintItemId={activeHintItemId}
          />
        </div>
      </div>

      {/* Level Select Modal */}
      {isLevelSelectOpen && (
        <LevelSelectModal
          levels={LEVELS}
          currentLevelId={currentLevelId}
          completedLevelIds={completedLevelIds}
          progressByLevel={progressByLevel}
          onSelectLevel={(lvlId) => {
            soundEngine.playClick();
            setCurrentLevelId(lvlId);
          }}
          onClose={() => setIsLevelSelectOpen(false)}
        />
      )}

      {/* Help Instructions Modal */}
      {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}

      {/* Level Completed Celebration Modal */}
      {isLevelCompleteOpen && (
        <LevelCompleteModal
          currentLevel={currentLevel}
          timeElapsed={timeElapsed}
          hintsUsed={hintsUsedTotal}
          hasNextLevel={true}
          onNextLevel={handleNextLevel}
          onReplayLevel={() => {
            setFoundItemsMap((prev) => ({
              ...prev,
              [currentLevelId]: [],
            }));
            setIsLevelCompleteOpen(false);
            setTimeElapsed(0);
          }}
          onOpenLevelSelect={() => {
            setIsLevelCompleteOpen(false);
            setIsLevelSelectOpen(true);
          }}
        />
      )}
    </div>
  );
}
