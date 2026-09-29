import { BRANCHES } from "@/lib/branch";
import { useRioStore } from "@/lib/rio-store";
import { HomeIcon, MenuBookIcon, InstagramIcon, PhoneIcon, PinIcon } from "@/components/rio/icons";

const ITEMS = [
  { id: "hero", label: "الرئيسية", Icon: HomeIcon },
  { id: "menu", label: "المنيو", Icon: MenuBookIcon },
  { id: "social", label: "تابعنا", Icon: InstagramIcon },
  { id: "contact", label: "تواصل معنا", Icon: PhoneIcon },
  { id: "location", label: "موقعنا", Icon: PinIcon },
] as const;

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation({ onSwitchBranch }: { onSwitchBranch: () => void }) {
  const branchId = useRioStore((s) => s.branchId);
  const branch = branchId ? BRANCHES[branchId] : null;

  return (
    <>
      {branch ? (
        <button
          type="button"
          onClick={onSwitchBranch}
          className="nav-pill pointer-events-auto fixed top-4 start-4 z-30 rounded-full px-3 py-2 text-xs text-gold-bright md:hidden"
          aria-label="تغيير الفرع"
        >
          {branch.nameAr}
        </button>
      ) : null}

      <nav
        className="nav-pill pointer-events-auto fixed top-4 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-1 rounded-full px-2 py-2 md:flex"
        aria-label="التنقل"
      >
        {ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => go(item.id)}
            className="rounded-full px-4 py-2 text-sm text-ivory-dim transition-colors duration-200 hover:bg-ivory/10 hover:text-ivory"
          >
            {item.label}
          </button>
        ))}
        {branch ? (
          <button
            type="button"
            onClick={onSwitchBranch}
            className="ms-1 rounded-full bg-gold/15 px-3 py-2 text-xs text-gold-bright"
            aria-label="تغيير الفرع"
          >
            {branch.nameAr}
          </button>
        ) : null}
      </nav>

      <nav
        className="nav-pill pointer-events-auto fixed inset-x-4 bottom-4 z-30 flex items-center justify-around rounded-2xl px-2 py-2 md:hidden"
        aria-label="التنقل"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        {ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => go(item.id)}
            className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1 rounded-xl text-ivory-dim"
            aria-label={item.label}
          >
            <item.Icon size={18} />
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
