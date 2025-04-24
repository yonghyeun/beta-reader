import { useEffect, useRef, useState } from "react";

import { E } from "@/shared/lib/fp";
import { isLeft } from "@/shared/lib/fp/either";

import { NOVEL_SETTING_FORM_TEXT } from "../config";
import { pipe } from "@fxts/core";

const MAX_KEYWORD_LENGTH = 3;
const ERROR_MESSAGE_AUTO_REMOVE_TIME = 2000;

interface ValidateSuccess {
  keywords: string[];
  text: string;
}

export const useNovelKeywordInput = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState<E.Either<string, null>>(E.right(null));
  const errorMessageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const validateKeywords = (
    keywords: string[],
    onSuccess: ({ keywords, text }: ValidateSuccess) => void
  ) => {
    pipe(
      E.right<string, ValidateSuccess>({ keywords, text }),

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
        (value) => {
          setText("");
          onSuccess(value);
        }
      )
    );
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
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

  return {
    text,
    isError: isLeft(error),
    errorMessage: error.value,
    handleChangeText,
    validateKeywords
  };
};
