import { useState } from "react";

import { Selector } from "./Selector";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

// 메타데이터 정의
const meta = {
  title: "Shared/Selector",
  component: Selector,
  args: {
    onSelectorChange: action("selector changed")
  },
  argTypes: {
    initialValue: {
      description: "셀렉터의 초기 선택값",
      control: { type: "text" }
    },
    variant: {
      description: "셀렉터의 스타일 변형",
      control: { type: "radio" },
      options: ["padded", "default"]
    },
    onSelectorChange: {
      description: "셀렉터 값이 변경될 때 호출되는 콜백 함수",
      action: "selector changed"
    }
  }
} satisfies Meta<typeof Selector>;

export default meta;

type Story = StoryObj<typeof Selector>;

// 기본 셀렉터 스토리
export const Default: Story = {
  args: {
    initialValue: "선택하세요",
    variant: "padded"
  },
  render: (args) => (
    <div className="relative">
      <Selector {...args}>
        <Selector.Item value="옵션 1">옵션 1</Selector.Item>
        <Selector.Item value="옵션 2">옵션 2</Selector.Item>
        <Selector.Item value="옵션 3">옵션 3</Selector.Item>
      </Selector>
    </div>
  )
};

// 많은 옵션을 가진 셀렉터
export const ManyOptions: Story = {
  args: {
    initialValue: "많은 옵션들",
    variant: "padded"
  },
  render: (args) => (
    <div className="relative">
      <Selector {...args}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Selector.Item key={index} value={`옵션 ${index + 1}`}>
            옵션 {index + 1}
          </Selector.Item>
        ))}
      </Selector>
    </div>
  )
};

// 긴 텍스트를 가진 셀렉터
export const LongText: Story = {
  args: {
    initialValue: "긴 텍스트 옵션",
    variant: "padded"
  },
  render: (args) => (
    <div className="relative">
      <Selector {...args}>
        <Selector.Item value="이것은 매우 긴 텍스트 옵션입니다">
          이것은 매우 긴 텍스트 옵션입니다
        </Selector.Item>
        <Selector.Item value="이것도 상당히 긴 텍스트 옵션입니다">
          이것도 상당히 긴 텍스트 옵션입니다
        </Selector.Item>
      </Selector>
    </div>
  )
};

// 상태 추적 셀렉터
export const WithStateTracking = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<string>("선택해주세요");

    return (
      <div className="flex flex-col gap-4">
        <div className="bg-secondary-800 text-secondary-white rounded-lg p-3">
          <p>현재 선택된 값: {selectedValue}</p>
        </div>

        <div className="relative">
          <Selector
            initialValue={selectedValue}
            onSelectorChange={(value) => {
              setSelectedValue(value);
              action("상태 업데이트됨")(value);
            }}
            variant="padded"
          >
            <Selector.Item value="옵션 1">옵션 1</Selector.Item>
            <Selector.Item value="옵션 2">옵션 2</Selector.Item>
            <Selector.Item value="옵션 3">옵션 3</Selector.Item>
            <Selector.Item value="옵션 4">옵션 4</Selector.Item>
          </Selector>
        </div>
      </div>
    );
  }
};
