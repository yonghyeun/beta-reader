"use client";

import { BackwardNavigationbar } from "@/shared/ui/BackwardNavigationbar";

import { NOVEL_SETTING_TEXT } from "../config";
import { NovelSettingForm } from "@/feature/novel/ui";

export const NovelSettingPage = () => {
  return (
    <section className="relative flex flex-col gap-10 pb-10">
      <BackwardNavigationbar>
        <h2 className="text-title-4-bold">{NOVEL_SETTING_TEXT.TITLE}</h2>
      </BackwardNavigationbar>
      <NovelSettingHeader />
      <NovelSettingForm />
    </section>
  );
};

const NovelSettingHeader = () => {
  return (
    <header className="flex flex-col gap-3 px-10">
      <h2 className="text-title-3-bold">
        {NOVEL_SETTING_TEXT.MAIN_DESCRIPTION}
      </h2>
      <p className="text-body-1-regular text-secondary-200">
        {NOVEL_SETTING_TEXT.SUB_DESCRIPTION}
      </p>
    </header>
  );
};
