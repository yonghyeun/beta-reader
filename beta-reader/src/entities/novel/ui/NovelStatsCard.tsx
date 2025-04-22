interface NovelStatsCardProps {
  novelsCount: number;
  manuscriptCount: number;
  commentsCount: number;
  frequentGenre: string;
}

// TODO 반응형 디자인 추가 하기
export const NovelStatsCard: React.FC<NovelStatsCardProps> = ({
  novelsCount,
  manuscriptCount,
  commentsCount,
  frequentGenre
}) => {
  return (
    <div className="bg-secondary-900 flex items-center gap-[1.875rem] rounded-[1.25rem] px-[2.875rem] py-5">
      <StatisticsItem title="연재물">
        총 <span>{novelsCount}</span>개
      </StatisticsItem>
      <VerticlaDivider />

      <StatisticsItem title="원고지">
        총 <span>{manuscriptCount}</span>개
      </StatisticsItem>
      <VerticlaDivider />

      <StatisticsItem title="발행">
        총 <span>{commentsCount}</span>회
      </StatisticsItem>
      <VerticlaDivider />

      <StatisticsItem title="자주 만든 장르">
        <span>{frequentGenre}</span>
      </StatisticsItem>
    </div>
  );
};

interface StatisticsItemProps {
  title: string;
  children: React.ReactNode;
}

const StatisticsItem: React.FC<StatisticsItemProps> = ({ title, children }) => {
  return (
    <div className="flex flex-grow items-center justify-between">
      <div className="flex flex-col gap-2.5">
        <p className="text-caption-2-regular text-secondary-100">{title}</p>
        <p className="text-body-2-medium">{children}</p>
      </div>
      <div className="bg-secondary-100 h-[2.625rem] w-[2.625rem]"></div>
    </div>
  );
};

const VerticalDivider = () => (
  <div className="bg-secondary-400 h-8 w-[0.0625rem]" aria-hidden />
);
