import { SLOGAN } from "@/lib/branch";
import { AlwaysOpenSeal, GoldFlourish } from "@/components/rio/ornament";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 pt-16 text-center"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/gallery/hero-lounge.jpg"
          alt=""
          className="hero-ken size-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(61_16_24_/_28%)_0%,rgb(26_10_13_/_72%)_55%,var(--color-wine-deep)_88%)]" />
        <div className="hero-vignette absolute inset-0" />
      </div>

      <div className="absolute top-5 end-5 z-10 md:top-8 md:end-10">
        <AlwaysOpenSeal />
      </div>

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        <div className="logo-halo relative grid place-items-center">
          <span className="logo-ring logo-ring-a" />
          <span className="logo-ring logo-ring-b" />
          <span className="logo-glow" />
          <img
            src="/brand/logo.jpg"
            alt="Rio Cafe"
            className="relative z-[1] size-40 rounded-full object-cover md:size-52"
          />
        </div>
        <h1 className="gold-shimmer mt-8 font-display text-6xl leading-none gold-text md:text-8xl">Rio</h1>
        <p className="mt-1 font-display text-2xl tracking-[0.4em] text-ivory md:text-3xl">CAFE</p>
        <GoldFlourish className="mt-6 h-7 w-56 text-gold" />
        <p className="rise-in mt-6 max-w-md text-lg text-ivory md:text-2xl" style={{ animationDelay: "280ms" }}>
          {SLOGAN}
        </p>
      </div>

      <button
        type="button"
        className="enter-pulse absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-lux text-gold-bright"
        onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
      >
        ادخل ريو
      </button>
    </section>
  );
}
