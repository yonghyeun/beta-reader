import { EpisodePreviewCard } from "./EpisodePreviewCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EpisodePreviewCard> = {
  title: "Entities/Episode/EpisodePreviewCard",
  component: EpisodePreviewCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[16.875rem]">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof EpisodePreviewCard>;

/**
 * 기본 에피소드 프리뷰 카드
 */
export const Default: Story = {
  args: {
    title: "첫 번째 에피소드",
    content:
      "이것은 첫 번째 에피소드의 내용입니다. 프리뷰 카드에 표시될 간략한 내용으로, 독자들이 이 에피소드에 대해 간단히 파악할 수 있습니다.",
    date: "2025.04.20"
  }
};

/**
 * 매우 긴 제목의 에피소드 프리뷰 카드
 * 제목이 길 경우 말줄임표(...)로 처리되는 것을 확인할 수 있습니다.
 */
export const VeryLongTitle: Story = {
  args: {
    title:
      "이것은 아주아주 긴 제목의 에피소드입니다. 한 줄을 넘어가는 긴 제목이며, 사용자 인터페이스에서 어떻게 보이는지 테스트하기 위한 목적입니다. 제목이 너무 길면 말줄임표로 표시되어야 합니다. 표시되는 제목의 길이는 디자인 가이드라인에 맞게 제한되어야 합니다.",
    content: "일반적인 내용의 에피소드입니다.",
    date: "2025.04.10"
  }
};

const content =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati error hic consequuntur? Placeat rem explicabo eos reiciendis laborum numquam nulla non dignissimos saepe beatae at, asperiores eligendi! Corporis, voluptates perspiciatis!";

/**
 * 매우 긴 내용(1000자 이상)의 에피소드 프리뷰 카드
 * 내용이 길 경우 미리보기 영역에서 어떻게 표시되는지 확인할 수 있습니다.
 */
export const VeryLongContent: Story = {
  args: {
    title: "긴 내용의 에피소드",
    content: content.repeat(100),
    date: "2025.04.15"
  }
};
