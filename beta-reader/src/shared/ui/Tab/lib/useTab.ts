"use client";

import { createContext, useCallback, useContext, useState } from "react";

export const TabContext = createContext<ReturnType<typeof useTab> | null>(null);

export const useTab = <
  TabList extends string[],
  InitialValue extends TabList[number]
>(
  tabList: TabList,
  initialValue: InitialValue
) => {
  const [selectedTab, setSelectedTab] = useState<TabList[number]>(initialValue);

  const handleChangeTab = useCallback(
    (tab: TabList[number]) => () => {
      setSelectedTab(tab);
    },
    []
  );

  return {
    tabList,
    selectedTab,
    handleChangeTab
  };
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error(
      "useTabContext 훅은 TabProvider 내부에서만 사용해야 합니다"
    );
  }
  return context;
};
