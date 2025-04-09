import localFont from "next/font/local";

/**
 * Pretendard 폰트 설정
 *
 * 웹 폰트 로딩 최적화를 위해 next/font/local을 사용하여
 * 로컬 폰트 파일을 불러옵니다.
 */
export const pretendard = localFont({
  src: [
    {
      path: "../../../public/fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Pretendard-Medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Pretendard-Bold.woff",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-pretendard",
  display: "swap" // 폰트 로딩 중에도 텍스트 표시를 위해 swap 사용
});
