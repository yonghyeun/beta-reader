import { Tag } from "@/shared/ui";
import * as TextField from "@/shared/ui/TextField";

import { NOVEL_SETTING_FORM, NOVEL_SETTING_FORM_TEXT } from "../config";
import { useNovelKeywordInput, useNovelSettingFormStore } from "../lib";

export const NovelKeywordInput = () => {
  const keywords = useNovelSettingFormStore((state) => state.keywords);

  const addKeywords = useNovelSettingFormStore((state) => state.addKeywords);
  const removeKeyword = useNovelSettingFormStore(
    (state) => state.removeKeyword
  );
  const { text, validateKeywords, handleChangeText, isError, errorMessage } =
    useNovelKeywordInput();

  const handleKeyUp = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      validateKeywords(keywords, ({ text }) => addKeywords(text.trim()));
    }
  };

  return (
    <TextField.Container className="flex flex-col gap-4">
      <TextField.Label htmlFor={NOVEL_SETTING_FORM.KEYWORDS.name}>
        {NOVEL_SETTING_FORM_TEXT.KEYWORDS}
      </TextField.Label>
      <div className="flex flex-col gap-2.5">
        <TextField.Input
          name={NOVEL_SETTING_FORM.KEYWORDS.name}
          id={NOVEL_SETTING_FORM.KEYWORDS.name}
          placeholder={NOVEL_SETTING_FORM.KEYWORDS.placeholder}
          className="text-body-1-regular"
          onChange={handleChangeText}
          onKeyUp={handleKeyUp}
          value={text}
        />
        <p className="text-warning-100 text-caption-1-medium h-5">
          {isError && (
            <span className="shake-animation inline-block">{errorMessage}</span>
          )}
        </p>
      </div>
      <ul className="flex gap-3 overflow-x-auto" aria-label="Novel keywords">
        {keywords.map((keyword) => (
          <li key={keyword} className="flex-shrink-0">
            <Tag
              onClick={removeKeyword(keyword)}
              aria-label={`Remove keyword ${keyword}`}
            >
              {keyword}
            </Tag>
          </li>
        ))}
      </ul>
    </TextField.Container>
  );
};
