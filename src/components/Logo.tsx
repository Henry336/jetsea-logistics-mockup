/**
 * Jetsea Logistics logo — SVG recreation of the official mark:
 * a lime planet/sphere wrapped by a sweeping Saturn-style orbit ring
 * (lime → teal), with an italic "JETSEA" wordmark and lime italic "LOGISTICS".
 *
 * To use the official raster/vector artwork instead, drop the file into
 * /public (e.g. /public/jetsea-logo.svg) and replace the <svg> below with:
 *   <img src="/jetsea-logo.svg" alt="Jetsea Logistics (S) Pte Ltd" style={{ height, width: "auto" }} />
 */
export default function Logo({
  height = 50,
  dark = false,
}: {
  height?: number;
  dark?: boolean;
}) {
  const word = dark ? "#FFFFFF" : "#11707E";
  const uid = dark ? "d" : "l";

  return (
    <svg
      role="img"
      aria-label="Jetsea Logistics (S) Pte Ltd"
      height={height}
      viewBox="0 0 252 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "auto" }}
    >
      <defs>
        {/* Lime planet shading */}
        <radialGradient id={`sphere-${uid}`} cx="0.38" cy="0.32" r="0.75">
          <stop offset="0%" stopColor="#E6F285" />
          <stop offset="30%" stopColor="#C4DD2E" />
          <stop offset="65%" stopColor="#9DC51C" />
          <stop offset="100%" stopColor="#5F8C1B" />
        </radialGradient>
        {/* Orbit ring: lime on the left sweeping to teal on the right */}
        <linearGradient
          id={`ring-${uid}`}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="31"
          x2="66"
          y2="31"
        >
          <stop offset="0%" stopColor="#AECE15" />
          <stop offset="45%" stopColor="#4FB6A0" />
          <stop offset="100%" stopColor="#0FA0B8" />
        </linearGradient>
      </defs>

      {/* Emblem (tilted planet + ring) */}
      <g transform="rotate(-20 33 31)">
        {/* Ring — back half (behind the planet) */}
        <ellipse
          cx="33"
          cy="31"
          rx="33"
          ry="11"
          stroke={`url(#ring-${uid})`}
          strokeWidth="5"
          fill="none"
        />
        {/* Planet */}
        <circle cx="33" cy="31" r="15" fill={`url(#sphere-${uid})`} />
        {/* Specular highlight */}
        <ellipse cx="27" cy="24" rx="5" ry="3.2" fill="#FFFFFF" opacity="0.45" />
        {/* Ring — front lower arc (crosses in front of the planet) */}
        <path
          d="M0,31 A33,11 0 0 0 66,31"
          stroke={`url(#ring-${uid})`}
          strokeWidth="5"
          fill="none"
        />
      </g>

      {/* Wordmark */}
      <text
        x="80"
        y="36"
        fontFamily="var(--font-archivo), sans-serif"
        fontStyle="italic"
        fontWeight="800"
        fontSize="27"
        letterSpacing="-0.5"
        fill={word}
      >
        JETSEA
      </text>
      <text
        x="81"
        y="50"
        fontFamily="var(--font-archivo), sans-serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="10"
        letterSpacing="4.5"
        fill="#AECE15"
      >
        LOGISTICS
      </text>
    </svg>
  );
}
