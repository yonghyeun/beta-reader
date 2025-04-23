"use client";

import { Button } from "@/shared/ui";
import * as Form from "@/shared/ui/Form";

import { NovelAgeRadioGroup } from "./NovelAgeRadioGroup";
import { NovelCharacterInput } from "./NovelCharacterInput";
import { NovelGenreRadioGroup } from "./NovelGenreRadioGroup";
import { NovelKeywordInput } from "./NovelKeywordInput";
import { NovelPlotTextField } from "./NovelPlotTextField";
import { NovelSettingFormProvider } from "./NovelSettingFormProvider";
import { NovelSettingFormSubmitButton } from "./NovelSettingFormSubmitButton";
import { NovelTitleInput } from "./NovelTitleInput";

interface NovelSettingFormProps {
  className?: string;
}

export const NovelSettingForm: React.FC<NovelSettingFormProps> = ({
  className
}) => {
  return (
    <NovelSettingFormProvider>
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
