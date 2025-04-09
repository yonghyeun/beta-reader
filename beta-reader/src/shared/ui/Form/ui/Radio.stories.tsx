import { useState } from "react";

import { Radio, RadioGroup } from "./Form";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Form/Radio",
  component: Radio
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    value: "default_option",
    label: "기본 옵션"
  },

  render: (args) => (
    <RadioGroup name="DefaultRadioStory" value={args.value}>
      <Radio {...args} />
    </RadioGroup>
  )
};

export const WithoutLabel: Story = {
  args: {
    value: "no_label_option"
  },

  render: (args) => (
    <RadioGroup name="WithoutLabelRadioStory" value={args.value}>
      <Radio {...args} />
    </RadioGroup>
  )
};

export const MultipleOptions: Story = {
  render: () => (
    <RadioGroup
      name="MultipleOptionsRadioStory"
      value="multiple_option2"
      className="flex flex-col gap-2"
    >
      <Radio value="multiple_option1" label="첫 번째 옵션" />
      <Radio value="multiple_option2" label="두 번째 옵션" />
      <Radio value="multiple_option3" label="세 번째 옵션" />
    </RadioGroup>
  )
};

export const HorizontalGroup: Story = {
  render: () => (
    <RadioGroup
      name="HorizontalRadioGroupStory"
      value="horizontal_option1"
      className="flex flex-row gap-4"
    >
      <Radio value="horizontal_option1" label="옵션 A" />
      <Radio value="horizontal_option2" label="옵션 B" />
      <Radio value="horizontal_option3" label="옵션 C" />
    </RadioGroup>
  )
};

export const WithEffect: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("effect_option1");

    return (
      <div className="flex flex-col gap-4">
        <div>
          <p>
            현재 선택된 값: <strong>{selectedValue}</strong>
          </p>
        </div>
        <RadioGroup
          name="WithEffectRadioStory"
          value={selectedValue}
          effect={(value) => {
            setSelectedValue(value);
            console.log(`선택된 옵션이 변경되었습니다: ${value}`);
          }}
          className="flex flex-col gap-2"
        >
          <Radio value="effect_option1" label="첫 번째 옵션" />
          <Radio value="effect_option2" label="두 번째 옵션" />
          <Radio value="effect_option3" label="세 번째 옵션" />
        </RadioGroup>
      </div>
    );
  }
};
