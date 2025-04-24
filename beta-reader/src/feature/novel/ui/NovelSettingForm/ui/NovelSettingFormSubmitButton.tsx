import { Button } from "@/shared/ui";

import { ensureAllFieldsExist, useNovelSettingFormStore } from "../lib";

// TODO API 붙이기
export const NovelSettingFormSubmitButton = () => {
  const novelSettingFormState = useNovelSettingFormStore((state) => state);

  return (
    <div className="flex justify-center">
      <Button
        variant="primary"
        size="lg"
        className="w-[23rem]"
        disabled={!ensureAllFieldsExist(novelSettingFormState)}
      >
        입력내용 저장
      </Button>
    </div>
  );
};
