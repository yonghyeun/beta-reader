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
      <section className="flex h-dvh w-full flex-col">
        <Header />
        <section className="flex-1 overflow-auto">{children}</section>
      </section>
    </main>
  );
};
