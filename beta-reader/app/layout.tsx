import "./globals.css";
import { pretendard } from "@/src/shared/config/fonts";
import { MainLayout } from "@/src/slots/main/ui";

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
