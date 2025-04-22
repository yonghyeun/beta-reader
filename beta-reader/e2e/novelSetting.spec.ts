import { ROUTES } from "@/shared/config/routes";

import { openSidebar } from "./openSidebar";
import { MAIN_LAYOUT_TEXT } from "@/slots/main/config";
import { expect, test } from "@playwright/test";

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
});
