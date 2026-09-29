import { useEffect, useState } from "react";
import { useRioStore } from "@/lib/rio-store";
import { LoadingScreen } from "@/components/rio/loading-screen";
import { BranchSelector } from "@/components/rio/branch-selector";
import { Navigation } from "@/components/rio/navigation";
import { Hero } from "@/components/rio/hero";
import { MenuSection } from "@/components/rio/menu-section";
import { SocialSection } from "@/components/rio/social-section";
import { ContactSection } from "@/components/rio/contact-section";
import { LocationSection } from "@/components/rio/location-section";
import { Footer } from "@/components/rio/footer";
import { ParrotCanvas } from "@/components/rio/parrot-canvas";
import { FallingLeaves } from "@/components/rio/falling-leaves";
import { AlwaysOpenSeal } from "@/components/rio/ornament";

export function Experience() {
  const branchId = useRioStore((s) => s.branchId);
  const setPointer = useRioStore((s) => s.setPointer);
  const setScroll = useRioStore((s) => s.setScroll);
  const [booted, setBooted] = useState(false);
  const [choosing, setChoosing] = useState(false);

  useEffect(() => {
    const started = performance.now();
    const img = new Image();
    img.src = "/brand/logo.jpg";
    let imgReady = img.complete;
    let storeReady = false;
    const maybeDone = () => {
      if (!imgReady || !storeReady) return;
      const wait = Math.max(0, 1100 - (performance.now() - started));
      window.setTimeout(() => setBooted(true), wait);
    };
    void Promise.resolve(useRioStore.persist.rehydrate()).then(() => {
      storeReady = true;
      maybeDone();
    });
    const doneImg = () => {
      imgReady = true;
      maybeDone();
    };
    if (!img.complete) {
      img.onload = doneImg;
      img.onerror = doneImg;
    }
    const cap = window.setTimeout(() => setBooted(true), 5200);
    return () => window.clearTimeout(cap);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setScroll(window.scrollY / max);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [setPointer, setScroll]);

  const showChooser = booted && (!branchId || choosing);

  return (
    <div className="grain relative min-h-svh bg-wine-deep">
      <a href="#menu" className="skip-link">
        تخطي إلى المنيو
      </a>
      <ParrotCanvas />
      <FallingLeaves />
      {booted ? (
        <div className="pointer-events-none fixed top-4 end-4 z-30 md:top-6 md:end-8">
          <AlwaysOpenSeal />
        </div>
      ) : null}
      <div className="relative z-[2]">
        <Hero />
        {branchId ? (
          <>
            <MenuSection />
            <SocialSection />
            <ContactSection />
            <LocationSection />
            <Footer />
          </>
        ) : (
          <div className="h-[40vh]" />
        )}
      </div>
      {booted && branchId ? (
        <Navigation onSwitchBranch={() => setChoosing(true)} />
      ) : null}
      <BranchSelector open={showChooser} onDone={() => setChoosing(false)} />
      {showChooser && branchId ? (
        <button
          type="button"
          className="fixed top-5 start-5 z-50 rounded-full bg-wine-mid px-4 py-2 text-sm text-ivory"
          onClick={() => setChoosing(false)}
        >
          رجوع
        </button>
      ) : null}
      <LoadingScreen visible={!booted} />
    </div>
  );
}
