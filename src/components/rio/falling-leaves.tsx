import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/utils";

const PALETTE = ["text-blush", "text-macaw", "text-ivory", "text-gold"] as const;

type Leaf = {
  left: string;
  delay: string;
  duration: string;
  size: number;
  drift: string;
  spin: string;
  color: (typeof PALETTE)[number];
  sway: string;
  opacity: number;
};

const LEAVES: Leaf[] = Array.from({ length: 22 }, (_, i) => ({
  left: `${((i * 17) % 98) + 1}%`,
  delay: `${((i * 0.73) % 11).toFixed(2)}s`,
  duration: `${12 + (i % 7)}s`,
  size: 14 + (i % 6) * 4,
  drift: `${-48 + (i % 9) * 12}px`,
  spin: `${i % 2 === 0 ? "" : "-"}${220 + (i % 5) * 70}deg`,
  color: PALETTE[i % PALETTE.length],
  sway: `${6 + (i % 5)}s`,
  opacity: 0.38 + (i % 5) * 0.08,
}));

function Petal() {
  return (
    <svg viewBox="0 0 32 40" className="size-full" fill="currentColor" aria-hidden="true">
      <path d="M16 1.5c2.6 6.4 11.2 10 11.2 20.2 0 8.2-5.4 14.6-11.2 16.8C10.2 36.3 4.8 29.9 4.8 21.7 4.8 11.5 13.4 7.9 16 1.5Z" />
      <path
        d="M16 6.5v28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.35"
      />
    </svg>
  );
}

export function FallingLeaves() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!prefersReducedMotion()) setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {LEAVES.map((leaf, i) => (
        <span
          key={i}
          className={`leaf-fall absolute top-[-8%] ${leaf.color}`}
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size * 1.25,
            opacity: leaf.opacity,
            ["--leaf-delay" as string]: leaf.delay,
            ["--leaf-duration" as string]: leaf.duration,
            ["--leaf-drift" as string]: leaf.drift,
            ["--leaf-spin" as string]: leaf.spin,
            ["--leaf-sway" as string]: leaf.sway,
          }}
        >
          <span className="leaf-sway block size-full">
            <Petal />
          </span>
        </span>
      ))}
    </div>
  );
}
