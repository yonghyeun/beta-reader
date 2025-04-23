import { useState } from "react";

import { Tag } from "@/shared/ui";
import * as TextField from "@/shared/ui/TextField";

import { NOVEL_SETTING_FORM, NOVEL_SETTING_TEXT } from "../config";
import { useNovelSettingFormStore } from "../lib";

// TODO : 키워드 추가 시 중복 방지
// TODO : 키워드 추가 시 최대 개수를 넘어가는 경우 알림
export const NovelKeywordInput = () => {
  const [text, setText] = useState("");

  const keywords = useNovelSettingFormStore((state) => state.keywords);
  const addKeywords = useNovelSettingFormStore((state) => state.addKeywords);
  const removeKeyword = useNovelSettingFormStore(
    (state) => state.removeKeyword
  );

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addKeywords(text.trim());
      setText("");
    }
  };

  return (
    <TextField.Container className="flex flex-col gap-4">
      <TextField.Label htmlFor={NOVEL_SETTING_FORM.KEYWORDS.name}>
        {NOVEL_SETTING_TEXT.KEYWORDS}
      </TextField.Label>
      <TextField.Input
        name={NOVEL_SETTING_FORM.KEYWORDS.name}
        id={NOVEL_SETTING_FORM.KEYWORDS.name}
        placeholder={NOVEL_SETTING_FORM.KEYWORDS.placeholder}
        className="text-body-1-regular"
        onChange={({ target }) => setText(target.value)}
        onKeyUp={handleKeyUp}
        value={text}
      />
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
      {/* TODO statusText 건의하기 */}
    </TextField.Container>
  );
};
