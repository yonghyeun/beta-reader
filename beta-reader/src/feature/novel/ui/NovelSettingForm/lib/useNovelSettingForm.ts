import { createContext, useContext } from "react";
import { ExtractState, create, useStore } from "zustand";

import { getRandomCharacterId } from "./getRandomCharacterId";

type Character = {
  role: string;
  name: string;
  introduction: string;
  // INFO : 해당 state는 API 에서 제공하지 않는 상태로 클라이언트단에서 직접 생성 및 관리해야 한다.
  id: number;
};

export interface NovelSettingFormStoreState {
  title: string;
  plot: string;
  genre: string;
  ageGroup: string;
  keywords: string[];
  characters: Character[];

  /**
   * 위의 state들에서 파생된 state들
   */
  characterIds: number[];
}

interface NovelSettingFormActions {
  setTitle: (title: string) => void;
  setPlot: (plot: string) => void;
  setGenre: (genre: string) => void;
  setAgeGroup: (ageGroup: string) => void;
  setCharacters: (characters: Character[]) => void;

  addKeywords: (keyword: string) => void;
  removeKeyword: (keyword: string) => () => void;

  addCharacter: (id: number) => () => void;
  removeCharacter: (id: number) => () => void;
  updateCharacter: (id: number) => (newCharacter: Partial<Character>) => void;
}

const NOVEL_SETTING_FORM_INITIAL_STATE = (): NovelSettingFormStoreState => {
  const characterId = getRandomCharacterId();

  return {
    title: "",
    plot: "",
    genre: "",
    ageGroup: "",
    keywords: [],
    characters: [
      {
        role: "",
        name: "",
        introduction: "",
        id: characterId
      }
    ],
    characterIds: [characterId]
  };
};

export const createNovelSettingFormStore = (
  initialState: Partial<NovelSettingFormStoreState>
) => {
  const store = create<NovelSettingFormStoreState & NovelSettingFormActions>(
    (set, get) => ({
      ...NOVEL_SETTING_FORM_INITIAL_STATE(),
      ...initialState,

      setTitle: (title: string) => set({ title }),
      setPlot: (plot: string) => set({ plot }),
      setGenre: (genre: string) => set({ genre }),
      setAgeGroup: (ageGroup: string) => set({ ageGroup }),
      setCharacters: (characters: Character[]) => set({ characters }),

      addKeywords: (keyword: string) =>
        set({
          keywords: [...get().keywords, keyword]
        }),

      removeKeyword: (keyword: string) => () =>
        set({
          keywords: get().keywords.filter((item) => item !== keyword)
        }),

      addCharacter: (id: number) => () =>
        set({
          characters: [
            ...get().characters,
            {
              role: "",
              name: "",
              introduction: "",
              id
            }
          ],
          characterIds: [...get().characterIds, id]
        }),

      removeCharacter: (id: number) => () =>
        set({
          characters: get().characters.filter(
            (character) => character.id !== id
          ),
          characterIds: get().characterIds.filter(
            (characterId) => characterId !== id
          )
        }),

      updateCharacter: (id: number) => (newCharacter: Partial<Character>) =>
        set({
          characters: get().characters.map((character) =>
            character.id === id ? { ...character, ...newCharacter } : character
          )
        })
    })
  );

  if (process.env.NODE_ENV === "development") {
    store.subscribe((state) => {
      console.group("NovelSettingFormStore");
      console.table(state);
      console.groupEnd();
    });
  }

  return store;
};

type NovelSettingFormStore = ReturnType<typeof createNovelSettingFormStore>;

export const NovelSettingFormContext =
  createContext<NovelSettingFormStore | null>(null);

export const useNovelSettingFormStore = Object.assign(
  <U>(selector: (state: ExtractState<NovelSettingFormStore>) => U) => {
    const store = useContext(NovelSettingFormContext);
    if (store === null) {
      throw new Error(
        "useNovelSettingFormStore는 NovelSettingFormContext 내에서만 사용해야 합니다"
      );
    }

    return useStore(store, selector);
  },
  {
    getState: () => {
      const store = useContext(NovelSettingFormContext);
      if (store === null) {
        throw new Error(
          "useNovelSettingFormStore.getState는 NovelSettingFormContext 내에서만 사용해야 합니다"
        );
      }

      return store.getState();
    },

    getNovelSettingFormState: () => {
      const store = useContext(NovelSettingFormContext);
      if (store === null) {
        throw new Error(
          "useNovelSettingFormStore.getNovelSettingFormState는 NovelSettingFormContext 내에서만 사용해야 합니다"
        );
      }

      const state = useStore(store, (state) => state);

      const { title, plot, genre, ageGroup, keywords, characters } = state;

      return {
        title,
        plot,
        genre,
        ageGroup,
        keywords,
        characters
      };
    }
  }
);
