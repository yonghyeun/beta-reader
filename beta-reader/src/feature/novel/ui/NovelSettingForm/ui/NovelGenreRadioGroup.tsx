import * as Form from "@/shared/ui/Form";
import * as RadioGroup from "@/shared/ui/Radio";

import { NOVEL_SETTING_FORM, NOVEL_SETTING_FORM_TEXT } from "../config";
import { useNovelSettingFormStore } from "../lib";

export const NovelGenreRadioGroup = () => {
  const setGenre = useNovelSettingFormStore((state) => state.setGenre);

  return (
    <Form.Wrapper className="flex-grow">
      <RadioGroup.Container
        name={NOVEL_SETTING_FORM.GENRE.name}
        onRadioGroupChange={setGenre}
        className="flex flex-col gap-[1.125rem]"
      >
        <p className="text-title-4-bold">{NOVEL_SETTING_FORM_TEXT.GENRE}</p>
        <ul className="grid grid-cols-3 gap-x-[1.25rem] gap-y-[1rem] lg:grid-cols-4">
          {NOVEL_SETTING_FORM.GENRE.options.map((option) => (
            <li key={option.value}>
              <RadioGroup.Input {...option} id={option.value} />
            </li>
          ))}
        </ul>
      </RadioGroup.Container>
    </Form.Wrapper>
  );
};
