import React, { useState } from "react";

import { Container, Input } from "./Radio";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "Shared/Radio",
  component: Container,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Container>;

const genres = [
  "로맨스",
  "로맨스 판타지",
  "판타지",
  "현대 판타지",
  "무협",
  "BL",
  "GL",
  "추리",
  "공포",
  "드라마"
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="bg-secondary-900 rounded-lg p-6">
        <Container
          name="default-genre-example"
          value={value}
          onRadioGroupChange={setValue}
        >
          <legend className="text-title-4-bold mb-4">장르 선택</legend>
          <div className="flex flex-wrap gap-2">
            {genres.slice(0, 5).map((genre) => (
              <Input
                key={genre}
                value={genre}
                label={genre}
                id={`default-${genre}`}
              />
            ))}
          </div>
        </Container>

        <div className="text-secondary-300 mt-4">
          선택된 장르: {value || "없음"}
        </div>
      </div>
    );
  }
};

export const GridLayout: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="bg-secondary-900 rounded-lg p-6">
        <Container
          name="grid-layout-genre-example"
          value={value}
          onRadioGroupChange={setValue}
        >
          <legend className="text-title-4-bold mb-4">장르 선택</legend>
          <div className="grid grid-cols-5 gap-3">
            {genres.map((genre) => (
              <Input
                key={genre}
                value={genre}
                label={genre}
                id={`grid-${genre}`}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
};

export const WithCustomStyles: Story = {
  render: () => {
    const [value, setValue] = useState("옵션 2");

    return (
      <div className="bg-secondary-900 rounded-lg p-6">
        <Container
          name="custom-styles-radio-example"
          value={value}
          onRadioGroupChange={setValue}
          className="min-w-[500px]"
        >
          <legend className="text-title-4-bold mb-4">커스텀 스타일</legend>
          <div className="flex flex-col gap-3">
            <Input
              value="옵션 1"
              label="옵션 1"
              className="bg-secondary-800 border-l-primary-200 w-full rounded-md border-l-4 px-4 py-2"
              id="custom-option1"
            />
            <Input
              value="옵션 2"
              label="옵션 2"
              className="bg-secondary-800 border-l-primary-200 w-full rounded-md border-l-4 px-4 py-2"
              id="custom-option2"
            />
            <Input
              value="옵션 3"
              label="옵션 3"
              className="bg-secondary-800 border-l-primary-200 w-full rounded-md border-l-4 px-4 py-2"
              id="custom-option3"
            />
          </div>
        </Container>
      </div>
    );
  }
};

export const WithoutLabels: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="bg-secondary-900 rounded-lg p-6">
        <Container
          name="no-labels-color-picker-example"
          value={value}
          onRadioGroupChange={setValue}
        >
          <legend className="text-title-4-bold mb-4">색상 선택</legend>
          <div className="flex gap-4">
            <Input value="red" className="!p-0" id="color-red" />
            <Input value="green" className="!p-0" id="color-green" />
            <Input value="blue" className="!p-0" id="color-blue" />
            <Input value="yellow" className="!p-0" id="color-yellow" />
          </div>
        </Container>

        <div className="text-secondary-300 mt-4">
          선택된 색상: {value || "없음"}
        </div>
      </div>
    );
  }
};
