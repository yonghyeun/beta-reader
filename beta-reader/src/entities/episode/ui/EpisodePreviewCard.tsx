import React from "react";

interface EpisodePreviewCardProps {
  content: string;
  title: string;
  date: string;
}

export const EpisodePreviewCard: React.FC<EpisodePreviewCardProps> = ({
  content,
  title,
  date
}) => {
  return (
    <article
      className="h-[16.25rem] overflow-hidden rounded-2xl"
      aria-labelledby="episode-title"
      role="article"
    >
      <div
        className="bg-secondary-800 h-[60%] pt-7"
        aria-label="에피소드 미리보기"
      >
        <div
          className="bg-secondary-900 mx-auto h-full w-[62.5%] overflow-hidden rounded-t-[0.5rem] p-2.5 text-[0.25rem]"
          aria-label="에피소드 내용 미리보기"
        >
          {content}
        </div>
      </div>
      <header className="bg-secondary-700 flex h-[40%] flex-col justify-center gap-2 px-[10%]">
        <p
          id="episode-title"
          className="text-body-1-semibold overflow-hidden text-ellipsis whitespace-nowrap"
          title={title}
        >
          {title}
        </p>
        <time
          className="text-caption-2-regular text-primary-200"
          dateTime={date.replace(/\./g, "-")}
          aria-label={`발행일: ${date}`}
        >
          {date}
        </time>
      </header>
    </article>
  );
};
