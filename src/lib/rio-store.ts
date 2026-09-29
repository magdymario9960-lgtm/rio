import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BranchId } from "@/lib/branch";

type Pointer = { x: number; y: number };

type RioState = {
  branchId: BranchId | null;
  setBranchId: (id: BranchId) => void;
  pointer: Pointer;
  setPointer: (p: Pointer) => void;
  scroll: number;
  setScroll: (n: number) => void;
  lookAt: string | null;
  setLookAt: (id: string | null) => void;
  pulse: number;
  triggerPulse: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const useRioStore = create<RioState>()(
  persist(
    (set) => ({
      branchId: null,
      setBranchId: (id) => set({ branchId: id }),
      pointer: { x: 0, y: 0 },
      setPointer: (pointer) => set({ pointer }),
      scroll: 0,
      setScroll: (scroll) => set({ scroll }),
      lookAt: null,
      setLookAt: (lookAt) => set({ lookAt }),
      pulse: 0,
      triggerPulse: () => set((s) => ({ pulse: s.pulse + 1 })),
      menuOpen: false,
      setMenuOpen: (menuOpen) => set({ menuOpen }),
    }),
    {
      name: "rio-cafe-branch",
      partialize: (s) => ({ branchId: s.branchId }),
      skipHydration: true,
    },
  ),
);
