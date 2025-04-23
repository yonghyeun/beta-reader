import { ensureAllFieldsExist } from "./ensureNonNullable";

// Genre 타입 정의
enum Genre {
  ROMANCE = "ROMANCE",
  BL = "BL",
  ROMANCE_FANTASY = "ROMANCE_FANTASY",
  GL = "GL",
  FANTASY = "FANTASY",
  HORROR = "HORROR",
  MODERN_FANTASY = "MODERN_FANTASY",
  MARTIAL_ARTS = "MARTIAL_ARTS",
  MYSTERY = "MYSTERY",
  DRAMA = "DRAMA"
}

// 연령대 타입 정의
enum AgeGroup {
  GENERAL_AUDIENCE = "GENERAL_AUDIENCE",
  FIFTEEN_ABOVE = "FIFTEEN_ABOVE",
  NINETEEN_ABOVE = "NINETEEN_ABOVE"
}

// 등장인물 역할 타입 정의
enum CharacterRole {
  PROTAGONIST = "PROTAGONIST",
  SECONDARY = "SECONDARY"
}

// 소설 등장 인물 인터페이스
interface NovelCharacter {
  role: CharacterRole;
  name: string;
  introduction: string;
}

// 소설 생성 요청 인터페이스
interface NovelCreationRequest {
  title: string;
  topic: string;
  plot: string;
  genre: Genre;
  ageGroup: AgeGroup;
  keywords: string[];
  characters: NovelCharacter[];
}

describe("ensureAllFieldsExist", () => {
  // 기본 타입 테스트
  test("기본 타입 값 검증", () => {
    // 유효한 값
    expect(ensureAllFieldsExist(1)).toBe(true);
    expect(ensureAllFieldsExist(0)).toBe(true);
    expect(ensureAllFieldsExist(true)).toBe(true);
    expect(ensureAllFieldsExist(false)).toBe(true);
    expect(ensureAllFieldsExist("문자열")).toBe(true);

    // 유효하지 않은 값
    expect(ensureAllFieldsExist(null)).toBe(false);
    expect(ensureAllFieldsExist(undefined)).toBe(false);
    expect(ensureAllFieldsExist("")).toBe(false);
  });

  // 배열 테스트
  test("배열 검증", () => {
    // 유효한 배열
    expect(ensureAllFieldsExist([1, 2, 3])).toBe(true);
    expect(ensureAllFieldsExist(["a", "b", "c"])).toBe(true);
    expect(ensureAllFieldsExist([{ name: "테스트" }])).toBe(true);

    // 유효하지 않은 배열
    expect(ensureAllFieldsExist([])).toBe(false);
    expect(ensureAllFieldsExist([null])).toBe(false);
    expect(ensureAllFieldsExist([undefined])).toBe(false);
    expect(ensureAllFieldsExist([""])).toBe(false);
    expect(ensureAllFieldsExist([1, null, 3])).toBe(false);
  });

  // 객체 테스트
  test("객체 검증", () => {
    // 유효한 객체
    expect(ensureAllFieldsExist({ name: "소설", genre: "판타지" })).toBe(true);
    expect(ensureAllFieldsExist({ count: 1, isPublic: true })).toBe(true);

    // 유효하지 않은 객체
    expect(ensureAllFieldsExist({})).toBe(false);
    expect(ensureAllFieldsExist({ name: "" })).toBe(false);
    expect(ensureAllFieldsExist({ name: null })).toBe(false);
    expect(ensureAllFieldsExist({ name: undefined })).toBe(false);
    expect(ensureAllFieldsExist({ name: "소설", description: null })).toBe(
      false
    );
  });

  // 중첩 객체 테스트
  test("중첩 객체 검증", () => {
    // 유효한 중첩 객체
    expect(
      ensureAllFieldsExist({
        name: "소설",
        author: {
          name: "작가명",
          age: 30
        }
      })
    ).toBe(true);

    expect(
      ensureAllFieldsExist({
        name: "소설",
        chapters: [
          { title: "1장", content: "내용" },
          { title: "2장", content: "내용" }
        ]
      })
    ).toBe(true);

    // 유효하지 않은 중첩 객체
    expect(
      ensureAllFieldsExist({
        name: "소설",
        author: {}
      })
    ).toBe(false);

    expect(
      ensureAllFieldsExist({
        name: "소설",
        author: {
          name: "",
          age: 30
        }
      })
    ).toBe(false);

    expect(
      ensureAllFieldsExist({
        name: "소설",
        chapters: []
      })
    ).toBe(false);

    expect(
      ensureAllFieldsExist({
        name: "소설",
        chapters: [
          { title: "1장", content: "내용" },
          { title: "2장", content: null }
        ]
      })
    ).toBe(false);
  });

  // 실제 사용 사례 테스트
  test("실제 소설 설정 데이터 검증", () => {
    const validNovelSetting: NovelCreationRequest = {
      title: "어둠 속의 빛",
      topic: "마법학교에서의 성장",
      plot: "어둠의 마법사를 물리치기 위해 주인공이 성장하는 과정",
      genre: Genre.FANTASY,
      ageGroup: AgeGroup.FIFTEEN_ABOVE,
      keywords: ["마법", "성장", "모험", "우정"],
      characters: [
        {
          role: CharacterRole.PROTAGONIST,
          name: "아리안",
          introduction: "빛의 마법을 다루는 주인공"
        },
        {
          role: CharacterRole.SECONDARY,
          name: "엘리오트",
          introduction: "주인공의 멘토이자 마법학교 교수"
        }
      ]
    };

    const invalidNovelSetting = {
      title: "어둠 속의 빛",
      topic: "", // 빈 문자열
      plot: "어둠의 마법사를 물리치기 위해 주인공이 성장하는 과정",
      genre: Genre.FANTASY,
      ageGroup: AgeGroup.FIFTEEN_ABOVE,
      keywords: ["마법", "성장", "모험", "우정"],
      characters: [
        {
          role: CharacterRole.PROTAGONIST,
          name: "아리안",
          introduction: "빛의 마법을 다루는 주인공"
        },
        {
          role: CharacterRole.SECONDARY,
          name: "엘리오트",
          introduction: null // null 값
        }
      ]
    };

    expect(ensureAllFieldsExist(validNovelSetting)).toBe(true);
    expect(ensureAllFieldsExist(invalidNovelSetting)).toBe(false);
  });
});
