import { NovelMetaCard } from "./NovelMetaCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NovelMetaCard> = {
  title: "Entities/Novel/NovelMetaCard",
  component: NovelMetaCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[40rem]">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof NovelMetaCard>;

/**
 * 기본 소설 메타 카드
 * 소설 제목, 원고지 수, 댓글 수, 마지막 업데이트 시간, 그리고 에피소드 목록을 보여줍니다.
 */
export const Default: Story = {
  args: {
    novelTitle: "판타지 소설의 시작",
    manuscriptCount: 120,
    commentsCount: 35,
    lastUpdated: "2025.04.20",
    episodes: [
      { title: "첫 번째 에피소드", lastUpdated: "2025.04.20" },
      { title: "두 번째 에피소드", lastUpdated: "2025.04.15" }
    ]
  }
};

/**
 * 많은 에피소드를 가진 소설 메타 카드
 * 여러 개의 에피소드가 있을 때 그리드 레이아웃이 어떻게 보이는지 보여줍니다.
 */
export const WithMultipleEpisodes: Story = {
  args: {
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
  }
};

/**
 * 긴 제목의 소설 메타 카드
 * 소설 제목이 길 때 UI가 어떻게 처리되는지 보여줍니다.
 */
export const WithLongTitle: Story = {
  args: {
    novelTitle:
      "이것은 매우 길고 상세한 판타지 소설의 제목으로, 여러 줄에 걸쳐 표시될 수 있으며 UI에서 어떻게 처리되는지 확인하기 위한 예시입니다",
    manuscriptCount: 85,
    commentsCount: 12,
    lastUpdated: "2025.04.18",
    episodes: [
      { title: "프롤로그", lastUpdated: "2025.04.10" },
      { title: "첫 번째 장", lastUpdated: "2025.04.18" }
    ]
  }
};

/**
 * 긴 에피소드 제목을 가진 소설 메타 카드
 * 에피소드 제목이 길 때 UI가 어떻게 처리되는지 보여줍니다.
 */
export const WithLongEpisodeTitles: Story = {
  args: {
    novelTitle: "짧은 제목의 소설",
    manuscriptCount: 230,
    commentsCount: 45,
    lastUpdated: "2025.04.19",
    episodes: [
      {
        title:
          "이것은 아주 긴 에피소드 제목으로 한 줄을 넘어갈 정도로 길고 상세한 설명을 담고 있습니다",
        lastUpdated: "2025.04.15"
      },
      {
        title:
          "이것도 마찬가지로 매우 긴 에피소드 제목으로 UI 테스트를 위한 목적을 가지고 있습니다",
        lastUpdated: "2025.04.19"
      }
    ]
  }
};

/**
 * 내용이 없는 소설 메타 카드
 * 아직 에피소드가 없는 경우를 보여줍니다.
 */
export const WithNoEpisodes: Story = {
  args: {
    novelTitle: "새로운 소설 프로젝트",
    manuscriptCount: 10,
    commentsCount: 0,
    lastUpdated: "2025.04.21",
    episodes: []
  }
};
