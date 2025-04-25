"use client";

import { cva } from "class-variance-authority";

import { ProfileIcon } from "@/shared/assets";
import { ROUTES } from "@/shared/config/routes";
import { Dropdown } from "@/shared/ui/Dropdown";

import { useSidebar } from "../lib";
import { MainLogo } from "./MainLogo";
import Link from "next/link";

const headerVariants = cva(
  "z-50 flex h-fit w-full items-center justify-between px-6 py-2.5",
  {
    variants: {
      isOpen: {
        true: "justify-end",
        false: "justify-between"
      }
    }
  }
);

export const Header = () => {
  const isOpen = useSidebar((state) => state.isOpen);

  return (
    <header
      className={headerVariants({ isOpen })}
      role="banner"
      aria-label="사이트 헤더"
    >
      {/* beta reader icon & home button */}
      {!isOpen && (
        <Link
          href={ROUTES.MAIN()}
          aria-label="홈으로 이동"
          className="fade-in-animation-100"
        >
          <MainLogo />
        </Link>
      )}
      {/* TODO profile button */}
      <div role="navigation" aria-label="사용자 메뉴">
        <Dropdown>
          <Dropdown.Trigger>
            <ProfileIcon width="2rem" height="2rem" />
          </Dropdown.Trigger>
          <Dropdown.Items position="bottom-right">
            <div>팝업</div>
          </Dropdown.Items>
        </Dropdown>
      </div>
    </header>
  );
};
