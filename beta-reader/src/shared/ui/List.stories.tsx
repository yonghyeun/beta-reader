import { MeatballIcon } from "../assets";
import { Container, Item } from "./List";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "shared/List",
  component: Container,
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
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <Item isActive={false} className="flex justify-between gap-2.5">
        <span>일반 리스트 아이템</span>
        <MeatballIcon />
      </Item>
      <Item isActive={false} className="flex justify-between gap-2.5">
        <span>두 번째 아이템</span>
        <MeatballIcon />
      </Item>
      <Item isActive={false} className="flex justify-between gap-2.5">
        <span>세 번째 아이템</span>
        <MeatballIcon />
      </Item>
    </Container>
  )
};

export const WithActiveItem: Story = {
  render: () => (
    <Container>
      <Item
        isActive={true}
        className="flex items-center justify-between gap-2.5"
      >
        <span>활성화된 아이템</span>
        <MeatballIcon />
      </Item>
      <Item
        isActive={false}
        className="flex items-center justify-between gap-2.5"
      >
        <span>일반 아이템</span>
        <MeatballIcon />
      </Item>
      <Item
        isActive={false}
        className="flex items-center justify-between gap-2.5"
      >
        <span>일반 아이템</span>
        <MeatballIcon />
      </Item>
    </Container>
  )
};

export const SmallSize: Story = {
  render: () => (
    <Container>
      <Item
        isActive={false}
        className="flex items-center justify-between gap-2.5"
      >
        <span>작은 크기 아이템</span>
        <MeatballIcon />
      </Item>
      <Item
        isActive={false}
        className="flex items-center justify-between gap-2.5"
      >
        <span>작은 크기 아이템</span>
        <MeatballIcon />
      </Item>
    </Container>
  )
};

export const CustomClassName: Story = {
  render: () => (
    <Container className="rounded-lg bg-gray-100 p-4">
      <Item
        isActive={false}
        className="text-secondary-800 flex items-center justify-between gap-2.5 border border-gray-200"
      >
        <span>커스텀 클래스가 적용된 아이템</span>
        <MeatballIcon />
      </Item>
      <Item
        isActive={true}
        className="text-secondary-800 flex items-center justify-between gap-2.5 border border-gray-200"
      >
        <span>활성화된 커스텀 아이템</span>
        <MeatballIcon />
      </Item>
    </Container>
  )
};
