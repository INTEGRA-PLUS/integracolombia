/**
 * Pure-SVG antenna field — navy sky with mint signal accents.
 * Replaces the original neon-tower photo while preserving the same vibe:
 * vertical structures emitting signal lines across a horizon.
 */
export default function AntennaScene() {
  const towers = [
    { x: 90, h: 150, scale: 1 },
    { x: 200, h: 200, scale: 1.15 },
    { x: 320, h: 130, scale: 0.9 },
    { x: 430, h: 220, scale: 1.2 },
    { x: 560, h: 160, scale: 1 },
    { x: 670, h: 195, scale: 1.1 },
    { x: 790, h: 140, scale: 0.95 },
    { x: 890, h: 175, scale: 1.05 },
  ];

  return (
    <svg
      viewBox="0 0 980 460"
      className="h-full w-full"
      role="img"
      aria-label="Visualización de antenas y red"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000c32" />
          <stop offset="60%" stopColor="#0c1c4a" />
          <stop offset="100%" stopColor="#18234b" />
        </linearGradient>

        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#80d697" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#80d697" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="signal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#80d697" stopOpacity="0" />
          <stop offset="50%" stopColor="#a3e3b3" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#80d697" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1c4a" />
          <stop offset="100%" stopColor="#000c32" />
        </linearGradient>

        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#a3e3b3"
            strokeOpacity="0.06"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>

      {/* Sky */}
      <rect width="980" height="460" fill="url(#sky)" />
      <rect width="980" height="460" fill="url(#grid)" opacity="0.6" />

      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (i * 73) % 980;
        const y = (i * 41) % 280;
        const r = i % 3 === 0 ? 1.2 : 0.6;
        const isMint = i % 5 === 0;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={r}
            fill={isMint ? "#80d697" : "#dde3f0"}
            opacity={0.35 + ((i % 5) / 10)}
          />
        );
      })}

      {/* Horizon mint haze */}
      <ellipse cx="490" cy="340" rx="560" ry="40" fill="url(#halo)" opacity="0.85" />

      {/* Ground */}
      <rect y="340" width="980" height="120" fill="url(#ground)" />
      <line x1="0" y1="340" x2="980" y2="340" stroke="#80d697" strokeOpacity="0.35" />

      {/* Signal arcs between tops of towers */}
      {towers.slice(0, -1).map((t, i) => {
        const next = towers[i + 1];
        const x1 = t.x;
        const y1 = 340 - t.h;
        const x2 = next.x;
        const y2 = 340 - next.h;
        const cx = (x1 + x2) / 2;
        const cy = Math.min(y1, y2) - 40 - i * 4;
        return (
          <g key={`arc-${i}`}>
            <path
              d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
              fill="none"
              stroke="url(#signal)"
              strokeWidth="1.4"
              opacity="0.9"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0 200;200 0"
                dur={`${4 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        );
      })}

      {/* Towers */}
      {towers.map((t, i) => {
        const baseY = 340;
        const topY = baseY - t.h;
        const w = 22 * t.scale;
        return (
          <g key={`t-${i}`}>
            {/* Lattice frame */}
            <line x1={t.x - w / 2} y1={baseY} x2={t.x} y2={topY} stroke="#dde3f0" strokeOpacity="0.55" strokeWidth="0.9" />
            <line x1={t.x + w / 2} y1={baseY} x2={t.x} y2={topY} stroke="#dde3f0" strokeOpacity="0.55" strokeWidth="0.9" />
            <line x1={t.x} y1={baseY} x2={t.x} y2={topY} stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1" />

            {/* Cross-bracing */}
            {Array.from({ length: 6 }).map((_, k) => {
              const ratio = (k + 1) / 7;
              const y = baseY - t.h * ratio;
              const segW = w * (1 - ratio * 0.85);
              return (
                <g key={k}>
                  <line x1={t.x - segW / 2} y1={y} x2={t.x + segW / 2} y2={y} stroke="#b8c2dc" strokeOpacity="0.35" strokeWidth="0.7" />
                  <line x1={t.x - segW / 2} y1={y} x2={t.x + segW / 2} y2={y - t.h / 12} stroke="#8693c0" strokeOpacity="0.22" strokeWidth="0.5" />
                </g>
              );
            })}

            {/* Mint beacon */}
            <circle cx={t.x} cy={topY} r="3" fill="#80d697">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + (i % 3) * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={t.x} cy={topY} r="6" fill="none" stroke="#80d697" strokeOpacity="0.6">
              <animate attributeName="r" values="3;14;3" dur={`${3 + (i % 4) * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur={`${3 + (i % 4) * 0.5}s`} repeatCount="indefinite" />
            </circle>

            {/* Reflection */}
            <line
              x1={t.x}
              y1={baseY}
              x2={t.x}
              y2={baseY + 30}
              stroke="#80d697"
              strokeOpacity="0.18"
              strokeWidth="0.8"
            />
          </g>
        );
      })}

      {/* Foreground mint vignette */}
      <rect width="980" height="460" fill="url(#halo)" opacity="0.07" />
    </svg>
  );
}
