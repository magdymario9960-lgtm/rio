import { BRANCHES } from "@/lib/branch";
import { useRioStore } from "@/lib/rio-store";
import { Reveal } from "@/components/rio/reveal";
import { RioButton } from "@/components/rio/rio-button";
import { PinIcon, StarIcon } from "@/components/rio/icons";
import { GoldFlourish } from "@/components/rio/ornament";

export function LocationSection() {
  const branchId = useRioStore((s) => s.branchId) ?? "alAslougy";
  const setLookAt = useRioStore((s) => s.setLookAt);
  const branch = BRANCHES[branchId];

  return (
    <section id="location" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="photo-frame aspect-[4/5] md:aspect-[4/4.4]">
            <img src={branch.photo} alt={branch.locationLabel} loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="font-display text-sm tracking-lux text-gold">LOCATION</p>
          <h2 className="mt-3 text-4xl text-ivory">موقعنا</h2>
          <GoldFlourish className="mt-4 h-7 w-44 text-gold" />
          <p className="mt-6 text-2xl text-ivory">{branch.locationLabel}</p>
          <p className="mt-2 text-ivory-dim">فرع {branch.nameAr} — المكان اللي لحظاتك الجميلة بتبدأ فيه.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {branch.mapsUrl ? (
              <RioButton
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setLookAt("location")}
              >
                <PinIcon size={18} />
                الخريطة
              </RioButton>
            ) : (
              <RioButton disabled variant="ghost">
                <PinIcon size={18} />
                الخريطة
              </RioButton>
            )}
            {branch.reviewUrl ? (
              <RioButton
                href={branch.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                <StarIcon size={18} />
                قولنا رأيك
              </RioButton>
            ) : (
              <RioButton disabled variant="ghost">
                <StarIcon size={18} />
                قولنا رأيك
              </RioButton>
            )}
          </div>
          {!branch.mapsUrl && !branch.reviewUrl ? (
            <p className="mt-4 text-xs text-ivory-dim">لينك الخريطة والتقييم هيتضافوا للفرع أول ما يتوفروا.</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
