"use client";

import { cva } from "class-variance-authority";
import React from "react";

import { AddIcon, MenuIcon } from "@/shared/assets";
import { ROUTES } from "@/shared/config/routes";
import { TextButton } from "@/shared/ui";
import * as List from "@/shared/ui/List";

import { MAIN_LAYOUT_ARIA_LABEL, MAIN_LAYOUT_TEXT } from "../config";
import { useSidebar } from "../lib";
import { MainLogo } from "./MainLogo";
import Link from "next/link";

const mockNovelList = Array.from({ length: 3 }, (_, index) => ({
  title: `소설 제목 ${index + 1}`,
  id: index + 1
}));

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
      aria-expanded={isOpen ? "true" : "false"}
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* 열린 상태 (큰 사이드바) */}
        {isOpen && (
          <nav className="fade-in-animation flex flex-col gap-4">
            <SidebarLogo />
            <OpenSidebarHeader onClose={toggle("close")} />
            {/* 연재물 리스트 list bar */}
            {/* TODO : 라우팅 기능 추가 , isActive props 추가 */}
            <List.Container
              className="px-2.5"
              role="list"
              aria-label="연재물 목록"
            >
              {mockNovelList.map(({ title, id }) => (
                <Link href={`#${id}`}>
                  <List.Item key={id} role="listitem">
                    {title}
                  </List.Item>
                </Link>
              ))}
            </List.Container>
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

const SidebarLogo = () => (
  <TextButton
    as="link"
    href={ROUTES.MAIN()}
    aria-label="홈으로 이동"
    className="fade-in-animation mx-auto h-[4.25rem] px-3 py-2.5"
  >
    <MainLogo />
  </TextButton>
);

interface SidebarHeaderProps {
  onClose: () => void;
}

const OpenSidebarHeader: React.FC<SidebarHeaderProps> = ({ onClose }) => {
  return (
    <header
      className="text-caption-1-regular border-secondary-600 flex justify-end gap-1 border-b px-2.5 pb-4.5"
      role="toolbar"
      aria-label="사이드바 컨트롤"
    >
      <TextButton
        href={ROUTES.NOVEL_SETTING()}
        as="link"
        className="pr-1 pl-0.5"
        aria-label={MAIN_LAYOUT_TEXT.ADD_SERIAL}
      >
        <AddIcon width="1rem" height="1rem" aria-hidden="true" />
        <span>{MAIN_LAYOUT_TEXT.ADD_SERIAL}</span>
      </TextButton>
      <TextButton
        onClick={onClose}
        aria-label={MAIN_LAYOUT_ARIA_LABEL.CLOSE_SIDEBAR}
      >
        <span>{MAIN_LAYOUT_TEXT.CLOSE_SIDEBAR}</span>
      </TextButton>
    </header>
  );
};
