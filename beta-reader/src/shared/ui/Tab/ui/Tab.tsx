"use client";

import { cva } from "class-variance-authority";

import { TabContext, useTab, useTabContext } from "../lib/useTab";

interface TabContainerProps<T extends string[]> {
  tabList: T;
  initialValue: T[number];
  children: React.ReactNode;
  className?: string;
}

const tabSelectorVariants = cva("text-title-4-bold cursor-pointer", {
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
  const tabLogic = useTab(tabList, initialValue);

  return (
    <TabContext value={tabLogic}>
      <section className={`w-full ${className}`}>
        <div className="border-secondary-400 border-b">
          <ul className="flex w-full gap-5 overflow-x-auto px-10">
            {tabList.map((tab) => (
              <li key={tab} className="flex flex-col gap-2">
                <button
                  onClick={tabLogic.handleChangeTab(tab)}
                  className={tabSelectorVariants({
                    isActive: tabLogic.selectedTab === tab
                  })}
                >
                  {tab}
                </button>
                {tab === tabLogic.selectedTab && (
                  <div className="bg-secondary-white fade-in-animation h-[0.125rem] w-full" />
                )}
              </li>
            ))}
            <div />
          </ul>
        </div>
        {children}
      </section>
    </TabContext>
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
