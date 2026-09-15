import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Level 1: Venice Canal Market Items

// Venetian Carnival Mask (Screenshot 1)
export const VenetianMaskIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#ca8a04" />
      </linearGradient>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5eead4" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
    </defs>
    {/* Headpiece / Jester crown */}
    <path d="M50 18 Q50 6 42 12 Q38 20 44 26 Z" fill="url(#tealGrad)" stroke="#134e4a" strokeWidth="2.5" />
    <path d="M50 18 Q50 6 58 12 Q62 20 56 26 Z" fill="url(#tealGrad)" stroke="#134e4a" strokeWidth="2.5" />
    <path d="M36 24 Q24 12 28 26 Q32 32 38 30 Z" fill="url(#goldGrad)" stroke="#78350f" strokeWidth="2.5" />
    <path d="M64 24 Q76 12 72 26 Q68 32 62 30 Z" fill="url(#goldGrad)" stroke="#78350f" strokeWidth="2.5" />
    <path d="M26 34 Q10 24 16 38 Q22 42 28 40 Z" fill="url(#tealGrad)" stroke="#134e4a" strokeWidth="2.5" />
    <path d="M74 34 Q90 24 84 38 Q78 42 72 40 Z" fill="url(#tealGrad)" stroke="#134e4a" strokeWidth="2.5" />
    {/* Bells */}
    <circle cx="42" cy="11" r="3.5" fill="#fde047" stroke="#854d0e" strokeWidth="1.5" />
    <circle cx="58" cy="11" r="3.5" fill="#fde047" stroke="#854d0e" strokeWidth="1.5" />
    <circle cx="27" cy="24" r="3" fill="#fde047" stroke="#854d0e" strokeWidth="1.5" />
    <circle cx="73" cy="24" r="3" fill="#fde047" stroke="#854d0e" strokeWidth="1.5" />
    {/* Face Mask Base */}
    <path d="M26 38 C24 54 28 72 50 82 C72 72 76 54 74 38 C64 42 56 36 50 40 C44 36 36 42 26 38 Z" 
      fill="#fffbeb" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
    {/* Ornate Gold Filigree */}
    <path d="M50 40 L50 68" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="52" r="3" fill="url(#goldGrad)" />
    {/* Eye Slots */}
    <path d="M34 50 Q42 46 45 52 Q40 56 34 50 Z" fill="#1e1b4b" stroke="#78350f" strokeWidth="2" />
    <path d="M66 50 Q58 46 55 52 Q60 56 66 50 Z" fill="#1e1b4b" stroke="#78350f" strokeWidth="2" />
    {/* Lips & Cheeks */}
    <ellipse cx="36" cy="62" rx="4" ry="2.5" fill="#fbcfe8" opacity="0.6" />
    <ellipse cx="64" cy="62" rx="4" ry="2.5" fill="#fbcfe8" opacity="0.6" />
    <path d="M46 70 Q50 74 54 70" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Blue Ceramic Jug / Pitcher (Screenshot 1)
export const BlueJugIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    <defs>
      <linearGradient id="porcelainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="70%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#bae6fd" />
      </linearGradient>
    </defs>
    {/* Handle */}
    <path d="M64 36 C78 38 82 56 68 68" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" />
    <path d="M64 36 C78 38 82 56 68 68" stroke="#bfdbfe" strokeWidth="3" strokeLinecap="round" />
    {/* Pitcher Body */}
    <path d="M38 22 L62 22 L58 36 C68 46 72 64 64 80 C60 84 40 84 36 80 C28 64 32 46 42 36 Z" 
      fill="url(#porcelainGrad)" stroke="#1e3a8a" strokeWidth="3" strokeLinejoin="round" />
    {/* Spout Rim */}
    <ellipse cx="50" cy="22" rx="13" ry="4" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2" />
    {/* Mediterranean Blue Folk Patterns */}
    <path d="M41 42 Q50 48 59 42" stroke="#1d4ed8" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="56" r="8" stroke="#1d4ed8" strokeWidth="2" fill="none" />
    <circle cx="50" cy="56" r="3.5" fill="#1d4ed8" />
    <path d="M45 56 Q50 50 55 56 Q50 62 45 56" fill="#60a5fa" />
    {/* Base Trim */}
    <path d="M39 74 Q50 78 61 74" stroke="#1d4ed8" strokeWidth="3" fill="none" />
    <ellipse cx="50" cy="81" rx="14" ry="3" fill="#1e3a8a" opacity="0.3" />
  </svg>
);

// Wooden Bowl of Oranges (Screenshot 1)
export const OrangeBowlIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    <defs>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="60%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#c2410c" />
      </linearGradient>
      <linearGradient id="woodBowl" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a16207" />
        <stop offset="50%" stopColor="#78350f" />
        <stop offset="100%" stopColor="#451a03" />
      </linearGradient>
    </defs>
    {/* Oranges behind bowl rim */}
    <circle cx="36" cy="38" r="14" fill="url(#orangeGrad)" stroke="#7c2d12" strokeWidth="2.5" />
    <circle cx="64" cy="38" r="14" fill="url(#orangeGrad)" stroke="#7c2d12" strokeWidth="2.5" />
    <circle cx="50" cy="30" r="14" fill="url(#orangeGrad)" stroke="#7c2d12" strokeWidth="2.5" />
    {/* Center Oranges in front */}
    <circle cx="42" cy="46" r="13" fill="url(#orangeGrad)" stroke="#7c2d12" strokeWidth="2.5" />
    <circle cx="58" cy="46" r="13" fill="url(#orangeGrad)" stroke="#7c2d12" strokeWidth="2.5" />
    {/* Orange Highlights & Green leaf */}
    <path d="M48 20 Q54 14 58 18 Q52 24 48 20 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
    <circle cx="48" cy="27" r="1.5" fill="#fde047" />
    <circle cx="40" cy="43" r="2" fill="#fed7aa" opacity="0.8" />
    <circle cx="56" cy="43" r="2" fill="#fed7aa" opacity="0.8" />
    {/* Wooden Bowl */}
    <path d="M20 48 C20 48 22 78 50 82 C78 78 80 48 80 48 C68 53 32 53 20 48 Z" 
      fill="url(#woodBowl)" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
    {/* Bowl Rim */}
    <ellipse cx="50" cy="48" rx="30" ry="8" fill="#ca8a04" stroke="#451a03" strokeWidth="3" />
    <ellipse cx="50" cy="48" rx="27" ry="6" fill="#854d0e" opacity="0.5" />
  </svg>
);

// Glass Bead Bracelet (Screenshot 1)
export const BeadBraceletIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    {/* Circular string loop */}
    <ellipse cx="50" cy="52" rx="32" ry="24" stroke="#92400e" strokeWidth="2" strokeDasharray="3 3" fill="none" />
    {/* Beads */}
    <circle cx="50" cy="28" r="9" fill="#0284c7" stroke="#082f49" strokeWidth="2.5" />
    <circle cx="47" cy="26" r="2.5" fill="#e0f2fe" />
    
    <circle cx="68" cy="34" r="8.5" fill="#f59e0b" stroke="#78350f" strokeWidth="2.5" />
    <circle cx="66" cy="32" r="2" fill="#fef3c7" />

    <circle cx="78" cy="48" r="9" fill="#06b6d4" stroke="#164e63" strokeWidth="2.5" />
    <circle cx="76" cy="46" r="2.5" fill="#cffafe" />

    <circle cx="72" cy="65" r="8.5" fill="#f97316" stroke="#7c2d12" strokeWidth="2.5" />
    <circle cx="70" cy="63" r="2" fill="#ffedd5" />

    <circle cx="50" cy="74" r="9.5" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="2.5" />
    <circle cx="47" cy="71" r="3" fill="#dbeafe" />

    <circle cx="28" cy="65" r="8.5" fill="#10b981" stroke="#064e3b" strokeWidth="2.5" />
    <circle cx="26" cy="63" r="2" fill="#d1fae5" />

    <circle cx="22" cy="48" r="9" fill="#eab308" stroke="#713f12" strokeWidth="2.5" />
    <circle cx="20" cy="46" r="2.5" fill="#fef9c3" />

    <circle cx="32" cy="34" r="8.5" fill="#0284c7" stroke="#082f49" strokeWidth="2.5" />
    <circle cx="30" cy="32" r="2" fill="#e0f2fe" />
  </svg>
);

// Rolled Persian/Turkish Rug (Screenshot 1)
export const RolledRugIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    <g transform="rotate(-20 50 50)">
      {/* Carpet body */}
      <rect x="24" y="34" width="56" height="34" rx="6" fill="#0f766e" stroke="#134e4a" strokeWidth="3" />
      {/* Red ornamental center strip */}
      <rect x="34" y="36" width="36" height="30" fill="#be123c" stroke="#881337" strokeWidth="2" />
      {/* Diamond / Geometric patterns */}
      <polygon points="52,38 60,51 52,64 44,51" fill="#facc15" stroke="#78350f" strokeWidth="1.5" />
      <circle cx="52" cy="51" r="3" fill="#0f766e" />
      {/* Tassels / Fringe */}
      <path d="M22 36 L15 36 M22 41 L14 41 M22 46 L13 46 M22 51 L14 51 M22 56 L15 56 M22 61 L14 61" 
        stroke="#fef3c7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 36 L87 36 M80 41 L88 41 M80 46 L89 46 M80 51 L88 51 M80 56 L87 56 M80 61 L88 61" 
        stroke="#fef3c7" strokeWidth="2.5" strokeLinecap="round" />
      {/* Rolled cylinder end */}
      <ellipse cx="25" cy="51" rx="4" ry="16" fill="#115e59" stroke="#134e4a" strokeWidth="2" />
      <ellipse cx="25" cy="51" rx="2" ry="8" fill="#134e4a" />
    </g>
  </svg>
);


// 2. Level 2: Mystic River Haven Items

// Rune Stones Bound with Twine (Screenshot 2)
export const RuneStonesIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    {/* Back Stone */}
    <ellipse cx="64" cy="46" rx="18" ry="14" fill="#64748b" stroke="#1e293b" strokeWidth="3" />
    <path d="M60 40 L68 52 M68 40 L60 52" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
    {/* Bottom Stone */}
    <ellipse cx="46" cy="62" rx="22" ry="16" fill="#475569" stroke="#0f172a" strokeWidth="3" />
    <path d="M42 54 L50 70 M40 62 L52 62" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
    {/* Front Stone */}
    <ellipse cx="36" cy="42" rx="19" ry="15" fill="#94a3b8" stroke="#1e293b" strokeWidth="3" />
    {/* Glowing Rune */}
    <path d="M36 32 L36 52 M36 38 L44 42 M36 46 L43 50" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
    <path d="M36 32 L36 52 M36 38 L44 42 M36 46 L43 50" stroke="#bae6fd" strokeWidth="1.5" strokeLinecap="round" />
    {/* Hemp Cord Binding */}
    <path d="M30 38 Q48 48 66 52" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
    <path d="M48 28 Q44 54 42 74" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Hanging Lantern with Blue Fire (Screenshot 2)
export const HangingLanternIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    {/* Hanging chain/rope */}
    <line x1="50" y1="6" x2="50" y2="22" stroke="#92400e" strokeWidth="3" strokeDasharray="4 2" />
    <circle cx="50" cy="22" r="5" stroke="#78350f" strokeWidth="2.5" fill="none" />
    {/* Lantern Cap */}
    <path d="M36 28 L64 28 L58 36 L42 36 Z" fill="#854d0e" stroke="#451a03" strokeWidth="2.5" />
    {/* Glass Globe */}
    <ellipse cx="50" cy="56" rx="20" ry="22" fill="#0284c7" fillOpacity="0.25" stroke="#334155" strokeWidth="3" />
    {/* Blue Magical Flame */}
    <path d="M50 42 C56 50 60 58 54 68 C48 76 40 70 42 62 C42 54 48 48 50 42 Z" 
      fill="#38bdf8" />
    <path d="M50 48 C53 54 56 60 52 66 C48 70 44 68 45 62 Z" 
      fill="#f0f9ff" />
    {/* Metal Cage Ribs */}
    <path d="M38 42 C33 54 36 68 40 76" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M62 42 C67 54 64 68 60 76" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="36" x2="50" y2="78" stroke="#451a03" strokeWidth="2" strokeOpacity="0.4" />
    {/* Bottom Base */}
    <ellipse cx="50" cy="78" rx="14" ry="4" fill="#854d0e" stroke="#451a03" strokeWidth="2.5" />
    {/* Glow particles */}
    <circle cx="50" cy="58" r="1.5" fill="#ffffff" />
    <circle cx="44" cy="52" r="1" fill="#bae6fd" />
  </svg>
);

// Wooden Totem Holding Crystal (Screenshot 2)
export const WoodenTotemIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    <defs>
      <linearGradient id="woodTotem" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b45309" />
        <stop offset="50%" stopColor="#78350f" />
        <stop offset="100%" stopColor="#451a03" />
      </linearGradient>
    </defs>
    {/* Totem Body */}
    <path d="M34 24 C34 16 66 16 66 24 L68 76 C68 84 32 84 32 76 Z" 
      fill="url(#woodTotem)" stroke="#291102" strokeWidth="3.5" strokeLinejoin="round" />
    {/* Head carving / brow */}
    <path d="M36 28 Q50 24 64 28" stroke="#291102" strokeWidth="3" strokeLinecap="round" />
    {/* Eyes */}
    <circle cx="44" cy="34" r="2.5" fill="#291102" />
    <circle cx="56" cy="34" r="2.5" fill="#291102" />
    {/* Big round nose */}
    <ellipse cx="50" cy="40" rx="4.5" ry="3.5" fill="#92400e" stroke="#291102" strokeWidth="2" />
    {/* Carved beard */}
    <path d="M42 46 Q50 56 58 46" stroke="#291102" strokeWidth="2.5" fill="none" />
    <path d="M38 52 Q50 66 62 52" stroke="#291102" strokeWidth="2.5" fill="none" />
    {/* Two Hands clutching center */}
    <ellipse cx="40" cy="62" rx="4" ry="5" fill="#b45309" stroke="#291102" strokeWidth="2" />
    <ellipse cx="60" cy="62" rx="4" ry="5" fill="#b45309" stroke="#291102" strokeWidth="2" />
    {/* Glowing Blue/Cyan Crystal in Hands */}
    <polygon points="50,54 56,62 50,70 44,62" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
    <polygon points="50,54 54,62 50,70 48,62" fill="#bae6fd" />
    {/* Wood grain cracks */}
    <path d="M35 70 L39 74" stroke="#291102" strokeWidth="1.5" />
    <path d="M62 68 L66 72" stroke="#291102" strokeWidth="1.5" />
  </svg>
);

// Magic Scrolls Tied with Ribbon (Screenshot 2)
export const MagicScrollsIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    <g transform="rotate(-15 50 50)">
      {/* Back Scroll */}
      <rect x="22" y="32" width="56" height="18" rx="4" fill="#fef3c7" stroke="#78350f" strokeWidth="2.5" />
      <ellipse cx="22" cy="41" rx="4" ry="9" fill="#fde68a" stroke="#78350f" strokeWidth="2" />
      <ellipse cx="78" cy="41" rx="4" ry="9" fill="#fef3c7" stroke="#78350f" strokeWidth="2" />
      {/* Front Scroll */}
      <rect x="26" y="46" width="52" height="22" rx="5" fill="#fef08a" stroke="#78350f" strokeWidth="3" />
      <ellipse cx="26" cy="57" rx="5" ry="11" fill="#fde047" stroke="#78350f" strokeWidth="2.5" />
      <ellipse cx="78" cy="57" rx="5" ry="11" fill="#fef08a" stroke="#78350f" strokeWidth="2.5" />
      {/* Mystic Runes on parchment */}
      <path d="M36 52 L36 62 M40 54 L44 58 M40 60 L44 56" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M62 52 Q66 56 62 60 M66 54 L70 54" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      {/* Purple Silk Ribbon */}
      <rect x="48" y="44" width="10" height="26" fill="#9333ea" stroke="#581c87" strokeWidth="2.5" />
      {/* Ribbon knot */}
      <ellipse cx="53" cy="57" rx="5" ry="4" fill="#a855f7" stroke="#581c87" strokeWidth="2" />
      {/* Ribbon Tails */}
      <path d="M53 59 Q48 70 42 76 Q46 72 50 74 Z" fill="#9333ea" stroke="#581c87" strokeWidth="1.5" />
      <path d="M54 59 Q60 70 66 74 Q62 70 58 72 Z" fill="#9333ea" stroke="#581c87" strokeWidth="1.5" />
    </g>
  </svg>
);

// Green River Frog (Screenshot 2)
export const GreenFrogIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    {/* Back feet */}
    <ellipse cx="26" cy="72" rx="10" ry="7" fill="#4ade80" stroke="#166534" strokeWidth="2.5" />
    <ellipse cx="74" cy="72" rx="10" ry="7" fill="#4ade80" stroke="#166534" strokeWidth="2.5" />
    {/* Body */}
    <ellipse cx="50" cy="62" rx="26" ry="20" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
    {/* Pale Yellow Belly */}
    <ellipse cx="50" cy="66" rx="16" ry="12" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
    {/* Front feet */}
    <ellipse cx="40" cy="76" rx="6" ry="4" fill="#4ade80" stroke="#166534" strokeWidth="2" />
    <ellipse cx="60" cy="76" rx="6" ry="4" fill="#4ade80" stroke="#166534" strokeWidth="2" />
    {/* Big Eye bumps */}
    <circle cx="36" cy="38" r="11" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
    <circle cx="64" cy="38" r="11" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
    {/* Eye whites and Pupils */}
    <circle cx="36" cy="38" r="7" fill="#ffffff" />
    <ellipse cx="36" cy="38" rx="4" ry="5" fill="#0f172a" />
    <circle cx="38" cy="36" r="1.5" fill="#ffffff" />

    <circle cx="64" cy="38" r="7" fill="#ffffff" />
    <ellipse cx="64" cy="38" rx="4" ry="5" fill="#0f172a" />
    <circle cx="66" cy="36" r="1.5" fill="#ffffff" />
    {/* Happy Mouth */}
    <path d="M38 52 Q50 60 62 52" stroke="#14532d" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="34" cy="54" r="3" fill="#f472b6" opacity="0.5" />
    <circle cx="66" cy="54" r="3" fill="#f472b6" opacity="0.5" />
  </svg>
);


// 3. Level 3: Enchanted Forest Workshop Items

// Mushroom Potion Flask (Screenshot 3)
export const MushroomPotionIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    <defs>
      <linearGradient id="purplePotion" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="50%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#581c87" />
      </linearGradient>
      <linearGradient id="shroomCap" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#991b1b" />
      </linearGradient>
    </defs>
    {/* Glass Round Bottle */}
    <circle cx="50" cy="62" r="22" fill="#f8fafc" fillOpacity="0.4" stroke="#334155" strokeWidth="3" />
    {/* Purple Liquid */}
    <path d="M30 62 C30 73 39 82 50 82 C61 82 70 73 70 62 C64 64 56 60 50 62 C44 64 36 60 30 62 Z" 
      fill="url(#purplePotion)" />
    {/* Sparkle Bubbles inside potion */}
    <circle cx="44" cy="70" r="2" fill="#f3e8ff" />
    <circle cx="56" cy="66" r="2.5" fill="#f3e8ff" />
    <circle cx="52" cy="74" r="1.5" fill="#f3e8ff" />
    {/* Glass Bottle Neck */}
    <rect x="44" y="34" width="12" height="12" fill="#f8fafc" stroke="#334155" strokeWidth="2.5" />
    {/* Wooden Cork */}
    <rect x="45" y="28" width="10" height="7" rx="1.5" fill="#b45309" stroke="#78350f" strokeWidth="2" />
    {/* Mushroom Topper Cap */}
    <path d="M26 32 C26 14 74 14 74 32 C62 34 38 34 26 32 Z" 
      fill="url(#shroomCap)" stroke="#7f1d1d" strokeWidth="3" strokeLinejoin="round" />
    {/* White Mushroom Spots */}
    <circle cx="40" cy="22" r="3.5" fill="#ffffff" />
    <circle cx="58" cy="21" r="3" fill="#ffffff" />
    <circle cx="50" cy="27" r="2.5" fill="#ffffff" />
    <circle cx="30" cy="29" r="2" fill="#ffffff" />
    <circle cx="68" cy="28" r="2" fill="#ffffff" />
    {/* Glass shine */}
    <path d="M34 52 C32 58 32 66 36 72" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Potted Magic Sprout (Screenshot 3)
export const PottedSproutIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    {/* Green Plant Leaves */}
    <path d="M50 48 Q30 38 32 20 Q48 24 50 48 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2.5" />
    <path d="M50 48 Q70 38 68 20 Q52 24 50 48 Z" fill="#16a34a" stroke="#15803d" strokeWidth="2.5" />
    <path d="M50 36 Q42 16 50 8 Q58 16 50 36 Z" fill="#4ade80" stroke="#15803d" strokeWidth="2" />
    {/* Leaf central veins */}
    <path d="M36 24 Q42 32 49 44" stroke="#86efac" strokeWidth="1.5" />
    <path d="M64 24 Q58 32 51 44" stroke="#86efac" strokeWidth="1.5" />
    {/* Terracotta Clay Pot */}
    <path d="M32 56 L36 82 C37 85 63 85 64 82 L68 56 Z" 
      fill="#c2410c" stroke="#7c2d12" strokeWidth="3" strokeLinejoin="round" />
    {/* Pot Rim */}
    <rect x="28" y="48" width="44" height="9" rx="3" fill="#ea580c" stroke="#7c2d12" strokeWidth="3" />
    {/* Soil */}
    <ellipse cx="50" cy="49" rx="18" ry="3" fill="#451a03" />
    {/* Pot shine */}
    <path d="M38 60 L40 76" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Sack of Gemstones (Screenshot 3)
export const GemSackIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    {/* Burlap Sack Body */}
    <path d="M28 42 C18 52 20 78 44 82 C68 84 80 66 74 48 C70 42 62 44 52 42 C40 40 34 38 28 42 Z" 
      fill="#b45309" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
    {/* Tied Neck */}
    <path d="M32 38 Q42 46 52 42" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M26 28 C28 36 34 36 38 34 C36 28 32 26 26 28 Z" fill="#d97706" stroke="#78350f" strokeWidth="2" />
    {/* Spilling Sparkling Gemstones */}
    <circle cx="58" cy="46" r="4.5" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
    <polygon points="68,48 74,44 76,52 70,56" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
    <circle cx="64" cy="56" r="4" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
    <polygon points="76,58 82,56 84,62 78,64" fill="#a855f7" stroke="#6b21a8" strokeWidth="1.5" />
    <circle cx="72" cy="68" r="4" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
    <circle cx="64" cy="74" r="3.5" fill="#ec4899" stroke="#9d174d" strokeWidth="1.5" />
    <circle cx="54" cy="76" r="3" fill="#06b6d4" stroke="#0e7490" strokeWidth="1.5" />
    {/* Sparkles */}
    <circle cx="68" cy="46" r="1.5" fill="#ffffff" />
    <circle cx="63" cy="54" r="1.5" fill="#ffffff" />
  </svg>
);

// Carved Wood Treasure Chest (Screenshot 3)
export const TreasureChestIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    {/* Chest Body */}
    <rect x="22" y="48" width="56" height="32" rx="4" fill="#78350f" stroke="#451a03" strokeWidth="3" />
    {/* Chest Curved Lid */}
    <path d="M20 48 C20 30 80 30 80 48 Z" fill="#92400e" stroke="#451a03" strokeWidth="3" />
    {/* Iron Corner Bands */}
    <path d="M30 34 L30 80 M70 34 L70 80" stroke="#ca8a04" strokeWidth="4" />
    {/* Gold / Brass Keyhole Lock */}
    <rect x="44" y="42" width="12" height="14" rx="2" fill="#facc15" stroke="#854d0e" strokeWidth="2" />
    <circle cx="50" cy="47" r="2" fill="#451a03" />
    <line x1="50" y1="49" x2="50" y2="53" stroke="#451a03" strokeWidth="2" />
    {/* Wooden plank lines */}
    <line x1="22" y1="62" x2="78" y2="62" stroke="#451a03" strokeWidth="2" strokeOpacity="0.4" />
    <line x1="22" y1="72" x2="78" y2="72" stroke="#451a03" strokeWidth="2" strokeOpacity="0.4" />
  </svg>
);

// Druid Magic Staff (Screenshot 3)
export const MagicStaffIcon: React.FC<IconProps> = ({ className = "w-full h-full", size }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size}>
    <g transform="rotate(25 50 50)">
      {/* Gnarled Wooden Staff Shaft */}
      <path d="M50 14 C50 14 47 38 52 56 C54 68 49 84 50 88" 
        stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
      {/* Green Vines Wrapped Around */}
      <path d="M47 30 Q54 36 49 42 Q45 48 53 54 Q48 60 51 66" 
        stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Little Vine Leaves */}
      <ellipse cx="54" cy="38" rx="3" ry="2" fill="#4ade80" />
      <ellipse cx="46" cy="50" rx="3" ry="2" fill="#4ade80" />
      {/* Staff Crown / Prong */}
      <path d="M46 22 C44 14 50 10 52 14" stroke="#78350f" strokeWidth="3" />
      <path d="M54 22 C58 14 52 10 50 14" stroke="#78350f" strokeWidth="3" />
      {/* Glowing Amber / Cyan Crystal Orb */}
      <circle cx="50" cy="14" r="7" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
      <circle cx="48" cy="12" r="2" fill="#ffffff" />
    </g>
  </svg>
);

// Map of category icon IDs to components
export const ITEM_ICON_MAP: Record<string, React.FC<IconProps>> = {
  // Level 1
  venetian_mask: VenetianMaskIcon,
  blue_jug: BlueJugIcon,
  orange_bowl: OrangeBowlIcon,
  bead_bracelet: BeadBraceletIcon,
  rolled_rug: RolledRugIcon,

  // Level 2
  rune_stones: RuneStonesIcon,
  hanging_lantern: HangingLanternIcon,
  wooden_totem: WoodenTotemIcon,
  magic_scrolls: MagicScrollsIcon,
  green_frog: GreenFrogIcon,

  // Level 3
  mushroom_potion: MushroomPotionIcon,
  potted_sprout: PottedSproutIcon,
  gem_sack: GemSackIcon,
  treasure_chest: TreasureChestIcon,
  magic_staff: MagicStaffIcon,
};
