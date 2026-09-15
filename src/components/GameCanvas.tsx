import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Plus, Minus, Focus, Maximize, Minimize, Lock, Unlock } from 'lucide-react';
import { HiddenItem, LevelData, Particle, FloatingText } from '../types';
import { ITEM_ICON_MAP } from './ItemIcons';
import { PointingHand } from './PointingHand';
import { soundEngine } from '../utils/audio';

interface GameCanvasProps {
  currentLevel: LevelData;
  foundItemIds: Set<string>;
  selectedCategoryId: string | null;
  activeHintItemId: string | null;
  onItemCollected: (item: HiddenItem) => void;
  onCanvasClickMiss: () => void;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  currentLevel,
  foundItemIds,
  selectedCategoryId,
  activeHintItemId,
  onItemCollected,
  onCanvasClickMiss,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  // Container dimensions
  const [viewportSize, setViewportSize] = useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1080,
    height: typeof window !== 'undefined' ? window.innerHeight : 1920,
  });

  // Alignment mode: 'fit' (fits whole map completely visible) or 'fill' (covers entire screen)
  const [alignmentMode, setAlignmentMode] = useState<'fit' | 'fill'>('fit');

  // Movement Lock: When locked, the photo is completely static and will not move or drift on touch/drag
  const [isMovementLocked, setIsMovementLocked] = useState<boolean>(true);

  // Pan & Zoom State
  const [zoom, setZoom] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number; panX: number; panY: number }>({
    x: 0,
    y: 0,
    panX: 0,
    panY: 0,
  });
  const hasMovedRef = useRef<boolean>(false);
  const touchDistanceRef = useRef<number | null>(null);

  // Particles and Floating feedback texts
  const particlesRef = useRef<Particle[]>([]);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);

  // Observe Container Resize to always align with the screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      setViewportSize({
        width: container.clientWidth || window.innerWidth,
        height: container.clientHeight || window.innerHeight,
      });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Compute Base Map Dimensions with exact 9:16 Aspect Ratio (matching the artwork)
  const imageAspect = 9 / 16; // 0.5625

  // Safe vertical area between top banner (~68px) and bottom tray (~94px)
  const safeTop = 64;
  const safeBottom = 92;
  const availWidth = Math.max(160, viewportSize.width - 8);
  const availHeight = Math.max(200, viewportSize.height - (safeTop + safeBottom));

  let baseWidth: number;
  let baseHeight: number;
  let centerOffsetY = 0;

  if (alignmentMode === 'fit') {
    // Fit Mode: The entire photo fits inside the safe viewable screen area
    // So 100% of the map and items are visible at once without having to move!
    baseHeight = Math.min(availHeight, availWidth / imageAspect);
    baseWidth = baseHeight * imageAspect;
    // Offset center so it's placed symmetrically between the top banner and bottom tray
    centerOffsetY = (safeTop - safeBottom) / 2;
  } else {
    // Fill Mode: covers the full screen edge-to-edge
    const containerAspect = viewportSize.width / (viewportSize.height || 1);
    if (containerAspect > imageAspect) {
      baseWidth = viewportSize.width;
      baseHeight = viewportSize.width / imageAspect;
    } else {
      baseHeight = viewportSize.height;
      baseWidth = viewportSize.height * imageAspect;
    }
    centerOffsetY = 0;
  }

  // Reset to center when level changes or fit mode toggles
  useEffect(() => {
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
  }, [currentLevel.id, alignmentMode]);

  // Handle Hint Camera Centering
  useEffect(() => {
    if (activeHintItemId) {
      const targetItem = currentLevel.items.find((i) => i.id === activeHintItemId);
      if (targetItem && baseWidth > 0 && baseHeight > 0) {
        // If movement is locked, we keep the view steady and just let the animated pointing hand and ring show the item!
        // If movement is unlocked, we smoothly bring it to the center
        if (!isMovementLocked) {
          const targetOffsetX = (targetItem.x / 100 - 0.5) * baseWidth;
          const targetOffsetY = (targetItem.y / 100 - 0.5) * baseHeight;
          const targetZoom = 1.6;
          setZoom(targetZoom);
          setPan({
            x: -targetOffsetX * targetZoom,
            y: -targetOffsetY * targetZoom,
          });
        }
      }
    }
  }, [activeHintItemId, currentLevel, baseWidth, baseHeight, isMovementLocked]);

  // Particle Animation Loop
  useEffect(() => {
    let animId: number;
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15; // subtle gravity
        p.life += 1;
        const alpha = Math.max(0, 1 - p.life / p.maxLife);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;

        if (p.type === 'star') {
          ctx.beginPath();
          const s = p.size;
          ctx.moveTo(p.x, p.y - s);
          ctx.lineTo(p.x + s * 0.3, p.y - s * 0.3);
          ctx.lineTo(p.x + s, p.y);
          ctx.lineTo(p.x + s * 0.3, p.y + s * 0.3);
          ctx.lineTo(p.x, p.y + s);
          ctx.lineTo(p.x - s * 0.3, p.y + s * 0.3);
          ctx.lineTo(p.x - s, p.y);
          ctx.lineTo(p.x - s * 0.3, p.y - s * 0.3);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
        return p.life < p.maxLife;
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Spawn visual sparkle particles
  const spawnSparkles = useCallback((screenX: number, screenY: number) => {
    const colors = ['#fde047', '#f59e0b', '#38bdf8', '#ffffff', '#ec4899'];
    for (let i = 0; i < 20; i++) {
      const angle = (Math.PI * 2 * i) / 20 + (Math.random() - 0.5);
      const speed = 2 + Math.random() * 4.5;
      particlesRef.current.push({
        id: Math.random(),
        x: screenX,
        y: screenY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: 35 + Math.floor(Math.random() * 20),
        type: Math.random() > 0.4 ? 'star' : 'circle',
      });
    }
  }, []);

  // Floating text feedback (+1)
  const addFloatingText = useCallback((screenX: number, screenY: number, text: string) => {
    const newId = Date.now() + Math.random();
    setFloatingTexts((prev) => [
      ...prev,
      { id: newId, x: screenX, y: screenY, text, color: '#facc15' },
    ]);
    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((t) => t.id !== newId));
    }, 1000);
  }, []);

  // Mouse pan handlers - Disabled when isMovementLocked is true
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMovementLocked) return;
    if (e.button !== 0) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMovementLocked || !isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    if (Math.hypot(dx, dy) > 6) {
      hasMovedRef.current = true;
    }
    setPan({
      x: dragStartRef.current.panX + dx,
      y: dragStartRef.current.panY + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel zoom handler centered around cursor - Only active when unlocked
  const handleWheel = (e: React.WheelEvent) => {
    if (isMovementLocked) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const cursorOffsetX = e.clientX - (rect.left + rect.width / 2);
    const cursorOffsetY = e.clientY - (rect.top + rect.height / 2);

    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.88;
    const newZoom = Math.min(3.8, Math.max(0.75, zoom * zoomFactor));

    const newPanX = cursorOffsetX - (cursorOffsetX - pan.x) * (newZoom / zoom);
    const newPanY = cursorOffsetY - (cursorOffsetY - pan.y) * (newZoom / zoom);

    setZoom(newZoom);
    setPan({ x: newPanX, y: newPanY });
  };

  // Touch handlers for mobile - Disabled when isMovementLocked is true
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMovementLocked) return;
    if (e.touches.length === 1) {
      setIsDragging(true);
      hasMovedRef.current = false;
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        panX: pan.x,
        panY: pan.y,
      };
      touchDistanceRef.current = null;
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isMovementLocked) return;
    if (e.touches.length === 1 && isDragging) {
      const dx = e.touches[0].clientX - dragStartRef.current.x;
      const dy = e.touches[0].clientY - dragStartRef.current.y;
      if (Math.hypot(dx, dy) > 8) {
        hasMovedRef.current = true;
      }
      setPan({
        x: dragStartRef.current.panX + dx,
        y: dragStartRef.current.panY + dy,
      });
    } else if (e.touches.length === 2 && touchDistanceRef.current) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const zoomFactor = dist / touchDistanceRef.current;
      const newZoom = Math.min(3.8, Math.max(0.75, zoom * zoomFactor));
      setZoom(newZoom);
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    touchDistanceRef.current = null;
  };

  // Zoom Button Controls
  const zoomIn = () => {
    setIsMovementLocked(false);
    setZoom((z) => Math.min(3.8, z * 1.25));
    soundEngine.playClick();
  };

  const zoomOut = () => {
    setZoom((z) => {
      const next = Math.max(0.75, z * 0.8);
      if (next <= 1.05) {
        setPan({ x: 0, y: 0 });
      }
      return next;
    });
    soundEngine.playClick();
  };

  // Align to Screen / Reset View & Lock
  const alignToScreen = () => {
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
    setIsMovementLocked(true);
    soundEngine.playClick();
  };

  // Toggle Movement Lock
  const toggleMovementLock = () => {
    const nextLocked = !isMovementLocked;
    setIsMovementLocked(nextLocked);
    if (nextLocked) {
      // Re-center and snap to 1.0 zoom when locked
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
    }
    soundEngine.playClick();
  };

  // Toggle between Fit and Fill
  const toggleAlignmentMode = () => {
    setAlignmentMode((prev) => (prev === 'fit' ? 'fill' : 'fit'));
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
    soundEngine.playClick();
  };

  // Double click to zoom in/out
  const handleDoubleClick = (e: React.MouseEvent) => {
    if (isMovementLocked) {
      // Double clicking while locked does nothing or zooms slightly
      return;
    }
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const cursorOffsetX = e.clientX - (rect.left + rect.width / 2);
    const cursorOffsetY = e.clientY - (rect.top + rect.height / 2);

    const targetZoom = zoom > 1.3 ? 1.0 : 2.0;
    const newPanX = cursorOffsetX - (cursorOffsetX - pan.x) * (targetZoom / zoom);
    const newPanY = cursorOffsetY - (cursorOffsetY - pan.y) * (targetZoom / zoom);

    setZoom(targetZoom);
    setPan({ x: newPanX, y: newPanY });
    soundEngine.playClick();
  };

  // Handle item click
  const handleItemClick = (e: React.MouseEvent, item: HiddenItem) => {
    e.stopPropagation();
    if (hasMovedRef.current && !isMovementLocked) return;
    if (foundItemIds.has(item.id)) return;

    soundEngine.playItemFound();

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    spawnSparkles(centerX, centerY);
    addFloatingText(centerX, centerY - 20, '+1 Found!');

    onItemCollected(item);
  };

  return (
    <div
      ref={containerRef}
      id="game-viewport"
      className={`relative w-full h-full overflow-hidden select-none bg-slate-950 flex items-center justify-center ${
        isMovementLocked ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handleDoubleClick}
      onClick={() => {
        if (!hasMovedRef.current) {
          onCanvasClickMiss();
        }
      }}
    >
      {/* Background Soft Glow Aura */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]" />

      {/* Interactive Map Stage - Centered in safe view area */}
      <div
        id="map-stage"
        className="absolute origin-center transition-transform duration-75 ease-out select-none will-change-transform rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10"
        style={{
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
          left: '50%',
          top: `calc(50% + ${centerOffsetY}px)`,
          transform: `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
        }}
      >
        {/* Background Scene Artwork - Fills Stage Seamlessly with Exact 9:16 Aspect Ratio */}
        <img
          src={currentLevel.backgroundImage}
          alt={currentLevel.name}
          className="w-full h-full object-cover block pointer-events-none select-none"
          referrerPolicy="no-referrer"
          draggable={false}
        />

        {/* Interactive Hidden Items (Positioned by Exact % of the Picture) */}
        {currentLevel.items.map((item) => {
          const isFound = foundItemIds.has(item.id);
          const isHintTarget = activeHintItemId === item.id;
          const isCategorySelected = selectedCategoryId === item.categoryId;
          const IconComponent = ITEM_ICON_MAP[item.categoryId];

          return (
            <div
              key={item.id}
              id={`hidden-item-${item.id}`}
              onClick={(e) => handleItemClick(e, item)}
              className={`absolute cursor-pointer transition-all duration-300 z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group ${
                isFound
                  ? 'opacity-85 pointer-events-none'
                  : 'hover:scale-120 active:scale-95'
              }`}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: '60px',
                height: '60px',
                transform: `translate(-50%, -50%) scale(${item.scale || 1}) rotate(${
                  item.rotation || 0
                }deg)`,
              }}
              title={isFound ? 'Already Collected!' : item.label || 'Tap to collect'}
            >
              {/* White Glowing Halo Ring (Matches Screenshots 1, 2, 3!) */}
              {(isHintTarget || (!isFound && isCategorySelected)) && (
                <div
                  className={`absolute inset-[-8px] rounded-full pointer-events-none transition-all ${
                    isHintTarget
                      ? 'border-4 border-white shadow-[0_0_25px_rgba(255,255,255,1),inset_0_0_15px_rgba(255,255,255,0.8)] animate-pulse scale-110'
                      : 'border-3 border-white/90 shadow-[0_0_15px_rgba(255,255,255,0.9)] opacity-90'
                  }`}
                />
              )}

              {/* Found Golden Star Aura */}
              {isFound && (
                <div className="absolute inset-[-4px] rounded-full border-2 border-amber-300 bg-amber-400/20 shadow-[0_0_10px_rgba(250,204,21,0.6)] flex items-center justify-center">
                  <span className="text-xs font-black text-amber-300">★</span>
                </div>
              )}

              {/* Item Vector Artwork */}
              <div className="w-full h-full p-1 drop-shadow-md">
                {IconComponent ? (
                  <IconComponent className="w-full h-full filter drop-shadow" />
                ) : (
                  <div className="w-8 h-8 bg-amber-400 rounded-full" />
                )}
              </div>

              {/* Animated Cartoon Pointing Hand for Active Hint (Matches Screenshot 2) */}
              {isHintTarget && !isFound && (
                <PointingHand x={50} y={50} />
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Canvas for 60fps Particles */}
      <canvas
        ref={particleCanvasRef}
        id="particle-canvas"
        className="absolute inset-0 pointer-events-none z-30"
      />

      {/* Floating +1 Text Badges */}
      {floatingTexts.map((ft) => (
        <div
          key={ft.id}
          className="absolute z-40 pointer-events-none font-bubble font-black text-xl text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-bounce"
          style={{
            left: `${ft.x}px`,
            top: `${ft.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {ft.text}
        </div>
      ))}

      {/* On-Screen Zoom & Movement Lock Controls (Floating on Right Edge) */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 pointer-events-auto">
        {/* Movement Lock Toggle Button (Default: Locked, so photo doesn't move) */}
        <button
          id="toggle-movement-lock-btn"
          onClick={toggleMovementLock}
          className={`w-10 h-10 rounded-full shadow-lg border flex items-center justify-center cursor-pointer transition-all ${
            isMovementLocked
              ? 'bg-emerald-500 text-white border-emerald-400 ring-2 ring-emerald-300/50'
              : 'bg-white/90 hover:bg-white text-slate-700 border-slate-200'
          }`}
          title={isMovementLocked ? 'Photo is Fixed (Click to enable Dragging/Zoom)' : 'Photo can Drag (Click to Lock in place)'}
        >
          {isMovementLocked ? (
            <Lock className="w-4 h-4 stroke-[2.5]" />
          ) : (
            <Unlock className="w-4 h-4 stroke-[2.5]" />
          )}
        </button>

        {/* Dedicated "Align to Screen / Reset" button */}
        <button
          id="align-screen-btn"
          onClick={alignToScreen}
          className="w-10 h-10 bg-white/90 hover:bg-white active:scale-90 text-sky-700 rounded-full shadow-lg border border-sky-200 flex items-center justify-center cursor-pointer transition-transform"
          title="Reset & Lock to Screen"
        >
          <Focus className="w-4 h-4 stroke-[2.5]" />
        </button>

        <button
          id="zoom-in-btn"
          onClick={zoomIn}
          className="w-10 h-10 bg-white/90 hover:bg-white active:scale-90 text-slate-800 rounded-full shadow-lg border border-slate-200 flex items-center justify-center cursor-pointer transition-transform"
          title="Zoom In"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
        </button>

        <button
          id="zoom-out-btn"
          onClick={zoomOut}
          className="w-10 h-10 bg-white/90 hover:bg-white active:scale-90 text-slate-800 rounded-full shadow-lg border border-slate-200 flex items-center justify-center cursor-pointer transition-transform"
          title="Zoom Out"
        >
          <Minus className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* View Mode Toggle: Fit vs Fill */}
        <button
          id="toggle-align-mode-btn"
          onClick={toggleAlignmentMode}
          className="w-10 h-10 bg-white/90 hover:bg-white active:scale-90 text-indigo-700 rounded-full shadow-lg border border-indigo-200 flex items-center justify-center cursor-pointer transition-transform"
          title={alignmentMode === 'fit' ? 'Switch to Fill Full Screen' : 'Switch to Fit Entire Map'}
        >
          {alignmentMode === 'fit' ? (
            <Maximize className="w-4 h-4 stroke-[2.5]" />
          ) : (
            <Minimize className="w-4 h-4 stroke-[2.5]" />
          )}
        </button>
      </div>

      {/* Status Badges on the Left */}
      <div className="absolute left-3 bottom-24 z-20 flex flex-col gap-1.5 pointer-events-none">
        {/* Lock Status Pill */}
        {isMovementLocked && (
          <div className="bg-slate-900/80 backdrop-blur-md text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-bold shadow border border-emerald-500/30 flex items-center gap-1.5 animate-fade-in w-fit">
            <Lock className="w-3 h-3" />
            <span>Photo Fixed</span>
          </div>
        )}

        {/* Finding Target Item Indicator */}
        {selectedCategoryId && (
          <div className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-slate-700 flex items-center gap-2 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>
              Target:{' '}
              <strong className="text-yellow-300">
                {currentLevel.categories.find((c) => c.id === selectedCategoryId)?.name}
              </strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
