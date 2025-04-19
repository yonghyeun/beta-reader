import { expect, test } from "@playwright/test";

test("JSON Placeholder API 호출 및 데이터 표시 테스트", async ({ page }) => {
  // 홈페이지로 이동합니다
  await page.goto("/");

  // 페이지 타이틀이 올바르게 표시되는지 확인합니다
  const titleElement = await page.getByText("JSON Placeholder API 테스트");
  await expect(titleElement).toBeVisible();

  // 로딩 상태가 표시되었다가 사라지는지 확인합니다
  await expect(page.getByTestId("loading")).toBeVisible();
  await expect(page.getByTestId("loading")).toBeHidden();

  // 포스트 목록이 표시되는지 확인합니다
  const postsList = await page.getByTestId("posts-list");
  await expect(postsList).toBeVisible();

  // 목 데이터 사용 시 - 정확한 목 데이터가 표시되는지 확인
  await expect(page.getByText("테스트 제목 1")).toBeVisible();
  await expect(page.getByText("테스트 내용 1")).toBeVisible();
  await expect(page.getByText("테스트 제목 2")).toBeVisible();
  await expect(page.getByText("테스트 내용 2")).toBeVisible();

  // 총 2개의 포스트가 표시되는지 확인합니다
  const posts = await page.locator('ul[data-testid="posts-list"] > li').count();
  expect(posts).toBe(2);
});
