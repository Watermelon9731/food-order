import { create } from "zustand";

interface UserState {
  bears: number;
}

export const useUserStore = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: UserState) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));
