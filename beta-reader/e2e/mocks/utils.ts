import { mockSettings } from "./config";
import { Page, Route } from "@playwright/test";

/**
 * API 목 처리를 도와주는 도우미 함수
 * @param page Playwright Page 객체
 * @param path API 경로 부분 (예: 'posts')
 * @param mockFunction 목 응답을 처리하는 함수
 * @returns 목 설정이 활성화되었는지 여부
 */
export const setupApiMock = async (
  page: Page,
  path: keyof typeof mockSettings.apis,
  mockFunction: (route: Route) => Promise<void>
): Promise<boolean> => {
  // 해당 API에 대한 목 설정이 활성화된 경우에만 목 처리 적용
  const shouldUseMock = mockSettings.useMocks || mockSettings.apis[path];

  if (shouldUseMock) {
    await page.route(`**/${path}**`, async (route) => {
      // 설정된 지연 시간만큼 대기
      if (mockSettings.delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, mockSettings.delay));
      }

      // 목 처리 함수 실행
      await mockFunction(route);
    });

    console.log(
      `[Mock] API 경로 "${path}"에 대한 목 데이터가 활성화되었습니다.`
    );
  } else {
    console.log(
      `[Mock] API 경로 "${path}"에 대한 목 데이터가 비활성화되었습니다. 실제 API를 호출합니다.`
    );
  }

  return shouldUseMock;
};
