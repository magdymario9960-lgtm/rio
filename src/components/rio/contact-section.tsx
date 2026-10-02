import { BRANCHES, BRANCH_ORDER } from "@/lib/branch";
import { useRioStore } from "@/lib/rio-store";
import { Reveal } from "@/components/rio/reveal";
import { RioButton } from "@/components/rio/rio-button";
import { PhoneIcon, WhatsAppIcon } from "@/components/rio/icons";
import { GoldFlourish } from "@/components/rio/ornament";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const branchId = useRioStore((s) => s.branchId);
  const setLookAt = useRioStore((s) => s.setLookAt);

  return (
    <section id="contact" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-lux text-gold">CONTACT</p>
          <h2 className="mt-3 text-4xl text-ivory md:text-5xl">تواصل معنا</h2>
          <GoldFlourish className="mx-auto mt-4 h-7 w-52 text-gold" />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {BRANCH_ORDER.map((id) => {
            const b = BRANCHES[id];
            const selected = branchId === id;
            const wa = b.whatsapp ? `https://wa.me/${b.whatsapp.replace(/\D/g, "")}` : null;
            return (
              <Reveal key={id}>
                <article
                  className={cn(
                    "rounded-2xl bg-wine p-6 shadow-[var(--shadow-soft)]",
                    selected && "shadow-[var(--shadow-gold)]",
                  )}
                >
                  <p className="font-display text-xs tracking-lux text-gold">فرع</p>
                  <h3 className="mt-1 text-2xl text-ivory">{b.nameAr}</h3>
                  {b.phone && b.phoneDisplay ? (
                    <>
                      <p className="mt-5 text-xs tracking-lux text-ivory-dim">للاتصال</p>
                      <p className="mt-1 font-sans text-2xl font-bold tracking-normal text-gold-bright" dir="ltr">
                        {b.phoneDisplay}
                      </p>
                      {b.whatsappDisplay ? (
                        <>
                          <p className="mt-4 text-xs tracking-lux text-ivory-dim">واتساب</p>
                          <p className="mt-1 font-sans text-lg font-bold tracking-normal text-ivory" dir="ltr">
                            {b.whatsappDisplay}
                          </p>
                        </>
                      ) : null}
                      <div className="mt-6 flex flex-col gap-3">
                        <RioButton
                          href={`tel:${b.phone}`}
                          className="w-full"
                          onClick={() => setLookAt("contact")}
                          ariaLabel={`اتصل بفرع ${b.nameAr}`}
                        >
                          <PhoneIcon size={18} />
                          اتصل بنا
                        </RioButton>
                        {wa ? (
                          <RioButton
                            href={wa}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            className="w-full"
                            onClick={() => setLookAt("contact")}
                            ariaLabel={`واتساب فرع ${b.nameAr}`}
                          >
                            <WhatsAppIcon size={18} />
                            واتساب
                          </RioButton>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <p className="mt-6 text-sm text-ivory-dim">رقم الفرع هيتحط هنا أول ما يتوفر.</p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
