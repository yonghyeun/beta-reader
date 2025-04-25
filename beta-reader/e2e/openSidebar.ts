import { MAIN_LAYOUT_ARIA_LABEL } from "@/slots/main/config";
import { Page, expect } from "@playwright/test";

export const openSidebar = async (page: Page) => {
  // 사이드바를 열기 위한 버튼을 찾습니다.
  const menuButton = page.locator(
    `button[aria-label="${MAIN_LAYOUT_ARIA_LABEL.OPEN_SIDEBAR}"]`
  );

  // 버튼이 보일 때까지 기다립니다.
  await expect(menuButton).toBeVisible();

  // 버튼을 클릭하여 사이드바를 엽니다.
  await menuButton.click();

  // 사이드바가 열렸는지 확인합니다 (닫기 버튼이 표시되는지 확인)
  const closeButton = page.locator(
    `button[aria-label="${MAIN_LAYOUT_ARIA_LABEL.CLOSE_SIDEBAR}"]`
  );
  await expect(closeButton).toBeVisible();
};
