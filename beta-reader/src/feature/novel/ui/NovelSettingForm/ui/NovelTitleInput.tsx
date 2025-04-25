import * as TextField from "@/shared/ui/TextField";

import { NOVEL_SETTING_FORM, NOVEL_SETTING_FORM_TEXT } from "../config";
import {
  useNovelSettingFormStore,
  useNovelSettingFormStoreContext
} from "../lib";

export const NovelTitleInput = () => {
  const setTitle = useNovelSettingFormStore((state) => state.setTitle);

  const store = useNovelSettingFormStoreContext();
  const defaultValue = store.getState().title;

  return (
    <TextField.Container className="flex flex-col gap-4">
      <TextField.Label htmlFor={NOVEL_SETTING_FORM.TITLE.name}>
        {NOVEL_SETTING_FORM_TEXT.TITLE}
      </TextField.Label>
      <TextField.Input
        name={NOVEL_SETTING_FORM.TITLE.name}
        id={NOVEL_SETTING_FORM.TITLE.name}
        placeholder={NOVEL_SETTING_FORM.TITLE.placeholder}
        className="text-body-1-regular"
        defaultValue={defaultValue}
        onChange={({ target }) => setTitle(target.value)}
      />
    </TextField.Container>
  );
};
