import { SOCIAL } from "@/lib/branch";
import { useRioStore } from "@/lib/rio-store";
import { Reveal } from "@/components/rio/reveal";
import { RioButton } from "@/components/rio/rio-button";
import { InstagramIcon, TikTokIcon } from "@/components/rio/icons";
import { GoldFlourish } from "@/components/rio/ornament";

export function SocialSection() {
  const setLookAt = useRioStore((s) => s.setLookAt);

  return (
    <section id="social" className="relative overflow-hidden px-5 py-24 md:py-32">
      <img
        src="/gallery/macaw-mural.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-wine-deep/80" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-display text-sm tracking-lux text-gold">FOLLOW US</p>
          <h2 className="mt-3 text-4xl text-ivory md:text-5xl">تابعنا</h2>
          <GoldFlourish className="mx-auto mt-4 h-7 w-52 text-gold" />
          <p className="mt-4 text-ivory-dim">نفس الحساب لكل الفروع — ريو واحد، مزاج واحد.</p>
        </Reveal>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RioButton
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setLookAt("social")}
            ariaLabel="إنستجرام ريو كافيه"
            className="min-w-52"
          >
            <InstagramIcon />
            Instagram
          </RioButton>
          <RioButton
            href={SOCIAL.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            onClick={() => setLookAt("social")}
            ariaLabel="تيك توك ريو كافيه"
            className="min-w-52"
          >
            <TikTokIcon />
            TikTok
          </RioButton>
        </div>
      </div>
    </section>
  );
}
