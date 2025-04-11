import { useState } from "react";

import { RadioGroup } from "./Radio";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Form/Radio",
  component: RadioGroup
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    name: "DefaultRadioStory",
    value: "default_option",
    onRadioGroupChange: action("라디오 값 변경")
  },

  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Item value="default_option" label="기본 옵션" />
    </RadioGroup>
  )
};

export const WithoutLabel: Story = {
  args: {
    name: "WithoutLabelRadioStory",
    value: "no_label_option",
    onRadioGroupChange: action("라디오 값 변경")
  },

  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Item value="no_label_option" />
    </RadioGroup>
  )
};

export const MultipleOptions: Story = {
  render: () => (
    <RadioGroup
      name="MultipleOptionsRadioStory"
      value="multiple_option2"
      className="flex flex-col gap-2"
      onRadioGroupChange={action("라디오 그룹 값 변경")}
    >
      <RadioGroup.Item value="multiple_option1" label="첫 번째 옵션" />
      <RadioGroup.Item value="multiple_option2" label="두 번째 옵션" />
      <RadioGroup.Item value="multiple_option3" label="세 번째 옵션" />
    </RadioGroup>
  )
};

export const HorizontalGroup: Story = {
  render: () => (
    <RadioGroup
      name="HorizontalRadioGroupStory"
      value="horizontal_option1"
      className="flex flex-row gap-4"
      onRadioGroupChange={action("라디오 그룹 값 변경")}
    >
      <RadioGroup.Item value="horizontal_option1" label="옵션 A" />
      <RadioGroup.Item value="horizontal_option2" label="옵션 B" />
      <RadioGroup.Item value="horizontal_option3" label="옵션 C" />
    </RadioGroup>
  )
};

export const WithStateTracking: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("effect_option1");

    return (
      <div className="flex flex-col gap-4">
        <div className="bg-secondary-800 text-secondary-white rounded-lg p-3">
          <p>
            현재 선택된 값: <strong>{selectedValue}</strong>
          </p>
        </div>
        <RadioGroup
          name="WithStateTrackingRadioStory"
          value={selectedValue}
          onRadioGroupChange={(value) => {
            setSelectedValue(value);
            action("선택된 옵션이 변경되었습니다")(value);
          }}
          className="flex flex-col gap-2"
        >
          <RadioGroup.Item value="effect_option1" label="첫 번째 옵션" />
          <RadioGroup.Item value="effect_option2" label="두 번째 옵션" />
          <RadioGroup.Item value="effect_option3" label="세 번째 옵션" />
        </RadioGroup>
      </div>
    );
  }
};

// 커스텀 스타일 라디오 버튼
export const CustomStyleRadio: Story = {
  render: () => (
    <RadioGroup
      name="CustomStyleRadioStory"
      value="custom_styled"
      onRadioGroupChange={action("커스텀 라디오 값 변경")}
    >
      <RadioGroup.Item
        value="custom_styled"
        label="커스텀 스타일 옵션"
        className="bg-blue-100 hover:bg-blue-200"
      />
    </RadioGroup>
  )
};

// 여러 커스텀 스타일 라디오 버튼들
export const MultipleCustomStyles: Story = {
  render: () => (
    <RadioGroup
      name="MultipleCustomStylesStory"
      value="custom_style2"
      className="flex flex-col gap-3"
      onRadioGroupChange={action("커스텀 라디오 그룹 값 변경")}
    >
      <RadioGroup.Item
        value="custom_style1"
        label="파란색 스타일"
        className="rounded-lg bg-blue-100 hover:bg-blue-200"
      />
      <RadioGroup.Item
        value="custom_style2"
        label="초록색 스타일"
        className="rounded-lg bg-green-100 hover:bg-green-200"
      />
      <RadioGroup.Item
        value="custom_style3"
        label="빨간색 스타일"
        className="rounded-lg bg-red-100 hover:bg-red-200"
      />
    </RadioGroup>
  )
};

// 테마 선택 예제
export const ThemeSelector: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedTheme, setSelectedTheme] = useState("light");

    return (
      <div className="flex flex-col gap-4">
        <div className="bg-secondary-800 text-secondary-white rounded-lg p-4">
          <p className="mb-1 font-bold">선택된 테마:</p>
          <div
            className={`rounded-md p-4 ${
              selectedTheme === "light"
                ? "bg-gray-100 text-gray-900"
                : selectedTheme === "dark"
                  ? "bg-gray-900 text-white"
                  : "bg-blue-900 text-blue-100"
            }`}
          >
            {selectedTheme === "light" && "라이트 테마"}
            {selectedTheme === "dark" && "다크 테마"}
            {selectedTheme === "blue" && "블루 테마"}
          </div>
        </div>

        <RadioGroup
          name="ThemeSelectorStory"
          value={selectedTheme}
          onRadioGroupChange={(value) => {
            setSelectedTheme(value);
            action("테마 변경됨")(value);
          }}
          className="flex flex-row gap-4"
        >
          <RadioGroup.Item
            value="light"
            label="라이트"
            className="bg-gray-100 px-4 py-2 text-gray-900 hover:bg-gray-200"
          />
          <RadioGroup.Item
            value="dark"
            label="다크"
            className="bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
          />
          <RadioGroup.Item
            value="blue"
            label="블루"
            className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
          />
        </RadioGroup>
      </div>
    );
  }
};
