import { handlePostsError, handlePostsSuccess } from "./mocks/posts";
import { setupApiMock } from "./mocks/utils";
import { expect, test } from "@playwright/test";

test("JSON Placeholder API 호출 및 데이터 표시 테스트", async ({ page }) => {
  // API 응답을 목 설정에 따라 처리합니다
  const isMockEnabled = await setupApiMock(page, "posts", handlePostsSuccess);

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

  if (isMockEnabled) {
    // 목 데이터 사용 시 - 정확한 목 데이터가 표시되는지 확인
    await expect(page.getByText("테스트 제목 1")).toBeVisible();
    await expect(page.getByText("테스트 내용 1")).toBeVisible();
    await expect(page.getByText("테스트 제목 2")).toBeVisible();
    await expect(page.getByText("테스트 내용 2")).toBeVisible();

    // 총 2개의 포스트가 표시되는지 확인합니다
    const posts = await page
      .locator('ul[data-testid="posts-list"] > li')
      .count();
    expect(posts).toBe(2);
  } else {
    // 실제 API 사용 시 - 포스트가 로드되었는지만 확인 (내용은 변동될 수 있음)
    // 최소 1개 이상의 포스트가 표시되는지 확인합니다
    const posts = await page
      .locator('ul[data-testid="posts-list"] > li')
      .count();
    expect(posts).toBeGreaterThan(0);

    // 실제 API를 사용할 때는 타이틀과 내용이 비어있지 않은지만 확인
    const firstPostTitle = await page
      .locator('ul[data-testid="posts-list"] > li')
      .first()
      .locator("h2")
      .textContent();
    const firstPostBody = await page
      .locator('ul[data-testid="posts-list"] > li')
      .first()
      .locator("p")
      .textContent();

    expect(firstPostTitle?.trim().length).toBeGreaterThan(0);
    expect(firstPostBody?.trim().length).toBeGreaterThan(0);
  }
});

test("API 오류 처리 테스트", async ({ page }) => {
  // 이 테스트는 목 데이터가 활성화된 경우에만 실행합니다
  const isMockEnabled = await setupApiMock(page, "posts", handlePostsError);

  test.skip(
    !isMockEnabled,
    "이 테스트는 목 데이터가 활성화된 경우에만 실행됩니다"
  );

  // 홈페이지로 이동합니다
  await page.goto("/");

  // 로딩 상태가 표시되었다가 사라지는지 확인합니다
  await expect(page.getByTestId("loading")).toBeVisible();
  await expect(page.getByTestId("loading")).toBeHidden();

  // 오류 메시지가 표시되는지 확인합니다
  await expect(page.getByTestId("error")).toBeVisible();
});
