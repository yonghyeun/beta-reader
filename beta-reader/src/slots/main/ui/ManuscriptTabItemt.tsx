import { EpisodePreviewCard, EpisodeTitleCard } from "@/entities/episode/ui";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati error hic consequuntur? Placeat rem explicabo eos reiciendis laborum numquam nulla non dignissimos saepe beatae at, asperiores eligendi! Corporis, voluptates perspiciatis!";

const mockEpisodeTitleCardProps = Array.from({ length: 8 }, () => ({
  episodeTitle: "첫 번째 에피소드",
  novelTitle: "판타지 소설의 시작"
}));

const mockEpisodePreviewCardProps = Array.from({ length: 8 }, (_, index) => ({
  title: `임시저장된 게시글 제목 ${index + 1}`,
  content: content.repeat(Math.random() * 10),
  date: `2025.04.${10 + index}`
}));

export const ManuscriptTabItem = () => {
  return (
    <article className="flex flex-col gap-10" aria-label="원고 관리">
      <section
        className="flex flex-col gap-5"
        aria-labelledby="draft-manuscripts"
      >
        <h3 id="draft-manuscripts" className="text-body-2-regular">
          임시저장한 원고지
        </h3>
        <ul
          className="grid grid-cols-4 items-stretch gap-6"
          role="list"
          aria-label="임시저장 원고 목록"
        >
          {mockEpisodePreviewCardProps.map((props, index) => (
            <li key={index}>
              <EpisodePreviewCard {...props} />
            </li>
          ))}
        </ul>
      </section>
      <section
        className="flex flex-col gap-5"
        aria-labelledby="recent-manuscripts"
      >
        <h3 id="recent-manuscripts" className="text-body-2-regular">
          최근 발행한 원고지
        </h3>
        <ul
          className="grid grid-cols-3 items-stretch gap-6"
          role="list"
          aria-label="최근 발행 원고 목록"
        >
          {mockEpisodeTitleCardProps.map((props, index) => (
            <li key={index}>
              <EpisodeTitleCard {...props} />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
