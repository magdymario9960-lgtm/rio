import { SLOGAN } from "@/lib/branch";
import { GoldFlourish } from "@/components/rio/ornament";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 pt-16 text-center"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/gallery/pink-brick.jpg"
          alt=""
          className="size-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(61_16_24_/_35%)_0%,var(--color-wine-deep)_78%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full border border-gold/35" />
          <img
            src="/brand/logo.jpg"
            alt="Rio Cafe"
            className="size-40 rounded-full object-cover shadow-[0_20px_60px_rgb(0_0_0_/_45%)] md:size-52"
          />
        </div>
        <h1 className="mt-8 font-display text-6xl leading-none gold-text md:text-8xl">Rio</h1>
        <p className="mt-1 font-display text-2xl tracking-[0.4em] text-ivory md:text-3xl">CAFE</p>
        <GoldFlourish className="mt-6 h-7 w-56 text-gold" />
        <p className="rise-in mt-6 max-w-md text-lg text-ivory md:text-2xl" style={{ animationDelay: "280ms" }}>
          {SLOGAN}
        </p>
      </div>

      <button
        type="button"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-lux text-gold-bright"
        onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
      >
        ادخل ريو
      </button>
    </section>
  );
}
