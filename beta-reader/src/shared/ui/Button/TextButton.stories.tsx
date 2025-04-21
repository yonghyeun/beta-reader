import { TextButton } from "./TextButton";
import { BookmarkIcon } from "@/src/shared/assets/Bookmark";
import { EditPencilIcon } from "@/src/shared/assets/EditPencil";
import { RightSmallIcon } from "@/src/shared/assets/RightSmall";
import { TrashIcon } from "@/src/shared/assets/Trash";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextButton> = {
  title: "Shared/Button/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md"],
      description: "텍스트 버튼의 크기",
      table: {
        type: { summary: "sm | md" },
        defaultValue: { summary: "md" }
      }
    },
    disabled: {
      control: "boolean",
      description: "버튼의 비활성화 상태",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    },
    className: {
      control: "text",
      description: "추가 CSS 클래스",
      table: {
        type: { summary: "string" }
      }
    },
    children: {
      description: "버튼 내용. 텍스트나 아이콘+텍스트 조합 가능",
      control: "text"
    }
  }
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const TextOnly: Story = {
  args: {
    children: "텍스트 버튼"
  }
};

export const SmallSize: Story = {
  args: {
    size: "sm",
    children: "작은 버튼"
  }
};

export const MediumSize: Story = {
  args: {
    size: "md",
    children: "중간 버튼"
  }
};

export const WithIconEdit: Story = {
  render: () => (
    <TextButton>
      <span>수정하기</span>
      <EditPencilIcon width="1rem" height="1rem" />
    </TextButton>
  )
};

export const WithIconBookmark: Story = {
  render: () => (
    <TextButton>
      <span>북마크</span>
      <BookmarkIcon width="1rem" height="1rem" />
    </TextButton>
  )
};

export const WithIconDelete: Story = {
  render: () => (
    <TextButton>
      <span>삭제하기</span>
      <TrashIcon width="1rem" height="1rem" />
    </TextButton>
  )
};

export const CustomClass: Story = {
  args: {
    children: "커스텀 클래스",
    className: "text-red-400 hover:text-red-300"
  }
};

export const AsLink: Story = {
  args: {
    as: "link",
    href: "/example-link",
    children: "링크 버튼"
  }
};

export const AsLinkWithIcon: Story = {
  render: () => (
    <TextButton as="link" href="/example-link">
      <span>더보기</span>
      <RightSmallIcon width="1rem" height="1rem" />
    </TextButton>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <p className="text-secondary-300 mb-2 text-sm">크기 비교</p>
        <div className="flex items-center gap-4">
          <TextButton size="md">중간 버튼</TextButton>
          <TextButton size="sm">작은 버튼</TextButton>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-secondary-300 mb-2 text-sm">아이콘 포함</p>
        <div className="flex flex-wrap items-center gap-4">
          <TextButton>
            <span>수정</span>
            <EditPencilIcon width="1rem" height="1rem" />
          </TextButton>
          <TextButton>
            <span>북마크</span>
            <BookmarkIcon width="1rem" height="1rem" />
          </TextButton>
          <TextButton>
            <span>삭제</span>
            <TrashIcon width="1rem" height="1rem" />
          </TextButton>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-secondary-300 mb-2 text-sm">링크 타입</p>
        <div className="flex flex-wrap items-center gap-4">
          <TextButton as="link" href="/example-link">
            링크 버튼
          </TextButton>
          <TextButton as="link" href="/example-link">
            <span>더보기</span>
            <RightSmallIcon width="1rem" height="1rem" />
          </TextButton>
        </div>
      </div>
    </div>
  )
};
