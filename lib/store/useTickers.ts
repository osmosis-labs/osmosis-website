import { create } from "zustand";

interface TickerState {
  currentIndex: number;
}

interface Actions {
  setCurrentIndex: (cb: (prev: TickerState & Actions) => TickerState) => void;
}

export const useTickers = create<TickerState & Actions>((set) => ({
  currentIndex: 0,
  setCurrentIndex: (cb: (prev: TickerState & Actions) => TickerState) =>
    set(cb),
}));
