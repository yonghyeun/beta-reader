import React from "react";

import { Container, Input, Label, TextArea } from "./TextField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "Shared/TextField",
  component: Container,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Container>;

export const DefaultTextField: Story = {
  render: () => (
    <Container className="min-w-[500px]">
      <Label htmlFor="title">제목</Label>
      <div className="mt-4">
        <Input id="title" placeholder="제목을 입력해주세요" />
      </div>
    </Container>
  )
};

export const TextFieldWithTextArea: Story = {
  render: () => (
    <Container className="min-w-[500px]">
      <Label htmlFor="description">소설 설명</Label>
      <div className="mt-4">
        <TextArea
          id="description"
          placeholder="소설에 대한 설명을 입력해주세요"
          rows={4}
        />
      </div>
    </Container>
  )
};

export const ResizableTextArea: Story = {
  render: () => (
    <Container className="min-w-[500px]">
      <Label htmlFor="notes">작가 노트</Label>
      <div className="mt-4">
        <TextArea
          id="notes"
          placeholder="리사이즈가 가능한 텍스트 영역입니다"
          rows={3}
          resize={true}
        />
      </div>
    </Container>
  )
};

export const ComplexForm: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Container className="min-w-[500px]">
        <Label htmlFor="novel-title">소설 제목</Label>
        <div className="mt-4">
          <Input id="novel-title" placeholder="소설 제목을 입력해주세요" />
        </div>
      </Container>

      <Container className="min-w-[500px]">
        <Label htmlFor="novel-synopsis">줄거리</Label>
        <div className="mt-4">
          <TextArea
            id="novel-synopsis"
            placeholder="줄거리를 입력해주세요"
            rows={5}
          />
        </div>
      </Container>
    </div>
  )
};

export const WithCustomClassName: Story = {
  render: () => (
    <Container className="border-primary-400 min-w-[500px]">
      <Label htmlFor="custom-title" className="text-primary-300">
        커스텀 스타일 제목
      </Label>
      <div className="mt-4">
        <Input
          id="custom-title"
          placeholder="커스텀 스타일이 적용된 입력 필드"
          className="text-primary-300"
        />
      </div>
    </Container>
  )
};
