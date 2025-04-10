import { List } from "./List";
import { MoreIcon } from "@/public/assets";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof List> = {
  title: "shared/List",
  component: List,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "리스트 컨테이너의 추가 클래스명",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" }
      }
    },
    children: {
      description: "리스트 아이템들",
      control: "object",
      table: {
        type: { summary: "React.ReactNode" }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List>
      <List.Item
        size="md"
        isActive={false}
        className="flex justify-between gap-2.5"
      >
        <span>일반 리스트 아이템</span>
        <MoreIcon />
      </List.Item>
      <List.Item
        size="md"
        isActive={false}
        className="flex justify-between gap-2.5"
      >
        <span>두 번째 아이템</span>
        <MoreIcon />
      </List.Item>
      <List.Item
        size="md"
        isActive={false}
        className="flex justify-between gap-2.5"
      >
        <span>세 번째 아이템</span>
        <MoreIcon />
      </List.Item>
    </List>
  )
};

export const WithActiveItem: Story = {
  render: () => (
    <List>
      <List.Item
        size="md"
        isActive={true}
        className="flex justify-between gap-2.5"
      >
        <span>활성화된 아이템</span>
        <MoreIcon />
      </List.Item>
      <List.Item
        size="md"
        isActive={false}
        className="flex justify-between gap-2.5"
      >
        <span>일반 아이템</span>
        <MoreIcon />
      </List.Item>
      <List.Item
        size="md"
        isActive={false}
        className="flex justify-between gap-2.5"
      >
        <span>일반 아이템</span>
        <MoreIcon />
      </List.Item>
    </List>
  )
};

export const SmallSize: Story = {
  render: () => (
    <List>
      <List.Item
        size="sm"
        isActive={false}
        className="flex justify-between gap-2.5"
      >
        <span>작은 크기 아이템</span>
        <MoreIcon />
      </List.Item>
      <List.Item
        size="sm"
        isActive={false}
        className="flex justify-between gap-2.5"
      >
        <span>작은 크기 아이템</span>
        <MoreIcon />
      </List.Item>
    </List>
  )
};

export const CustomClassName: Story = {
  render: () => (
    <List className="rounded-lg bg-gray-100 p-4">
      <List.Item
        size="md"
        isActive={false}
        className="text-secondary-800 flex justify-between gap-2.5 border border-gray-200"
      >
        <span>커스텀 클래스가 적용된 아이템</span>
        <MoreIcon />
      </List.Item>
      <List.Item
        size="md"
        isActive={true}
        className="text-secondary-800 flex justify-between gap-2.5 border border-gray-200"
      >
        <span>활성화된 커스텀 아이템</span>
        <MoreIcon />
      </List.Item>
    </List>
  )
};
