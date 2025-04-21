import {
  EpisodePreviewCard,
  EpisodeTitleCard
} from "@/src/entities/episode/ui";
import { NovelMetaCard } from "@/src/entities/novel/ui";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati error hic consequuntur? Placeat rem explicabo eos reiciendis laborum numquam nulla non dignissimos saepe beatae at, asperiores eligendi! Corporis, voluptates perspiciatis!";

const mockEpisodePreviewCardProps = {
  title: "임시저장된 게시글 제목 1",
  content: content.repeat(Math.random() * 10),
  date: "2025.04.10"
};

const mockEpisodeTitleCardProps = {
  episodeTitle: "첫 번째 에피소드",
  novelTitle: "판타지 소설의 시작"
};

const mockNovelMetaCardProps = {
  novelTitle: "판타지 대서사시",
  manuscriptCount: 450,
  commentsCount: 128,
  lastUpdated: "2025.04.21",
  episodes: [
    { title: "서장: 모험의 시작", lastUpdated: "2025.03.10" },
    { title: "1장: 영웅의 등장", lastUpdated: "2025.03.15" },
    { title: "2장: 첫 번째 시련", lastUpdated: "2025.03.20" },
    { title: "3장: 동맹의 형성", lastUpdated: "2025.04.01" }
  ]
};

interface NovelDashboardProps {
  className?: string;
}

export const NovelDashboard: React.FC<NovelDashboardProps> = ({
  className = ""
}) => {
  return (
    <section className={`flex flex-col gap-10 ${className}`}>
      {/* 임시 저장한 원고지를 담는 컨테이너 */}
      <div className="flex flex-col gap-5">
        <p className="text-body-2-regular">임시저장한 원고지</p>
        <ul className="grid grid-cols-4 items-stretch gap-6">
          <EpisodePreviewCard {...mockEpisodePreviewCardProps} />
          <EpisodePreviewCard {...mockEpisodePreviewCardProps} />
          <EpisodePreviewCard {...mockEpisodePreviewCardProps} />
          <EpisodePreviewCard {...mockEpisodePreviewCardProps} />
        </ul>
      </div>
      {/* 최근 발행한 원고지를 담는 컨테이너 */}
      <div className="flex flex-col gap-5">
        <p className="text-body-2-regular">최근 발행한 원고지</p>
        <ul className="grid grid-cols-3 items-stretch gap-6">
          <EpisodeTitleCard {...mockEpisodeTitleCardProps} />
          <EpisodeTitleCard {...mockEpisodeTitleCardProps} />
          <EpisodeTitleCard {...mockEpisodeTitleCardProps} />
        </ul>
      </div>
      {/* 모든 연재물의 정보를 담는 컨테이너 */}
      <div className="flex flex-col gap-5">
        <p className="text-body-2-regular">
          모든 연재물 <span className="text-primary-200">(3)</span>
        </p>
        <ul className="grid grid-cols-2 items-stretch gap-6">
          <li>
            <NovelMetaCard {...mockNovelMetaCardProps} />
          </li>
          <li>
            <NovelMetaCard {...mockNovelMetaCardProps} />
          </li>
          <li>
            <NovelMetaCard {...mockNovelMetaCardProps} />
          </li>
          <li>
            <NovelMetaCard {...mockNovelMetaCardProps} />
          </li>
        </ul>
      </div>
    </section>
  );
};
