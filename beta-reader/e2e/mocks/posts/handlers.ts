import { postsErrorResponse } from "./error";
import { postsSuccessResponse } from "./success";
import { Route } from "@playwright/test";

/**
 * Posts API 성공 응답을 모킹하는 핸들러
 */
export const handlePostsSuccess = async (route: Route) => {
  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify(postsSuccessResponse)
  });
};

/**
 * Posts API 오류 응답을 모킹하는 핸들러
 */
export const handlePostsError = async (route: Route) => {
  await route.fulfill({
    status: 500,
    contentType: "application/json",
    body: JSON.stringify(postsErrorResponse)
  });
};
