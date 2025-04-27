export const MAIN_LAYOUT_TEXT = {
  /**
   * Header Main 로고에 존재하는 텍스트
   */
  LOGO: "beta reader",
  /**
   * 사이드 접기 텍스트
   */
  CLOSE_SIDEBAR: "접기",
  /**
   * 연재물 등록
   */
  ADD_SERIAL: "연재물 등록"
} as const;

export const MAIN_LAYOUT_ARIA_LABEL = {
  /**
   * 사이드 접기 버튼 aria-label
   */
  CLOSE_SIDEBAR: "사이드바 접기",
  /**
   * 사이드바 열기 버튼 aria-label
   */
  OPEN_SIDEBAR: "사이드바 열기"
} as const;

export const MAIN_TAB_TEXT = {
  NOVEL: "연재물",
  MANUSCRIPT: "원고지",
  COMMENT: "댓글 내역"
} as const;
