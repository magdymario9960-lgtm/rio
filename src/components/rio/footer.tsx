import { GOODBYE } from "@/lib/branch";
import { HeartIcon } from "@/components/rio/icons";
import { GoldFlourish } from "@/components/rio/ornament";

export function Footer() {
  return (
    <footer className="relative px-5 pb-28 pt-16 text-center md:pb-16">
      <img
        src="/brand/logo.jpg"
        alt="Rio Cafe"
        className="mx-auto size-20 rounded-full object-cover"
      />
      <p className="mt-5 font-display text-4xl gold-text">Rio Cafe</p>
      <GoldFlourish className="mx-auto mt-4 h-7 w-44 text-gold" />
      <p className="mt-5 inline-flex items-center justify-center gap-2 text-lg text-ivory">
        {GOODBYE}
        <HeartIcon size={18} className="text-macaw" />
      </p>
      <p className="mt-10 text-[11px] tracking-[0.18em] text-ivory-dim/70">powered by Globalim</p>
    </footer>
  );
}
