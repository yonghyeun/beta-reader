"use client";

import { cva } from "class-variance-authority";

import { MAIN_LAYOUT_ARIA_LABEL, MAIN_LAYOUT_TEXT } from "../config";
import { useSidebar } from "../lib";
import { MainLogo } from "./MainLogo";
import { AddIcon, MenuIcon } from "@/src/shared/assets";
import { ROUTES } from "@/src/shared/config/routes";
import { TextButton } from "@/src/shared/ui";
import Link from "next/link";

const sideNavVariant = cva(
  "bg-secondary-900 h-screen flex-col ease-in-out transition-all duration-300",
  {
    variants: {
      isOpen: {
        true: "w-[20%] min-w-[13.5rem]",
        false: "w-[4.8%] min-w-[2rem]"
      }
    }
  }
);

export const Sidebar = () => {
  const isOpen = useSidebar((state) => state.isOpen);
  const toggle = useSidebar((state) => state.toggle);

  return (
    <nav
      aria-label="사이드바 네비게이션"
      className={sideNavVariant({ isOpen })}
      role="navigation"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* 열린 상태 (큰 사이드바) */}
        {isOpen && (
          <nav className="fade-in-animation flex flex-col gap-4">
            {/* header 대신 나타나는 MainIcon Logo */}
            <TextButton
              as="link"
              href={ROUTES.MAIN()}
              aria-label="홈으로 이동"
              className="fade-in-animation mx-auto h-[4.25rem] px-3 py-2.5"
            >
              <MainLogo />
            </TextButton>
            {/* 연재물 추가 & 사이드바 접기 버튼 */}
            <div
              className="text-caption-1-regular flex justify-end gap-1 px-2.5"
              role="toolbar"
              aria-label="사이드바 컨트롤"
            >
              {/* TODO : 연재물 추가 기능 작업 시 생성 */}
              <TextButton
                href="#"
                as="link"
                className="pr-1 pl-0.5"
                aria-label={MAIN_LAYOUT_TEXT.ADD_SERIAL}
              >
                <AddIcon width="1rem" height="1rem" aria-hidden="true" />
                <span>{MAIN_LAYOUT_TEXT.ADD_SERIAL}</span>
              </TextButton>
              <TextButton
                onClick={toggle("close")}
                aria-label={MAIN_LAYOUT_ARIA_LABEL.CLOSE_SIDEBAR}
              >
                <span>{MAIN_LAYOUT_TEXT.CLOSE_SIDEBAR}</span>
              </TextButton>
            </div>
            {/* divider line */}
            <div className="bg-secondary-600 h-[1px] w-full" />
            {/* 연재물 리스트 navigation bar */}
            <ul role="menu" aria-label="연재물 목록" className="px-2.5">
              <li role="none"></li>
            </ul>
          </nav>
        )}

        {/* 닫힌 상태 (작은 사이드바) */}
        {!isOpen && (
          <div className="flex h-full items-start justify-center py-[5.25rem]">
            <TextButton
              onClick={toggle("open")}
              aria-label={MAIN_LAYOUT_ARIA_LABEL.OPEN_SIDEBAR}
              aria-expanded="false"
            >
              <MenuIcon aria-hidden="true" />
            </TextButton>
          </div>
        )}
      </div>
    </nav>
  );
};
