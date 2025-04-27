"use client";

import { cva } from "class-variance-authority";

import { TabContext, useTab, useTabContext } from "../lib/useTab";

interface TabContainerProps<T extends string[]> {
  tabList: T;
  initialValue: T[number];
  children: React.ReactNode;
  className?: string;
}

const tabSelectorVariants = cva("cursor-pointer", {
  variants: {
    isActive: {
      true: "text-secondary-white",
      false: "text-secondary-400"
    }
  }
});

export const Container: React.FC<TabContainerProps<string[]>> = ({
  tabList,
  initialValue,
  children,
  className = ""
}) => {
  const tabContext = useTab(tabList, initialValue);

  return (
    <TabContext value={tabContext}>
      <section className={`w-full ${className}`}>{children}</section>
    </TabContext>
  );
};

interface TabHeaderProps {
  className?: string;
  withActiveLine?: boolean;
}

export const Header: React.FC<TabHeaderProps> = ({
  className,
  withActiveLine = false
}) => {
  const { tabList, selectedTab, handleChangeTab } = useTabContext();

  return (
    <div
      className={`border-secondary-400 border-b ${withActiveLine ? "pt-4" : "py-4"}`}
    >
      <ul className={`flex gap-5 overflow-x-auto ${className}`}>
        {tabList.map((tab) => (
          <li key={tab} className="flex flex-col gap-4">
            <button
              onClick={handleChangeTab(tab)}
              className={tabSelectorVariants({
                isActive: selectedTab === tab
              })}
            >
              {tab}
            </button>
            {withActiveLine && tab === selectedTab && (
              <div className="bg-secondary-white fade-in-animation-100 h-[0.125rem] w-full" />
            )}
          </li>
        ))}
        <div />
      </ul>
    </div>
  );
};

interface TabItemProps {
  children: React.ReactNode;
  on: ((selectedTab: string) => boolean) | string;
}

export const Item: React.FC<TabItemProps> = ({ on, children }) => {
  const { selectedTab } = useTabContext();

  const isActive =
    typeof on === "string" ? selectedTab === on : on(selectedTab);

  return isActive ? children : null;
};
