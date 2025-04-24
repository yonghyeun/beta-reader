import * as Form from "@/shared/ui/Form";
import * as RadioGroup from "@/shared/ui/Radio";

import { NOVEL_SETTING_FORM, NOVEL_SETTING_FORM_TEXT } from "../config";
import { useNovelSettingFormStore } from "../lib";

export const NovelAgeRadioGroup = () => {
  const setAgeGroup = useNovelSettingFormStore((state) => state.setAgeGroup);
  return (
    <Form.Wrapper>
      <RadioGroup.Container
        name={NOVEL_SETTING_FORM.AGE_GROUP.name}
        onRadioGroupChange={setAgeGroup}
        className="flex flex-col gap-[1.125rem]"
      >
        <p className="text-title-4-bold">{NOVEL_SETTING_FORM_TEXT.AGE_GROUP}</p>
        <ul className="flex flex-col gap-[1.125rem]">
          {NOVEL_SETTING_FORM.AGE_GROUP.options.map((option) => (
            <li key={option.value}>
              <RadioGroup.Input {...option} id={option.value} />
            </li>
          ))}
        </ul>
      </RadioGroup.Container>
    </Form.Wrapper>
  );
};
