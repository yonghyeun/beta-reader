import { Tag } from "./Tag";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tag> = {
  title: "Shared/Tag",
  component: Tag,
  argTypes: {
    rounded: {
      control: {
        type: "boolean"
      }
    },
    className: {
      control: {
        type: "text"
      }
    },
    onClick: {
      action: "clicked"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "태그"
  }
};

export const Rounded: Story = {
  args: {
    children: "둥근 태그",
    rounded: "full"
  }
};

export const WithOnClick: Story = {
  args: {
    children: "클릭 가능한 태그",
    onClick: () => alert("태그가 클릭되었습니다")
  }
};

export const RoundedWithOnClick: Story = {
  args: {
    children: "둥근 클릭 가능한 태그",
    rounded: "full",
    onClick: () => alert("둥근 태그가 클릭되었습니다")
  }
};

export const CustomClassName: Story = {
  args: {
    children: "커스텀 클래스",
    className: "border-2 border-primary-500"
  }
};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>태그 1</Tag>
      <Tag rounded="full">태그 2</Tag>
      <Tag onClick={() => console.log("clicked")}>태그 3</Tag>
      <Tag rounded="full" onClick={() => console.log("clicked")}>
        태그 4
      </Tag>
    </div>
  )
};
