import { PropsWithChildren } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      id="main-content"
      className="flex min-h-screen"
      aria-label="메인 콘텐츠"
    >
      <Sidebar />
      <section className="w-full">
        <Header />
        {children}
      </section>
    </main>
  );
};
