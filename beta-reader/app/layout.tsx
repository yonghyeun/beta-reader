import { pretendard } from "@/shared/config/fonts";

import "./globals.css";
import { MainLayout } from "@/slots/main/ui";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="bg-secondary-black text-secondary-white">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
