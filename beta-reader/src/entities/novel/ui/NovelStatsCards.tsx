import React from "react";

import { ManuscriptGraphic, NovelGraphic } from "@/shared/assets";
import { CommentGraphic } from "@/shared/assets/CommentGraphic";
import { GenreGraphic } from "@/shared/assets/GenreGraphic";

interface NovelStatsCardsProps {
  novelsCount: number;
  manuscriptCount: number;
  commentsCount: number;
  frequentGenre: string;
}

// TODO 반응형 디자인 추가 하기
export const NovelStatsCards: React.FC<NovelStatsCardsProps> = ({
  novelsCount,
  manuscriptCount,
  commentsCount,
  frequentGenre
}) => {
  return (
    <ul className="bg-secondary-900 flex items-center gap-[1.875rem] rounded-[1.25rem] px-[2.875rem] py-5">
      <StatisticsItem
        title="연재물"
        graphic={
          <NovelGraphic className="h-9 w-9 lg:h-[2.625rem] lg:w-[2.625rem]" />
        }
      >
        총 <span>{novelsCount}</span>개
      </StatisticsItem>
      <VerticalDivider />

      <StatisticsItem
        title="원고지"
        graphic={
          <ManuscriptGraphic className="h-9 w-9 lg:h-[2.625rem] lg:w-[2.625rem]" />
        }
      >
        총 <span>{manuscriptCount}</span>개
      </StatisticsItem>
      <VerticalDivider />

      <StatisticsItem
        title="발행"
        graphic={
          <CommentGraphic className="h-9 w-9 lg:h-[2.625rem] lg:w-[2.625rem]" />
        }
      >
        총 <span>{commentsCount}</span>회
      </StatisticsItem>
      <VerticalDivider />

      <StatisticsItem
        title="자주 만든 장르"
        graphic={
          <GenreGraphic className="h-9 w-9 lg:h-[2.625rem] lg:w-[2.625rem]" />
        }
      >
        <span>{frequentGenre}</span>
      </StatisticsItem>
    </ul>
  );
};

interface StatisticsItemProps {
  title: string;
  graphic: React.ReactNode;
  children: React.ReactNode;
}

const StatisticsItem: React.FC<StatisticsItemProps> = ({
  title,
  children,
  graphic
}) => {
  return (
    <li className="flex flex-grow flex-col items-center gap-4 lg:flex-row">
      {graphic}
      <div className="flex flex-col gap-2.5">
        <p className="text-caption-2-regular text-secondary-100">{title}</p>
        <p className="text-body-2-medium">{children}</p>
      </div>
    </li>
  );
};

const VerticalDivider = () => (
  <div
    className="bg-secondary-400 h-20 w-[0.0625rem] self-center lg:h-8"
    aria-hidden
  />
);
