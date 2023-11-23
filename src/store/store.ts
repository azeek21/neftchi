import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IGlobalStore {
  tmp: string;
  updateTmp: (tmp: string) => void;
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set) => ({
      tmp: "hii",
      updateTmp: (val) => set({ tmp: val }),
    }),
    {
      name: "global-store",
    }
  )
);

export default useGlobalStore;
