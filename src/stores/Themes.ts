import { create } from "zustand";

export const baseApiUrl = "https://sereni.space";
// export const baseApiUrl = "http://localhost:3001";

export interface IThemesStore {
  data: ITheme[];
  fetchThemes: () => void;
  activeTheme: null | ITheme;
  setActiveTheme: (slug: string) => void;
  activeThemeStep: null | IThemeStep;
  setActiveThemeStep: (id: number) => void;
}

export interface IAnswer {
  id: number;
  word: string;
  correct: boolean;
  themeStepId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IThemeStep {
  id: number;
  name: string;
  image: string;
  themeId: number;
  createdAt: string;
  updatedAt: string;
  answers: IAnswer[];
}

export interface ITheme {
  id: number;
  name: string;
  slug: string;
  themeCardBg: string;
  initialThemeScreenBg: string;
  createdAt: string;
  updatedAt: string;
  themeSteps: IThemeStep[];
}

const useThemesStore = create<IThemesStore>((set) => ({
  data: [],
  activeThemeStep: null,
  activeTheme: null,
  setActiveThemeStep: (id: number) => {
    set((prevState) => {
      const themeStep = prevState.activeTheme?.themeSteps.find(
        (item) => item.id === id
      );
      return {
        activeThemeStep: themeStep ?? null,
      };
    });
  },
  setActiveTheme: (slug: string) => {
    set((prevState) => {
      const theme = prevState.data.find((item) => item.slug === slug);
      return {
        activeTheme: theme ?? null,
      };
    });
  },
  fetchThemes: async () => {
    try {
      const response = await fetch(`${baseApiUrl}/themes`);
      const data: ITheme[] = await response.json();
      set({
        data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

export default useThemesStore;
