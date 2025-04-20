"use client";

import { cva } from "class-variance-authority";

import { MAIN_LAYOUT_ARIA_LABEL, MAIN_LAYOUT_TEXT } from "../config";
import { useSidebar } from "../lib";
import { AddIcon, MenuIcon } from "@/src/shared/assets";

const asideVariants = cva(
  "bg-secondary-900 flex-col py-[5.25rem] transition-all duration-200 h-screen ease-in-out",
  {
    variants: {
      isOpen: {
        true: "fixed top-0 z-40 w-[13rem] px-2.5",
        false: "w-fit px-6"
      }
    }
  }
);

export const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <nav
      aria-label="사이드바 네비게이션"
      className={asideVariants({ isOpen })}
      role="navigation"
    >
      {isOpen ? (
        <>
          {/* 연재물 추가 & 사이드바 접기 버튼 */}
          <div
            className="text-caption-2-regular flex justify-end gap-1"
            role="toolbar"
            aria-label="사이드바 컨트롤"
          >
            <button
              className="flex cursor-pointer rounded-[0.3125rem] pr-1 hover:bg-[rgba(255,255,255,0.1)]"
              aria-label={MAIN_LAYOUT_TEXT.ADD_SERIAL}
            >
              <AddIcon width="1rem" height="1rem" aria-hidden="true" />
              <span>{MAIN_LAYOUT_TEXT.ADD_SERIAL}</span>
            </button>
            <button
              onClick={toggle("close")}
              className="flex cursor-pointer rounded-[0.3125rem] px-1 hover:bg-[rgba(255,255,255,0.1)]"
              aria-label={MAIN_LAYOUT_ARIA_LABEL.CLOSE_SIDEBAR}
            >
              <span>{MAIN_LAYOUT_TEXT.CLOSE_SIDEBAR}</span>
            </button>
          </div>
          {/* 연재물 리스트 navigation bar */}
          <ul role="menu" aria-label="연재물 목록">
            <li role="none"></li>
          </ul>
        </>
      ) : (
        <button
          onClick={toggle("open")}
          className="cursor-pointer"
          aria-label={MAIN_LAYOUT_ARIA_LABEL.OPEN_SIDEBAR}
          aria-expanded="false"
        >
          <MenuIcon aria-hidden="true" />
        </button>
      )}
    </nav>
  );
};
