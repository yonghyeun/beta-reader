import { M } from "@/shared/lib/fp";

import { getRandomCharacterId } from "./getRandomCharacterId";
import { pipe } from "@fxts/core";

interface NovelSettingFormResponse {
  title: string;
  plot: string;
  genre: string;
  ageGroup: string;
  keywords: string[];
  characters: {
    role: string;
    name: string;
    introduction: string;
  }[];
}

export const initializeWithIds = (response?: NovelSettingFormResponse) =>
  pipe(
    M.fromNullable(response),
    M.map((initialState) => {
      const characterIds = initialState.characters.map(getRandomCharacterId);
      const characters = initialState.characters.map((character, index) => ({
        ...character,
        id: characterIds[index]
      }));

      return {
        ...initialState,
        characterIds,
        characters
      };
    }),
    M.getOrElse({})
  );
