export function NoiseOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-[0.025] mix-blend-overlay dark:opacity-[0.04]"
    >
      <filter id="noise-texture">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-texture)" />
    </svg>
  );
}
