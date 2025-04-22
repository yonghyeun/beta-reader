import { NovelMetaCard } from "@/src/entities/novel/ui";

const mockNovelMetaCardProps = Array.from(
  {
    length: 4
  },
  () => ({
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
  })
);

interface NovelTabItemProps {
  className?: string;
}

export const NovelTabItem: React.FC<NovelTabItemProps> = ({ className }) => {
  return (
    <article className={`flex flex-col gap-5 ${className}`}>
      <h3 id="all-novels" className="text-body-2-regular">
        모든 연재물 <span className="text-primary-200">(3)</span>
      </h3>
      <ul
        className="grid grid-cols-2 items-stretch gap-6"
        role="list"
        aria-label="모든 연재물 목록"
      >
        {mockNovelMetaCardProps.map((props, index) => (
          <li key={index}>
            <NovelMetaCard {...props} />
          </li>
        ))}
      </ul>
    </article>
  );
};
