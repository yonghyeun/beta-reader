import { expect, test } from "@playwright/test";

test.describe("홈페이지 테스트", () => {
  test("홈페이지가 올바르게 렌더링됩니다", async ({ page }) => {
    // 홈페이지 이동
    await page.goto("/");

    // 메인 텍스트 확인
    const mainText = page.locator('div:text("Pretandard")');
    await expect(mainText).toBeVisible();
  });
});
