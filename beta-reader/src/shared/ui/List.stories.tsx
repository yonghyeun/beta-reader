import { List } from "./List";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof List> = {
  title: "UI/List",
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
      <List.Item size="md" isActivate={false}>
        <div>일반 리스트 아이템</div>
        <div>추가 정보</div>
      </List.Item>
      <List.Item size="md" isActivate={false}>
        <div>두 번째 아이템</div>
        <div>추가 정보</div>
      </List.Item>
      <List.Item size="md" isActivate={false}>
        <div>세 번째 아이템</div>
        <div>추가 정보</div>
      </List.Item>
    </List>
  )
};

export const WithActiveItem: Story = {
  render: () => (
    <List>
      <List.Item size="md" isActivate={true}>
        <div>활성화된 아이템</div>
        <div>추가 정보</div>
      </List.Item>
      <List.Item size="md" isActivate={false}>
        <div>일반 아이템</div>
        <div>추가 정보</div>
      </List.Item>
      <List.Item size="md" isActivate={false}>
        <div>일반 아이템</div>
        <div>추가 정보</div>
      </List.Item>
    </List>
  )
};

export const SmallSize: Story = {
  render: () => (
    <List>
      <List.Item size="sm" isActivate={false}>
        <div>작은 크기 아이템</div>
        <div>추가 정보</div>
      </List.Item>
      <List.Item size="sm" isActivate={false}>
        <div>작은 크기 아이템</div>
        <div>추가 정보</div>
      </List.Item>
    </List>
  )
};

export const CustomClassName: Story = {
  render: () => (
    <List className="rounded-lg bg-gray-100 p-4">
      <List.Item
        size="md"
        isActivate={false}
        className="text-secondary-800 border border-gray-200"
      >
        <div>커스텀 클래스가 적용된 아이템</div>
        <div>추가 정보</div>
      </List.Item>
      <List.Item
        size="md"
        isActivate={true}
        className="text-secondary-800 border border-gray-200"
      >
        <div>활성화된 커스텀 아이템</div>
        <div>추가 정보</div>
      </List.Item>
    </List>
  )
};
