import { type MouseEvent, type ReactNode } from "react";
import { cn, prefersReducedMotion } from "@/lib/utils";

type Variant = "gold" | "ghost";

function magnetize(e: MouseEvent<HTMLElement>, disabled?: boolean, magnetic?: boolean) {
  if (!magnetic || prefersReducedMotion() || disabled) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left - r.width / 2;
  const y = e.clientY - r.top - r.height / 2;
  el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
}

function reset(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "";
}

export function RioButton({
  children,
  className,
  variant = "gold",
  href,
  download,
  onClick,
  type = "button",
  disabled,
  magnetic = true,
  ariaLabel,
  target,
  rel,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
  download?: string | boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  magnetic?: boolean;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}) {
  const cls = cn("rio-btn", variant === "gold" ? "rio-btn-gold" : "rio-btn-ghost", className);

  if (href && !disabled) {
    return (
      <a
        className={cls}
        href={href}
        download={download}
        onClick={onClick}
        onMouseMove={(e) => magnetize(e, disabled, magnetic)}
        onMouseLeave={reset}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      type={type}
      onClick={onClick}
      onMouseMove={(e) => magnetize(e, disabled, magnetic)}
      onMouseLeave={reset}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
