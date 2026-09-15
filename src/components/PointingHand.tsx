import React from 'react';

interface PointingHandProps {
  x: number; // map %
  y: number; // map %
}

export const PointingHand: React.FC<PointingHandProps> = ({ x, y }) => {
  return (
    <div
      className="absolute pointer-events-none z-30 transition-all duration-500 ease-out"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-30%, -90%)',
      }}
    >
      {/* Cartoon tapping finger with sleeve matching Screenshot 2 */}
      <div className="relative animate-bounce">
        <svg
          width="70"
          height="70"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-xl"
        >
          {/* Blue sleeve cuff */}
          <path
            d="M58 88 C50 78 42 70 38 60 C38 60 52 50 64 56 C70 66 76 76 78 88 Z"
            fill="#3b82f6"
            stroke="#1d4ed8"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M56 86 C64 84 72 84 76 86"
            stroke="#93c5fd"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Hand palm */}
          <path
            d="M40 58 C35 48 38 38 46 34 C49 32 55 35 56 40 C58 42 62 43 64 47 C66 50 68 53 66 56 C62 60 54 62 40 58 Z"
            fill="#fed7aa"
            stroke="#9a3412"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Knuckles & curled fingers */}
          <path
            d="M48 37 C54 36 60 40 60 46"
            stroke="#c2410c"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M50 44 C56 43 62 47 62 53"
            stroke="#c2410c"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Index pointing finger pointing down-left */}
          <path
            d="M38 42 C30 32 18 16 12 12 C8 8 2 12 5 18 C11 26 24 44 32 52 Z"
            fill="#fed7aa"
            stroke="#9a3412"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Fingernail */}
          <ellipse
            cx="8"
            cy="15"
            rx="3"
            ry="4"
            transform="rotate(-40 8 15)"
            fill="#ffedd5"
            stroke="#ea580c"
            strokeWidth="1.5"
          />
          {/* Sparkle star at fingertip */}
          <circle cx="4" cy="9" r="4" fill="#facc15" className="animate-ping" />
        </svg>
      </div>
    </div>
  );
};
