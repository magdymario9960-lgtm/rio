export function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <div
      className={`grain fixed inset-0 z-50 grid place-items-center bg-wine-deep transition-opacity duration-700 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
      role="status"
      aria-live="polite"
    >
      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative">
          <div className="breath-ring absolute -inset-4 rounded-full border border-gold/40" />
          <img
            src="/brand/logo.jpg"
            alt="Rio Cafe"
            className="size-36 rounded-full object-cover shadow-[0_0_0_1px_rgb(201_164_108_/_40%),0_20px_50px_rgb(0_0_0_/_40%)] md:size-44"
          />
        </div>
        <p className="mt-8 font-display text-4xl gold-text md:text-5xl">Rio</p>
        <p className="mt-3 text-sm text-ivory-dim">بنجهّز تجربتك في ريو</p>
        <div className="mt-8 h-px w-32 overflow-hidden bg-gold/20">
          <div className="h-full w-1/2 bg-gold-bright" style={{ animation: "load-slide 1.4s ease-in-out infinite" }} />
        </div>
      </div>
      <style>{`@keyframes load-slide { from { transform: translateX(-120%); } to { transform: translateX(220%); } }`}</style>
    </div>
  );
}
