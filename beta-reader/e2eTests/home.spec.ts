import { expect, test } from "@playwright/test";

test.describe("홈페이지 테스트", () => {
  test("홈페이지가 올바르게 렌더링됩니다", async ({ page }) => {
    // 홈페이지 이동
    await page.goto("/");

    // 페이지 타이틀 확인
    await expect(page).toHaveTitle(/Beta Reader/);

    // 메인 텍스트 확인
    const mainText = page.locator('div:text("Pretandard")');
    await expect(mainText).toBeVisible();
  });

  test("홈페이지 접근성 테스트", async ({ page }) => {
    // 홈페이지 이동
    await page.goto("/");

    // 페이지가 로드되었는지 확인
    await page.waitForLoadState("networkidle");
  });

  test("반응형 디자인 테스트", async ({ page }) => {
    // 홈페이지 이동
    await page.goto("/");

    // 모바일 뷰포트로 설정
    await page.setViewportSize({ width: 375, height: 667 });

    // 태블릿 뷰포트로 설정
    await page.setViewportSize({ width: 768, height: 1024 });

    // 데스크탑 뷰포트로 설정
    await page.setViewportSize({ width: 1280, height: 800 });
  });
});
