import { create } from "zustand";

interface AuthStore {
  username: string;
  login: (name: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => {
  return {
    username: "",
    login: (name: string) => set((store) => ({ username: name })),
    logout: () => set((store) => ({ username: "" })),
  };
});

export default useAuthStore;
