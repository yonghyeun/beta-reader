import { EpisodeTitleCard } from "./EpisodeTitleCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EpisodeTitleCard> = {
  title: "Entities/Episode/EpisodeTitleCard",
  component: EpisodeTitleCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[30rem]">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof EpisodeTitleCard>;

/**
 * 기본 에피소드 제목 카드
 */
export const Default: Story = {
  args: {
    episodeTitle: "첫 번째 에피소드",
    novelTitle: "판타지 소설의 시작"
  }
};

/**
 * 매우 긴 제목의 에피소드 제목 카드
 * 제목이 길 경우 말줄임표(...)로 처리되는 것을 확인할 수 있습니다.
 */
export const LongEpisodeTitle: Story = {
  args: {
    episodeTitle:
      "이것은 아주아주 긴 제목의 에피소드입니다. 한 줄을 넘어가는 긴 제목이며, 사용자 인터페이스에서 어떻게 보이는지 테스트하기 위한 목적입니다. 제목이 너무 길면 말줄임표로 표시되어야 합니다.",
    novelTitle: "판타지 소설의 시작"
  }
};

/**
 * 매우 긴 소설 제목의 에피소드 제목 카드
 * 소설 제목이 길 경우의 표시 방법을 확인할 수 있습니다.
 */
export const LongNovelTitle: Story = {
  args: {
    episodeTitle: "첫 번째 에피소드",
    novelTitle:
      "이것은 매우 긴 판타지 소설의 제목입니다. 이 제목은 여러 줄에 걸쳐 표시될 수 있으며 UI에서 어떻게 처리되는지 확인하기 위한 예시입니다."
  }
};

/**
 * 모두 긴 제목의 에피소드 제목 카드
 * 에피소드 제목과 소설 제목 모두 긴 경우의 표시 방법을 확인할 수 있습니다.
 */
export const AllLongTitles: Story = {
  args: {
    episodeTitle:
      "이것은 아주아주 긴 제목의 에피소드입니다. 한 줄을 넘어가는 긴 제목이며, 사용자 인터페이스에서 어떻게 보이는지 테스트하기 위한 목적입니다.",
    novelTitle:
      "이것은 매우 긴 판타지 소설의 제목입니다. 이 제목은 여러 줄에 걸쳐 표시될 수 있으며 UI에서 어떻게 처리되는지 확인하기 위한 예시입니다."
  }
};
