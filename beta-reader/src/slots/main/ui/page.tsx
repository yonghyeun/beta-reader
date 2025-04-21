import { NovelStatsCard } from "@/src/entities/novel/ui";
import { ProfileIcon } from "@/src/shared/assets";
import * as Tab from "@/src/shared/ui/Tab";
import { NovelDashboard } from "@/src/widget/dashboard/ui";

export const MainPage = () => {
  return (
    <section className="flex flex-1 flex-col gap-10 pb-10">
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

      <Tab.Container tabList={["연재물", "댓글 내역"]} initialValue="연재물">
        <Tab.Item on="연재물">
          <NovelDashboard className="px-10 pt-10" />
        </Tab.Item>
        <Tab.Item on="댓글 내역">bye!</Tab.Item>
      </Tab.Container>
    </section>
  );
};
