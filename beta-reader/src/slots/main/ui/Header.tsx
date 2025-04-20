import { MainLogo } from "./MainLogo";
import { ROUTES } from "@/src/shared/config/routes";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      className="z-50 flex h-fit w-full items-center justify-between px-6 py-2.5"
      role="banner"
      aria-label="사이트 헤더"
    >
      {/* beta reader icon & home button */}
      <Link href={ROUTES.MAIN()} aria-label="홈으로 이동">
        <MainLogo />
      </Link>
      {/* TODO profile button */}
      <div role="navigation" aria-label="사용자 메뉴">
        <button aria-label="로그인">login</button>
      </div>
    </header>
  );
};
