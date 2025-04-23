import { useEffect, useRef, useState } from "react";

import { E } from "@/shared/lib/fp";
import { Tag } from "@/shared/ui";
import * as TextField from "@/shared/ui/TextField";

import { NOVEL_SETTING_FORM, NOVEL_SETTING_FORM_TEXT } from "../config";
import { useNovelSettingFormStore } from "../lib";
import { pipe } from "@fxts/core";

const MAX_KEYWORD_LENGTH = 3;
const ERROR_MESSAGE_AUTO_REMOVE_TIME = 2000;

export const NovelKeywordInput = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState<E.Either<string, null>>(E.right(null));
  const errorMessageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const keywords = useNovelSettingFormStore((state) => state.keywords);

  const addKeywords = useNovelSettingFormStore((state) => state.addKeywords);
  const removeKeyword = useNovelSettingFormStore(
    (state) => state.removeKeyword
  );

  const handleKeyUp = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      pipe(
        E.right({ keywords, text }) as E.Either<
          string,
          { keywords: string[]; text: string }
        >,

        E.fromPredicate(
          ({ text }) => text.trim().length > 0,
          NOVEL_SETTING_FORM_TEXT.ERROR.EMPTY_KEYWORD
        ),

        E.fromPredicate(
          ({ keywords }) => keywords.length < MAX_KEYWORD_LENGTH,
          NOVEL_SETTING_FORM_TEXT.ERROR.MAX_KEYWORD
        ),

        E.fromPredicate(
          ({ keywords, text }) => !keywords.includes(text.trim()),
          NOVEL_SETTING_FORM_TEXT.ERROR.DUPLICATE_KEYWORD
        ),

        E.tabBoth(
          (error) => setError(E.left(error)),
          ({ text }) => {
            addKeywords(text.trim());
            setText("");
          }
        )
      );
    }
  };

  useEffect(() => {
    if (E.isLeft(error)) {
      if (errorMessageTimerRef.current) {
        clearTimeout(errorMessageTimerRef.current);
      }
      errorMessageTimerRef.current = setTimeout(() => {
        setError(E.right(null));
      }, ERROR_MESSAGE_AUTO_REMOVE_TIME);
    }
  }, [error]);

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
          onChange={({ target }) => setText(target.value)}
          onKeyUp={handleKeyUp}
          value={text}
        />
        <p className="text-warning-100 text-caption-1-medium h-5">
          {E.isLeft(error) && (
            <span className="shake-animation inline-block">{error.value}</span>
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
