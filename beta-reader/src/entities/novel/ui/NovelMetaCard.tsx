import {
  ArrowRightLargeIcon,
  BookIcon,
  MeatballIcon
} from "@/src/shared/assets";
import { TextButton } from "@/src/shared/ui";
import Link from "next/link";

interface NovelMetaCardProps {
  novelTitle: string;
  manuscriptCount: number;
  commentsCount: number;
  lastUpdated: string;
  episodes: { title: string; lastUpdated: string }[];
}

export const NovelMetaCard: React.FC<NovelMetaCardProps> = ({
  novelTitle,
  manuscriptCount,
  commentsCount,
  lastUpdated,
  episodes
}) => {
  return (
    <section
      aria-labelledby="novel-title"
      className="bg-secondary-900 border-secondary-700 hover:bg-secondary-800 flex flex-col gap-5 rounded-2xl border px-[1.625rem] py-5"
    >
      <header className="flex flex-col gap-2">
        <div className="flex justify-between">
          <BookIcon aria-hidden="true" />
          <button
            aria-label="소설 옵션 메뉴"
            className="flex items-center justify-center"
          >
            <MeatballIcon aria-hidden="true" />
          </button>
        </div>
        <h3 id="novel-title" className="text-body-2-regular line-clamp-1">
          {novelTitle}
        </h3>
        <div className="text-secondary-200 text-caption-2-regular flex items-center gap-2.5">
          <p>{manuscriptCount}개의 원고지</p>
          <p>{commentsCount}회의 댓글</p>
          <p className="text-caption-3-regular text-primary-200">
            {lastUpdated} 마지막 편집
          </p>
        </div>
      </header>

      <ul className="grid grid-cols-2 gap-6">
        {episodes.map((episode) => (
          <li
            key={episode.title}
            className="bg-secondary-800 border-secondary-600 hover:bg-secondary-700 flex flex-col gap-2 rounded-2xl border px-[1.625rem] py-6"
          >
            <p className="text-body-2-medium line-clamp-1">{episode.title}</p>
            <p className="caption-3-regular text-secondary-300">
              {episode.lastUpdated}
            </p>
          </li>
        ))}
      </ul>
      <footer className="flex items-center justify-end">
        <TextButton
          as="link"
          href="#"
          className="text-body-2-medium text-primary-200 hover:text-primary-100 flex items-center gap-0.5 rounded-lg px-1 py-0.5 hover:bg-[#FFFFFF1A]"
        >
          원고지 모두 보기 <ArrowRightLargeIcon />
        </TextButton>
      </footer>
    </section>
  );
};
