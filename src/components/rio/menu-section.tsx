import { useEffect, useState } from "react";
import { BRANCHES, BRANCH_ORDER, type BranchId } from "@/lib/branch";
import { useRioStore } from "@/lib/rio-store";
import { Reveal } from "@/components/rio/reveal";
import { RioButton } from "@/components/rio/rio-button";
import { CloseIcon, DownloadIcon, ExpandIcon, MenuBookIcon } from "@/components/rio/icons";
import { GoldFlourish } from "@/components/rio/ornament";
import { cn } from "@/lib/utils";

function PageNumbers({
  count,
  page,
  onPick,
  large,
}: {
  count: number;
  page: number;
  onPick: (i: number) => void;
  large?: boolean;
}) {
  if (count <= 1) return null;
  return (
    <div className={cn("flex flex-wrap items-center justify-center", large ? "gap-3 py-4" : "mt-3 gap-2")}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onPick(i)}
          className={cn(
            "font-sans font-bold transition-transform duration-150",
            large
              ? "grid size-14 place-items-center rounded-2xl text-2xl md:size-16 md:text-3xl"
              : "grid size-11 place-items-center rounded-xl text-lg",
            i === page ? "bg-gold text-ink scale-105" : "bg-wine-mid text-ivory hover:bg-wine-soft",
          )}
          aria-label={`صفحة ${i + 1}`}
          aria-current={i === page ? "page" : undefined}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export function MenuSection() {
  const branchId = useRioStore((s) => s.branchId) ?? "alAslougy";
  const setLookAt = useRioStore((s) => s.setLookAt);
  const [active, setActive] = useState<BranchId>(branchId);
  const [open, setOpen] = useState(true);
  const [lightbox, setLightbox] = useState(false);
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setActive(branchId);
    setOpen(true);
    setPage(0);
  }, [branchId]);

  const branch = BRANCHES[active];
  const pages = branch.menuKind === "pdf" ? (branch.menuPages ?? []) : branch.menuImage ? [branch.menuImage] : [];
  const current = pages[Math.min(page, pages.length - 1)];

  const goHome = () => {
    setLightbox(false);
    setZoom(1);
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="menu" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-lux text-gold">THE MENU</p>
          <h2 className="mt-3 text-4xl text-ivory md:text-5xl">المنيو</h2>
          <GoldFlourish className="mx-auto mt-4 h-7 w-52 text-gold" />
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {BRANCH_ORDER.map((id) => (
            <RioButton
              key={id}
              variant={active === id ? "gold" : "ghost"}
              onClick={() => {
                setActive(id);
                setOpen(true);
                setPage(0);
                setLookAt("menu");
              }}
              ariaLabel={`منيو ${BRANCHES[id].nameAr}`}
            >
              <MenuBookIcon size={18} />
              منيو {BRANCHES[id].nameAr}
            </RioButton>
          ))}
        </div>

        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="mt-8 rounded-2xl bg-wine p-3 shadow-[var(--shadow-gold)] md:p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-ivory-dim">منيو {branch.nameAr}</p>
                <div className="flex gap-2">
                  {branch.menuPdf ? (
                    <RioButton href={branch.menuPdf} download variant="ghost" className="min-h-11 px-4 py-2 text-sm">
                      <DownloadIcon size={16} />
                      تحميل
                    </RioButton>
                  ) : null}
                  <RioButton
                    variant="ghost"
                    className="min-h-11 px-4 py-2 text-sm"
                    onClick={() => setLightbox(true)}
                    ariaLabel="عرض أكبر"
                  >
                    <ExpandIcon size={16} />
                    تكبير
                  </RioButton>
                </div>
              </div>
              {current ? (
                <div className="overflow-auto rounded-xl bg-ink">
                  <img
                    src={current}
                    alt={`منيو ${branch.nameAr}`}
                    className="mx-auto max-h-[80vh] w-full object-contain"
                  />
                </div>
              ) : null}
              <PageNumbers count={pages.length} page={page} onPick={setPage} large={pages.length > 1} />
            </div>
          </div>
        </div>
      </div>

      {lightbox && current ? (
        <div
          className="fixed inset-0 z-[60] bg-ink/92 p-3"
          role="dialog"
          aria-modal="true"
          aria-label="عرض المنيو"
        >
          <div className="mx-auto flex h-full max-w-5xl flex-col">
            <div className="flex items-center justify-between gap-2 py-2">
              <RioButton variant="gold" className="min-h-11 px-5" onClick={goHome} ariaLabel="رجوع للرئيسية">
                رجوع
              </RioButton>
              <div className="flex gap-2">
                <RioButton variant="ghost" className="min-h-11 px-4" onClick={() => setZoom((z) => Math.min(3, z + 0.25))}>
                  +
                </RioButton>
                <RioButton variant="ghost" className="min-h-11 px-4" onClick={() => setZoom((z) => Math.max(1, z - 0.25))}>
                  −
                </RioButton>
                <button
                  type="button"
                  className="grid size-11 place-items-center rounded-full text-ivory"
                  onClick={() => {
                    setLightbox(false);
                    setZoom(1);
                  }}
                  aria-label="إغلاق"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-auto" style={{ touchAction: "pinch-zoom" }}>
              <img
                src={current}
                alt={`منيو ${branch.nameAr}`}
                className="mx-auto origin-top"
                style={{ width: `${zoom * 100}%`, maxWidth: "none" }}
              />
            </div>
            <PageNumbers count={pages.length} page={page} onPick={setPage} large />
          </div>
        </div>
      ) : null}
    </section>
  );
}
