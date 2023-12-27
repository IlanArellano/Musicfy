import { create } from "zustand";

interface ILangStore {
  lang: string | null;
  setLang: (newLang: string | null) => void;
}

export const useLangStore = create<ILangStore>((set) => ({
  lang: null,
  setLang: (newLang) => set({ lang: newLang }),
}));
