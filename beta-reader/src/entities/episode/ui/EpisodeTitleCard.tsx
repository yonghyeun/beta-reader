interface EpisodeTitleCardProps {
  episodeTitle: string;
  novelTitle: string;
}

export const EpisodeTitleCard: React.FC<EpisodeTitleCardProps> = ({
  episodeTitle,
  novelTitle
}) => {
  return (
    <div className="border-secondary-600 bg-secondary-800 hover:bg-secondary-700 flex flex-col gap-2 rounded-2xl border px-[1.625rem] py-6 text-ellipsis">
      <p className="text-body-3-medium">{episodeTitle}</p>
      <p className="text-caption-2-regular text-secondary-100">{novelTitle}</p>
    </div>
  );
};
