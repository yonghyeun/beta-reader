import React from "react";

import { Button } from "../../Button";
import { Form } from "./Form";
import { Radio, RadioGroup } from "./Radio";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Form> = {
  title: "Shared/Form/Form",
  component: Form,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Form>;

const GENRE_ARRAY = [
  "로맨스",
  "로맨스 판타지",
  "판타지",
  "현대/판타지",
  "추리",
  "BL",
  "GL",
  "공포",
  "무협",
  "드라마"
];

export const Default: Story = {
  render: () => (
    <Form>
      <Form.Container>
        <RadioGroup
          name="genre"
          value=""
          onRadioGroupChange={(value) => console.log(value)}
        >
          <legend className="text-title-4-bold">장르</legend>
          <div className="mt-4 grid grid-cols-5 gap-4">
            {GENRE_ARRAY.map((item) => (
              <Radio value={item} key={item} label={item} />
            ))}
          </div>
        </RadioGroup>
      </Form.Container>
    </Form>
  )
};

export const WithCustomClassName: Story = {
  render: () => (
    <Form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <Form.Container className="border-primary-400 rounded-xl border">
        <h3 className="text-body-1-semibold text-secondary-white mb-4">
          문의하기
        </h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="제목"
            className="bg-secondary-800 text-secondary-white rounded-xl p-3"
          />
          <textarea
            placeholder="내용을 입력해주세요"
            className="bg-secondary-800 text-secondary-white min-h-[100px] rounded-xl p-3"
          />
          <div className="flex justify-end">
            <Button type="submit">보내기</Button>
          </div>
        </div>
      </Form.Container>
    </Form>
  )
};
