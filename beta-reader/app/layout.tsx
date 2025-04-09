import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/Pretendard-Medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/Pretendard-Bold.woff",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-pretendard",
  display: "swap"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
