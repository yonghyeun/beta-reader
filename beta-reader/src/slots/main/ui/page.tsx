import { MAIN_TAB_TEXT } from "../config";
import { ManuscriptTabItem } from "./ManuscriptTabItemt";
import { NovelTabItem } from "./NovelTabItem";
import { NovelStatsCard } from "@/src/entities/novel/ui";
import { ProfileIcon } from "@/src/shared/assets";
import * as Tab from "@/src/shared/ui/Tab";

export const MainPage = () => {
  return (
    <section className="flex flex-1 flex-col gap-10">
      {/* 상단 header */}
      <section className="flex gap-5 px-10">
        <ProfileIcon width="3rem" height="3rem" />
        <h2 className="text-title-2-bold">
          <span>김땡땡</span>의 홈
        </h2>
      </section>

      {/* 전체 메인 메타 정보 */}
      <div className="px-10">
        <NovelStatsCard
          novelsCount={12}
          manuscriptCount={256}
          commentsCount={78}
          frequentGenre="판타지"
        />
      </div>

      <Tab.Container
        tabList={Object.values(MAIN_TAB_TEXT)}
        initialValue={MAIN_TAB_TEXT.NOVEL}
      >
        <Tab.Header className="text-title-4-bold px-10" />
        <div className="px-10 py-10">
          <Tab.Item on={MAIN_TAB_TEXT.NOVEL}>
            <NovelTabItem />
          </Tab.Item>
          <Tab.Item on={MAIN_TAB_TEXT.MANUSCRIPT}>
            <ManuscriptTabItem />
          </Tab.Item>
          <Tab.Item on={MAIN_TAB_TEXT.COMMENT}>bye!</Tab.Item>
        </div>
      </Tab.Container>
    </section>
  );
};
