import * as Form from "@/shared/ui/Form";
import * as RadioGroup from "@/shared/ui/Radio";

import { NOVEL_SETTING_FORM, NOVEL_SETTING_TEXT } from "../config";
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
        <p className="text-title-4-bold">{NOVEL_SETTING_TEXT.AGE_GROUP}</p>
        <ul className="grid grid-cols-3 gap-x-[1.25rem] gap-y-[1rem] md:grid-cols-2">
          {NOVEL_SETTING_FORM.AGE_GROUP.options.map((option) => (
            <li key={option.value}>
              <RadioGroup.Input {...option} />
            </li>
          ))}
        </ul>
      </RadioGroup.Container>
    </Form.Wrapper>
  );
};
