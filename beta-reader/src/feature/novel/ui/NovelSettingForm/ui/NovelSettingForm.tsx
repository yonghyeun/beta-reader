"use client";

import * as Form from "@/shared/ui/Form";

import { initializeWithIds } from "../lib";
import { NovelAgeRadioGroup } from "./NovelAgeRadioGroup";
import { NovelCharacterInput } from "./NovelCharacterInput";
import { NovelGenreRadioGroup } from "./NovelGenreRadioGroup";
import { NovelKeywordInput } from "./NovelKeywordInput";
import { NovelPlotTextField } from "./NovelPlotTextField";
import { NovelSettingFormProvider } from "./NovelSettingFormProvider";
import { NovelSettingFormSubmitButton } from "./NovelSettingFormSubmitButton";
import { NovelTitleInput } from "./NovelTitleInput";

interface NovelSettingFormIniitalResponse {
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

interface NovelSettingFormProps {
  className?: string;
  settingFormResponse?: NovelSettingFormIniitalResponse;
}

export const NovelSettingForm: React.FC<NovelSettingFormProps> = ({
  className,
  settingFormResponse
}) => {
  return (
    <NovelSettingFormProvider
      initialState={initializeWithIds(settingFormResponse)}
    >
      <Form.Container
        className={`flex flex-col gap-[1.125rem] px-[7.13rem] ${className}`}
      >
        {/* 연재물 제목 */}
        <NovelTitleInput />
        {/* 장르 라디오 그룹과 연령 등급 라디오 그룹 */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <NovelGenreRadioGroup />
          <NovelAgeRadioGroup />
        </div>
        {/* 플롯 */}
        <NovelPlotTextField />
        {/* 키워드 */}
        <NovelKeywordInput />
        {/* 등장 인물 */}
        <NovelCharacterInput />

        <NovelSettingFormSubmitButton />
      </Form.Container>
    </NovelSettingFormProvider>
  );
};
