import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => {
  return {
    counter: 0,
    increment: () => set((store) => ({ counter: store.counter + 1 })),
    reset: () => set((store) => ({ counter: 0 })),
  };
});

export default useCounterStore;
