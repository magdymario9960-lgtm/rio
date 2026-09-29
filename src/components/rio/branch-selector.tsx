import { BRANCHES, BRANCH_ORDER, type BranchId } from "@/lib/branch";
import { useRioStore } from "@/lib/rio-store";
import { GoldFlourish } from "@/components/rio/ornament";

export function BranchSelector({ open, onDone }: { open: boolean; onDone?: () => void }) {
  const setBranchId = useRioStore((s) => s.setBranchId);
  const triggerPulse = useRioStore((s) => s.triggerPulse);

  const choose = (id: BranchId) => {
    setBranchId(id);
    triggerPulse();
    onDone?.();
  };

  if (!open) return null;

  return (
    <div className="grain fixed inset-0 z-40 grid place-items-center overflow-auto bg-wine-deep/92 px-4 py-16">
      <div className="w-full max-w-3xl text-center">
        <p className="font-display text-sm tracking-lux text-gold">RIO CAFE</p>
        <h2 className="mt-4 font-sans text-3xl text-ivory md:text-5xl">إنت في أنهي فرع؟</h2>
        <GoldFlourish className="mx-auto mt-5 h-7 w-52 text-gold" />
        <p className="mt-3 text-ivory-dim">اختار الفرع مرّة واحدة، والموقع هيفتكر اختيارك.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {BRANCH_ORDER.map((id) => {
            const b = BRANCHES[id];
            return (
              <button
                key={id}
                type="button"
                onClick={() => choose(id)}
                className="group overflow-hidden rounded-2xl bg-wine text-start shadow-[var(--shadow-gold)] transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-[0.96]"
              >
                <div className="photo-frame relative aspect-[4/3] rounded-none">
                  <img src={b.photo} alt={b.locationLabel} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4">
                    <p className="text-xl text-ivory">{b.locationLabel}</p>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <p className="font-display text-xs tracking-lux text-gold">BRANCH</p>
                  <p className="mt-1 text-2xl text-ivory">{b.nameAr}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
