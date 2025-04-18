// E2E 테스트에서 목 데이터 사용 여부를 제어하는 설정
export const mockSettings = {
  // true: 모든 API 요청에 목 데이터 사용, false: 실제 API 호출
  // 기본값은 true (목 데이터 사용)
  useMocks: process.env.USE_MOCKS !== "false",

  // 특정 API 경로별 목 데이터 사용 설정 (기본 설정을 오버라이드할 수 있음)
  apis: {
    posts: process.env.USE_POSTS_MOCKS !== "false" // 기본적으로 posts API는 목 데이터 사용
  },

  // 지연 시간 설정 (밀리초)
  delay: Number(process.env.MOCK_DELAY || 500)
};
