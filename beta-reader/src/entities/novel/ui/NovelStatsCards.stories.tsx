import { NovelStatsCards } from "./NovelStatsCards";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NovelStatsCards> = {
  title: "entities/Novel/NovelStatsCards",
  component: NovelStatsCards,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof NovelStatsCards>;

export const Default: Story = {
  args: {
    novelsCount: 12,
    manuscriptCount: 256,
    commentsCount: 78,
    frequentGenre: "판타지"
  }
};

export const WithHighCounts: Story = {
  args: {
    novelsCount: 45,
    manuscriptCount: 1024,
    commentsCount: 367,
    frequentGenre: "로맨스"
  },
  render: (args) => (
    <div className="w-[70rem]">
      <NovelStatsCards {...args} />
    </div>
  )
};

export const WithLowCounts: Story = {
  args: {
    novelsCount: 2,
    manuscriptCount: 34,
    commentsCount: 5,
    frequentGenre: "SF"
  }
};

export const WithLongGenreName: Story = {
  args: {
    novelsCount: 20,
    manuscriptCount: 500,
    commentsCount: 120,
    frequentGenre: "현대판타지/드라마"
  }
};
