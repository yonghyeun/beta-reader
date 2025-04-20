import { create } from "zustand";

interface UseSidebarStates {
  isOpen: boolean;
}

interface UseSidebarActions {
  toggle: (action: "open" | "close") => () => void;
}

export const useSidebar = create<UseSidebarStates & UseSidebarActions>(
  (set) => ({
    isOpen: false,
    toggle: (action: "open" | "close") => () =>
      set({ isOpen: action === "open" })
  })
);
