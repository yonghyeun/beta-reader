import { PlusSmallIcon } from "@/shared/assets";
import { Button, TextButton } from "@/shared/ui";
import * as Form from "@/shared/ui/Form";
import * as RadioGroup from "@/shared/ui/Radio";

import { NOVEL_SETTING_FORM } from "../config";
import { getRandomCharacterId, useNovelSettingFormStore } from "../lib";

export const NovelCharacterInput = () => {
  const characterIds = useNovelSettingFormStore((state) => state.characterIds);
  const addCharacter = useNovelSettingFormStore((state) => state.addCharacter);
  const nextCharacterId = getRandomCharacterId();

  return (
    <Form.Wrapper className="flex flex-col gap-3">
      <header className="flex items-center justify-between">
        <p className="text-title-4-bold">등장인물</p>
        <Button
          variant="secondary"
          className="pr-5 pl-4"
          onClick={addCharacter(nextCharacterId)}
          type="button"
        >
          <PlusSmallIcon />
          등장인물 추가
        </Button>
      </header>

      <ul className="flex flex-col gap-3">
        {characterIds.map((characterId) => (
          <li key={characterId}>
            <CharacterInputItem id={characterId} />
          </li>
        ))}
      </ul>
    </Form.Wrapper>
  );
};

interface CharacterInputItemProps {
  id: number;
}

const CharacterInputItem: React.FC<CharacterInputItemProps> = ({ id }) => {
  const characterIds = useNovelSettingFormStore((state) => state.characterIds);

  const character = useNovelSettingFormStore(
    (state) => state.characters.find((character) => character.id === id)!
  );

  const updateCharacter = useNovelSettingFormStore(
    (state) => state.updateCharacter
  )(id);

  const removeCharacter = useNovelSettingFormStore(
    (state) => state.removeCharacter
  );

  return (
    <div className="bg-secondary-800 flex flex-col gap-[1.125rem] rounded-2xl p-5">
      <div className="flex flex-col gap-3.5">
        <div className="flex">
          <div className="flex flex-col gap-3.5">
            <label
              htmlFor={`${id} 캐릭터 인물 이름`}
              className="sr-only"
            >{`${id} 캐릭터 인물 이름`}</label>
            <input
              id={`${id} 캐릭터 인물 이름`}
              className="text-body-1-regular focus:outline-none"
              placeholder="인물 이름 입력"
              onChange={({ target }) =>
                updateCharacter({
                  name: target.value
                })
              }
              aria-required="true"
            />

            <RadioGroup.Container
              name="role"
              onRadioGroupChange={(role) => updateCharacter({ role })}
              className="flex gap-3.5"
              onChange={({ target }) => updateCharacter({ role: target.value })}
              value={character.role}
              aria-label="등장인물 역할"
              aria-required="true"
              role="radiogroup"
            >
              {NOVEL_SETTING_FORM.CHARACTER.ROLE.options.map((option) => (
                <RadioGroup.Input
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  id={`${id} 캐릭터 역할 ${option.label}`}
                  aria-describedby={`role-desc-${id}`}
                />
              ))}
            </RadioGroup.Container>
            <div id={`role-desc-${id}`} className="sr-only">
              등장인물의 역할을 선택하세요. 주연과 주인공 중 하나를 필수적으로
              선택해야 합니다.
            </div>
          </div>

          <div className="flex-1">
            <label
              htmlFor={`${id} 인물 소개`}
              className="sr-only"
              id={`intro-label-${id}`}
            >{`${id} 인물에 대한 소개 글`}</label>
            <textarea
              rows={2}
              className="focus:ring-primary-300 text-body-3-medium w-full rounded-xl bg-[rgba(96,101,117,0.20)] px-[1.125rem] py-3 focus:ring-1 focus:outline-none"
              placeholder="인물 소개 입력"
              id={`${id} 인물 소개`}
              onChange={({ target }) =>
                updateCharacter({
                  introduction: target.value
                })
              }
              aria-labelledby={`intro-label-${id}`}
              aria-multiline="true"
            ></textarea>
          </div>
        </div>
        <footer className="flex justify-end">
          <TextButton
            onClick={removeCharacter(id)}
            disabled={characterIds.length <= 1}
            aria-label={`등장인물 ${character.name || "이름 없음"} 삭제`}
          >
            등장인물 삭제
          </TextButton>
        </footer>
      </div>
    </div>
  );
};
