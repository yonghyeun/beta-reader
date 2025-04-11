import { useState } from "react";

import { TextField } from "./TextField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  title: "Shared/Form/TextField",
  component: TextField
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => (
    <TextField className="flex gap-5">
      <TextField.Label htmlFor="default-input">Label</TextField.Label>
      <TextField.Input id="default-input" placeholder="텍스트를 입력하세요" />
    </TextField>
  )
};

export const WithValue: Story = {
  render: () => (
    <TextField className="flex gap-5">
      <TextField.Label htmlFor="with-value-input">
        값이 있는 텍스트 필드
      </TextField.Label>
      <TextField.Input id="with-value-input" defaultValue="이미 입력된 값" />
    </TextField>
  )
};

export const TextAreaExample: Story = {
  render: () => (
    <TextField className="flex flex-col gap-5">
      <TextField.Label htmlFor="textarea-example">텍스트 영역</TextField.Label>
      <TextField.TextArea
        id="textarea-example"
        placeholder="여러 줄의 텍스트를 입력하세요"
        rows={4}
      />
    </TextField>
  )
};

export const TextAreaWithInput: Story = {
  render: () => (
    <TextField className="flex flex-col gap-5">
      <div className="flex gap-5">
        <TextField.Label htmlFor="title-input">제목</TextField.Label>
        <TextField.Input id="title-input" placeholder="제목을 입력하세요" />
      </div>
      <TextField.TextArea
        id="content-textarea"
        aria-label="내용"
        placeholder="여러 줄의 텍스트를 입력하세요"
        rows={4}
      />
    </TextField>
  )
};

export const TextAreaWithValue: Story = {
  render: () => (
    <TextField className="flex gap-5">
      <TextField.Label htmlFor="textarea-with-value">
        값이 있는 텍스트 영역
      </TextField.Label>
      <TextField.TextArea
        id="textarea-with-value"
        defaultValue="이미 입력된 여러 줄의 텍스트 내용입니다. 이 텍스트 영역은 사용자가 긴 텍스트를 입력할 수 있게 해줍니다."
        rows={4}
      />
    </TextField>
  )
};

export const InputWithCustomClassName: Story = {
  render: () => (
    <TextField className="flex items-start gap-5">
      <TextField.Label htmlFor="custom-input">커스텀 클래스</TextField.Label>
      <TextField.Input
        id="custom-input"
        placeholder="커스텀 스타일이 적용된 입력란"
        className="italic"
      />
    </TextField>
  )
};

export const DisabledInput: Story = {
  render: () => (
    <TextField className="flex gap-5">
      <TextField.Label htmlFor="disabled-input">
        비활성화된 입력란
      </TextField.Label>
      <TextField.Input
        id="disabled-input"
        placeholder="입력할 수 없습니다"
        disabled
      />
    </TextField>
  )
};

export const NoLabelInput: Story = {
  render: () => (
    <TextField className="flex gap-5">
      <TextField.Input
        aria-label="라벨이 없는 입력란"
        placeholder="라벨 없이 입력하세요"
      />
    </TextField>
  )
};

export const NoLabelTextArea: Story = {
  render: () => (
    <TextField className="flex gap-5">
      <TextField.TextArea
        aria-label="라벨이 없는 텍스트 영역"
        placeholder="라벨 없이 여러 줄의 텍스트를 입력하세요"
        rows={4}
      />
    </TextField>
  )
};

export const WithOnChangeTracking: Story = {
  render: () => {
    const [inputValue, setInputValue] = useState("");

    return (
      <div className="flex flex-col gap-4">
        <TextField className="flex gap-5">
          <TextField.Label htmlFor="tracked-input">상태 추적</TextField.Label>
          <TextField.Input
            id="tracked-input"
            placeholder="텍스트를 입력해보세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </TextField>
        <div className="text-sm">
          현재 입력 값: <span className="font-semibold">{inputValue}</span>
        </div>
      </div>
    );
  }
};

export const TextAreaWithResize: Story = {
  render: () => (
    <TextField className="flex gap-5">
      <TextField.Label htmlFor="resizable-textarea">
        크기 조절 가능
      </TextField.Label>
      <TextField.TextArea
        id="resizable-textarea"
        placeholder="크기 조절이 가능합니다"
        rows={4}
        resize
      />
    </TextField>
  )
};

export const WithAriaDescribedBy: Story = {
  render: () => (
    <TextField className="flex flex-col gap-5">
      <div className="flex gap-5">
        <TextField.Label htmlFor="pwd-input">비밀번호</TextField.Label>
        <TextField.Input
          id="pwd-input"
          type="password"
          aria-describedby="pwd-requirements"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div id="pwd-requirements" className="text-secondary-200 text-sm">
        비밀번호는 8자 이상, 특수문자 포함이 필요합니다.
      </div>
    </TextField>
  )
};
