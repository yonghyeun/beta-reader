import { PropsWithChildren } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col" role="application">
      <div className="flex" role="presentation">
        <Sidebar />
        <Header />
      </div>
      <main id="main-content" className="flex-grow" aria-label="메인 콘텐츠">
        {children}
      </main>
    </div>
  );
};
