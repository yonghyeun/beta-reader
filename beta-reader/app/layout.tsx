import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./Pretendard-Medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "./Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal"
    },
    {
      path: "./Pretendard-Bold.woff",
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
