type LogoProps = {
  size?: number;
  withText?: boolean;
  className?: string;
};

export default function Logo({ size = 36, withText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="relative inline-flex items-center justify-center"
        style={{ width: size, height: size }}
        aria-hidden
      >
        {/* Outer rotating ring */}
        <svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          className="absolute inset-0 animate-spin-slow"
        >
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="url(#ring)"
            strokeWidth="1.4"
            strokeDasharray="3 6"
          />
          <circle cx="32" cy="6" r="2.4" fill="#80d697" />
          <circle cx="58" cy="32" r="1.8" fill="#80d697" opacity="0.7" />
          <circle cx="32" cy="58" r="1.8" fill="#80d697" opacity="0.7" />
          <circle cx="6" cy="32" r="1.8" fill="#80d697" opacity="0.7" />
        </svg>

        {/* Inner mark */}
        <svg
          viewBox="0 0 64 64"
          width={size * 0.62}
          height={size * 0.62}
          className="relative"
        >
          <line x1="32" y1="10" x2="32" y2="54" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="10" r="3.2" fill="#80d697" />
          <circle cx="32" cy="54" r="3.2" fill="#ffffff" />
        </svg>

        {/* Soft mint glow */}
        <span className="absolute inset-0 rounded-full bg-mint-500/10 blur-xl" />
      </div>

      {withText && (
        <span className="font-display text-lg font-semibold tracking-[0.32em] text-white">
          INTEGRA
        </span>
      )}
    </div>
  );
}
