import { ROUTES } from "@/shared/config/routes";

import { openSidebar } from "./openSidebar";
import { NOVEL_SETTING_FORM_TEXT } from "@/feature/novel/ui/NovelSettingForm/config";
import { MAIN_LAYOUT_TEXT } from "@/slots/main/config";
import { expect, test } from "@playwright/test";

const ERROR_MESSAGE_AUTO_REMOVE_TIME = 2000; // 에러 메시지가 자동으로 사라지는 시간 (ms)

test.describe("소설 설정집 기능 테스트", () => {
  test(`${ROUTES.MAIN()} 페이지에서 소설 설정집으로 이동`, async ({ page }) => {
    // 메인 페이지로 이동
    await page.goto(ROUTES.MAIN());

    await openSidebar(page);

    // 소설 설정집으로 이동하는 링크 클릭
    const novelSettingLink = page.locator("a", {
      hasText: MAIN_LAYOUT_TEXT.ADD_SERIAL
    });
    await novelSettingLink.click();

    // 소설 설정집 페이지로 이동했는지 확인
    await expect(page).toHaveURL(ROUTES.NOVEL_SETTING());
  });

  test("소설 설정 페이지에서 모든 항목이 채워져야 버튼이 활성화된다", async ({
    page
  }) => {
    await page.goto(ROUTES.NOVEL_SETTING());

    // 초기 상태: 버튼이 비활성화 상태인지 확인
    const submitButton = page.getByRole("button", { name: "입력내용 저장" });
    await expect(submitButton).toBeDisabled();

    // 1. 연재물 제목 입력
    await page.getByRole("textbox", { name: "연재물 제목" }).click();
    await page
      .getByRole("textbox", { name: "연재물 제목" })
      .fill("연재물 제목");
    await expect(submitButton).toBeDisabled(); // 여전히 비활성화 상태여야 함

    // 2. 장르 선택
    await page
      .locator("label")
      .filter({ hasText: /^로맨스$/ })
      .click();
    await expect(submitButton).toBeDisabled(); // 여전히 비활성화 상태여야 함

    // 3. 연령대 선택
    await page.getByText("전체 이용가").click();
    await expect(submitButton).toBeDisabled(); // 여전히 비활성화 상태여야 함

    // 4. 플롯 입력
    await page.getByRole("textbox", { name: "플롯" }).click();
    await page.getByRole("textbox", { name: "플롯" }).fill("플롯입니다.");
    await expect(submitButton).toBeDisabled(); // 여전히 비활성화 상태여야 함

    // 5. 키워드 입력
    await page.getByRole("textbox", { name: "키워드(최대 3개)" }).click();
    await page
      .getByRole("textbox", { name: "키워드(최대 3개)" })
      .fill("키워드");
    await page
      .getByRole("textbox", { name: "키워드(최대 3개)" })
      .press("Enter");
    await expect(submitButton).toBeDisabled(); // 여전히 비활성화 상태여야 함

    // 6. 캐릭터 역할 선택
    await page.getByText("조연").click();
    await expect(submitButton).toBeDisabled(); // 여전히 비활성화 상태여야 함

    // 7. 인물 소개 입력
    await page.getByRole("textbox", { name: "인물에 대한 소개 글" }).click();
    await page
      .getByRole("textbox", { name: "인물에 대한 소개 글" })
      .fill("인물소개입니다.");
    await expect(submitButton).toBeDisabled(); // 여전히 비활성화 상태여야 함

    // 8. 캐릭터 이름 입력 (마지막 필수 필드)
    await page.getByRole("textbox", { name: "캐릭터 인물 이름" }).click();
    await page
      .getByRole("textbox", { name: "캐릭터 인물 이름" })
      .fill("인물 이름입니다.");

    // 모든 필수 항목이 입력되었으므로 버튼이 활성화되어야 함
    await expect(submitButton).toBeEnabled();

    // 활성화된 버튼을 클릭할 수 있는지 확인
    await submitButton.click();
  });

  test("키워드 입력 시 발생하는 에러 메시지가 올바르게 표시된다", async ({
    page
  }) => {
    await page.goto(ROUTES.NOVEL_SETTING());

    // 키워드 입력 필드 가져오기
    const keywordInput = page.getByRole("textbox", {
      name: NOVEL_SETTING_FORM_TEXT.KEYWORDS
    });

    // 테스트 1: 빈 키워드(공백만) 입력 시 에러 메시지 확인
    await keywordInput.click();
    await keywordInput.fill("   "); // 공백만 있는 키워드
    await keywordInput.press("Enter");

    // 빈 키워드 에러 메시지 확인
    const emptyKeywordError = page.getByText(
      NOVEL_SETTING_FORM_TEXT.ERROR.EMPTY_KEYWORD
    );
    await expect(emptyKeywordError).toBeVisible();

    // 에러 메시지가 자동으로 사라질 때까지 대기
    await expect(emptyKeywordError).toBeVisible();
    await page.waitForTimeout(ERROR_MESSAGE_AUTO_REMOVE_TIME + 500); // 에러 메시지 자동 제거 시간 + 여유 시간
    await expect(emptyKeywordError).not.toBeVisible();

    // 테스트 2: 중복 키워드 입력 시 에러 메시지 확인
    // 첫 번째 키워드 입력
    await keywordInput.click();
    await keywordInput.fill("키워드1");
    await keywordInput.press("Enter");

    // 키워드 추가 확인
    await expect(page.getByText("키워드1")).toBeVisible();

    // 동일한 키워드 다시 입력 (중복 키워드)
    await keywordInput.click();
    await keywordInput.fill("키워드1");
    await keywordInput.press("Enter");

    // 중복 키워드 에러 메시지 확인
    const duplicateKeywordError = page.getByText(
      NOVEL_SETTING_FORM_TEXT.ERROR.DUPLICATE_KEYWORD
    );
    await expect(duplicateKeywordError).toBeVisible();

    // 에러 메시지가 자동으로 사라질 때까지 대기
    await page.waitForTimeout(ERROR_MESSAGE_AUTO_REMOVE_TIME + 500);
    await expect(duplicateKeywordError).not.toBeVisible();

    // 테스트 3: 키워드 최대 개수(3개) 초과 시 에러 메시지 확인
    // 두 번째 키워드 입력
    await keywordInput.click();
    await keywordInput.fill("키워드2");
    await keywordInput.press("Enter");

    // 세 번째 키워드 입력
    await keywordInput.click();
    await keywordInput.fill("키워드3");
    await keywordInput.press("Enter");

    // 키워드가 3개인지 확인
    await expect(page.getByText("키워드1")).toBeVisible();
    await expect(page.getByText("키워드2")).toBeVisible();
    await expect(page.getByText("키워드3")).toBeVisible();

    // 네 번째 키워드 입력 시도 (최대 개수 초과)
    await keywordInput.click();
    await keywordInput.fill("키워드4");
    await keywordInput.press("Enter");

    // 최대 개수 초과 에러 메시지 확인
    const maxKeywordError = page.getByText(
      NOVEL_SETTING_FORM_TEXT.ERROR.MAX_KEYWORD
    );
    await expect(maxKeywordError).toBeVisible();

    // 에러 메시지가 자동으로 사라질 때까지 대기
    await page.waitForTimeout(ERROR_MESSAGE_AUTO_REMOVE_TIME + 500);
    await expect(maxKeywordError).not.toBeVisible();

    // 테스트 4: 키워드 삭제 후 다시 추가 가능한지 확인
    // 기존 키워드 중 하나 삭제
    await page.getByRole("listitem").filter({ hasText: "키워드1" }).click();

    // 키워드가 삭제되었는지 확인
    await expect(page.getByText("키워드1")).not.toBeVisible();

    // 새 키워드 추가
    await keywordInput.click();
    await keywordInput.fill("새로운키워드");
    await keywordInput.press("Enter");

    // 새 키워드가 추가되었는지 확인
    await expect(page.getByText("새로운키워드")).toBeVisible();
  });
});
