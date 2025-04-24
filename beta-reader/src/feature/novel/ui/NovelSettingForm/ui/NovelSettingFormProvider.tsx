import React from "react";

import {
  NovelSettingFormContext,
  type NovelSettingFormStoreState,
  createNovelSettingFormStore
} from "../lib";

interface NovelSettingFormProviderProps {
  initialState: Partial<NovelSettingFormStoreState>;
  children: React.ReactNode;
}

export const NovelSettingFormProvider: React.FC<
  NovelSettingFormProviderProps
> = ({ initialState, children }) => (
  <NovelSettingFormContext.Provider
    value={createNovelSettingFormStore(initialState)}
  >
    {children}
  </NovelSettingFormContext.Provider>
);
