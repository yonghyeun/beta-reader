import {
  MAIN_LAYOUT_ARIA_LABEL,
  MAIN_LAYOUT_TEXT
} from "../src/slots/main/config/text";
import { expect, test } from "@playwright/test";

test.describe("사이드바 기능 테스트", () => {
  test.beforeEach(async ({ page }) => {
    // 메인 페이지로 이동
    await page.goto("/");
  });

  test("사이드바 열기/닫기 기능 테스트", async ({ page }) => {
    const sidebar = page.locator('nav[aria-label="사이드바 네비게이션"]');

    // 사이드바가 초기에는 닫힌 상태인지 확인
    await expect(sidebar).toHaveAttribute("aria-expanded", "false");

    // 메뉴 아이콘 버튼 클릭하여 사이드바 열기
    const menuButton = page.locator(
      `button[aria-label="${MAIN_LAYOUT_ARIA_LABEL.OPEN_SIDEBAR}"]`
    );
    await menuButton.click();

    // 사이드바가 열렸는지 확인
    await expect(sidebar).toHaveAttribute("aria-expanded", "true");

    // 사이드바 내부에 '연재물 추가' 버튼이 표시되는지 확인
    const addSerialButton = page.locator("a", {
      hasText: MAIN_LAYOUT_TEXT.ADD_SERIAL
    });
    await expect(addSerialButton).toBeVisible();

    // 사이드바 닫기 버튼 클릭
    const closeButton = page.locator(
      `button[aria-label="${MAIN_LAYOUT_ARIA_LABEL.CLOSE_SIDEBAR}"]`
    );
    await expect(closeButton).toBeVisible();
    await closeButton.click();

    // 사이드바가 다시 닫혔는지 확인
    await expect(sidebar).toHaveAttribute("aria-expanded", "false");
  });

  test("사이드바에서 연재물 추가 버튼 클릭 시 동작 테스트", async ({
    page
  }) => {
    // 먼저 사이드바 열기
    const menuButton = page.locator(
      `button[aria-label="${MAIN_LAYOUT_ARIA_LABEL.OPEN_SIDEBAR}"]`
    );
    await menuButton.click();

    // 연재물 추가 버튼 찾기
    const addSerialButton = page.locator("a", {
      hasText: MAIN_LAYOUT_TEXT.ADD_SERIAL
    });
    await expect(addSerialButton).toBeVisible();

    // 연재물 추가 버튼 클릭 (현재는 기능이 구현되지 않았을 수 있으므로 버튼 존재 여부만 확인)
    // 추후 기능이 구현되면 아래 주석을 해제하고 관련 기능 테스트 추가
    // await addSerialButton.click();
    // await expect(page.locator('특정 모달 또는 페이지 요소')).toBeVisible();
  });

  test("반응형 디자인: 사이드바와 헤더의 배치 테스트", async ({ page }) => {
    // 다양한 화면 크기에서 사이드바 테스트

    // 작은 화면 크기에서 테스트
    await page.setViewportSize({ width: 768, height: 1024 });
    const smallScreenSidebar = page.locator(
      'nav[aria-label="사이드바 네비게이션"]'
    );
    await expect(smallScreenSidebar).toBeVisible();

    // 메뉴 버튼 클릭해서 사이드바 열기
    const menuButton = page.locator(
      `button[aria-label="${MAIN_LAYOUT_ARIA_LABEL.OPEN_SIDEBAR}"]`
    );
    await menuButton.click();

    // 작은 화면에서도 사이드바 열리는지 확인
    await expect(smallScreenSidebar).toHaveAttribute("aria-expanded", "true");

    // 큰 화면 크기로 변경
    await page.setViewportSize({ width: 1440, height: 900 });

    // 큰 화면에서도 사이드바가 정상적으로 표시되는지 확인
    const largeScreenSidebar = page.locator(
      'nav[aria-label="사이드바 네비게이션"]'
    );
    await expect(largeScreenSidebar).toBeVisible();
  });
});
