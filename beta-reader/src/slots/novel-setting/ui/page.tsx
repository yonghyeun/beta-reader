"use client";

import { BackwardButton } from "@/shared/ui";

import { NOVEL_SETTING_TEXT } from "../config";
import { NovelSettingForm } from "@/feature/novel/ui/NovelSettingForm";

export const NovelSettingPage = () => {
  return (
    <section className="flex flex-col gap-10 pb-10">
      <NovelSettingNavigationbar />
      <NovelSettingHeader />
      <NovelSettingForm />
    </section>
  );
};

const NovelSettingNavigationbar = () => {
  return (
    <nav className="border-b-secondary-600 flex gap-5 border-b px-10 py-5">
      <BackwardButton width="2rem" height="2rem" />
      <h2 className="text-title-4-bold">{NOVEL_SETTING_TEXT.TITLE}</h2>
    </nav>
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
