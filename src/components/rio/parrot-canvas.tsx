import { useEffect, useState, type ComponentType } from "react";

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function ParrotCanvas() {
  const [Stage, setStage] = useState<ComponentType | null>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    if (!canUseWebGL()) {
      setFallback(true);
      return;
    }
    let alive = true;
    void import("./parrot-stage").then((mod) => {
      if (alive) setStage(() => mod.ParrotStage);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (fallback || !Stage) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-55 md:opacity-100">
      <Stage />
    </div>
  );
}
