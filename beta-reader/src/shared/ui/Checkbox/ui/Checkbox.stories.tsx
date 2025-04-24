import { useState } from "react";

import { Container, Input } from "./Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "Shared/Checkbox",
  component: Container,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Container>;

/**
 * 기본 체크박스 그룹 예시입니다.
 */
export const Default: Story = {
  render: () => <DefaultComponent />
};

// 별도 컴포넌트로 분리
const DefaultComponent = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>(["option1"]);

  const handleCheckboxChange = (values: string[]) => {
    setSelectedValues(values);
    console.log("Selected values:", values);
  };

  return (
    <Container
      name="options"
      value={selectedValues.join(",")}
      onCheckboxGroupChange={handleCheckboxChange}
      className="flex flex-col gap-2"
    >
      <Input value="option1" label="옵션 1" id="option1-default" />
      <Input value="option2" label="옵션 2" id="option2-default" />
      <Input value="option3" label="옵션 3" id="option3-default" />
    </Container>
  );
};

/**
 * 초기 선택값이 있는 체크박스 그룹입니다.
 */
export const PreSelected: Story = {
  render: () => <PreSelectedComponent />
};

// 별도 컴포넌트로 분리
const PreSelectedComponent = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>(["option2"]);

  const handleCheckboxChange = (values: string[]) => {
    setSelectedValues(values);
    console.log("Selected values:", values);
  };

  return (
    <Container
      name="preselected"
      value={selectedValues.join(",")}
      onCheckboxGroupChange={handleCheckboxChange}
      className="flex flex-col gap-2"
    >
      <Input value="option1" label="첫 번째 옵션" id="option1-preselected" />
      <Input value="option2" label="두 번째 옵션" id="option2-preselected" />
      <Input value="option3" label="세 번째 옵션" id="option3-preselected" />
    </Container>
  );
};

/**
 * 다중 선택이 가능한 체크박스 그룹입니다.
 */
export const MultiSelect: Story = {
  render: () => <MultiSelectComponent />
};

// 별도 컴포넌트로 분리
const MultiSelectComponent = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "option1",
    "option3"
  ]);

  const handleCheckboxChange = (values: string[]) => {
    setSelectedValues(values);
    console.log("Selected values:", values);
  };

  return (
    <Container
      name="multiselect"
      value={selectedValues.join(",")}
      onCheckboxGroupChange={handleCheckboxChange}
      className="flex flex-col gap-2"
    >
      <Input value="option1" label="첫 번째 옵션" id="option1-multiselect" />
      <Input value="option2" label="두 번째 옵션" id="option2-multiselect" />
      <Input value="option3" label="세 번째 옵션" id="option3-multiselect" />
    </Container>
  );
};

/**
 * 인라인으로 표시되는 체크박스 그룹입니다.
 */
export const InlineCheckboxes: Story = {
  render: () => <InlineCheckboxesComponent />
};

// 별도 컴포넌트로 분리
const InlineCheckboxesComponent = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>(["option1"]);

  const handleCheckboxChange = (values: string[]) => {
    setSelectedValues(values);
    console.log("Selected values:", values);
  };

  return (
    <Container
      name="inline"
      value={selectedValues.join(",")}
      onCheckboxGroupChange={handleCheckboxChange}
      className="flex flex-row gap-4"
    >
      <Input value="option1" label="선택 A" id="option1-inline" />
      <Input value="option2" label="선택 B" id="option2-inline" />
      <Input value="option3" label="선택 C" id="option3-inline" />
    </Container>
  );
};

/**
 * 커스텀 스타일이 적용된 체크박스 그룹입니다.
 */
export const CustomStyling: Story = {
  render: () => <CustomStylingComponent />
};

// 별도 컴포넌트로 분리
const CustomStylingComponent = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>(["option1"]);

  const handleCheckboxChange = (values: string[]) => {
    setSelectedValues(values);
    console.log("Selected values:", values);
  };

  return (
    <Container
      name="custom"
      value={selectedValues.join(",")}
      onCheckboxGroupChange={handleCheckboxChange}
      className="bg-secondary-100 rounded-lg p-4"
    >
      <div className="flex flex-col gap-3">
        <Input
          value="option1"
          label="커스텀 스타일 옵션 1"
          className="bg-white/10"
          id="option1-custom"
        />
        <Input
          value="option2"
          label="커스텀 스타일 옵션 2"
          className="bg-white/10"
          id="option2-custom"
        />
        <Input
          value="option3"
          label="커스텀 스타일 옵션 3"
          className="bg-white/10"
          id="option3-custom"
        />
      </div>
    </Container>
  );
};

/**
 * 체크박스의 다양한 상태를 보여주는 예시입니다.
 */
export const CheckboxStates: Story = {
  render: () => <CheckboxStatesComponent />
};

// 별도 컴포넌트로 분리하여 Hook 규칙 준수
const CheckboxStatesComponent = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>(["selected"]);

  const handleCheckboxChange = (values: string[]) => {
    setSelectedValues(values);
    console.log("Selected values:", values);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-secondary-800 rounded-lg p-4">
        <h3 className="text-title-4-bold mb-4">기본 상태</h3>
        <Container
          name="states"
          value={selectedValues.join(",")}
          onCheckboxGroupChange={handleCheckboxChange}
          className="flex flex-col gap-3"
        >
          <Input value="selected" label="선택된 상태" id="checkbox-selected" />
          <Input
            value="unselected"
            label="선택되지 않은 상태"
            id="checkbox-unselected"
          />
        </Container>
      </div>

      <div className="bg-secondary-800 rounded-lg p-4">
        <h3 className="text-title-4-bold mb-4">비활성화 상태</h3>
        <Container
          name="disabled-states"
          value="disabled-selected"
          onCheckboxGroupChange={() => {}}
          className="flex flex-col gap-3"
        >
          <Input
            value="disabled-selected"
            label="선택된 비활성화 상태"
            id="checkbox-disabled-selected"
            disabled
          />
          <Input
            value="disabled-unselected"
            label="선택되지 않은 비활성화 상태"
            id="checkbox-disabled-unselected"
            disabled
          />
        </Container>
      </div>

      <div className="bg-secondary-800 rounded-lg p-4">
        <h3 className="text-title-4-bold mb-4">필수 입력 상태</h3>
        <Container
          name="required-states"
          value={selectedValues.join(",")}
          onCheckboxGroupChange={handleCheckboxChange}
          className="flex flex-col gap-3"
          required
          aria-label="필수 입력 체크박스 그룹"
        >
          <Input
            value="required-option"
            label="필수 입력 옵션"
            id="checkbox-required"
          />
        </Container>
        <p className="text-secondary-200 mt-2 text-sm">
          * 이 필드는 필수입니다. (스크린 리더에 필수 항목으로 안내됨)
        </p>
      </div>
    </div>
  );
};

/**
 * 체크박스 그룹과 독립적인 체크박스 사용 예시입니다.
 */
export const IndividualCheckboxes: Story = {
  render: () => <IndividualCheckboxesComponent />
};

// 별도 컴포넌트로 분리
const IndividualCheckboxesComponent = () => {
  const [checkboxState1, setCheckboxState1] = useState<boolean>(true);
  const [checkboxState2, setCheckboxState2] = useState<boolean>(false);

  // 개별 체크박스를 위한 커스텀 핸들러
  const handleIndividualCheckbox = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    return (values: string[]) => {
      setState(values.length > 0);
    };
  };

  return (
    <div className="bg-secondary-800 flex flex-col gap-4 rounded-lg p-4">
      <h3 className="text-title-4-bold">독립형 체크박스 활용</h3>

      <Container
        name="individual1"
        value={checkboxState1 ? "checked" : ""}
        onCheckboxGroupChange={handleIndividualCheckbox(setCheckboxState1)}
        className="flex"
      >
        <Input
          value="checked"
          label="독립형 체크박스 (선택됨)"
          id="individual-checkbox1"
        />
      </Container>

      <Container
        name="individual2"
        value={checkboxState2 ? "checked" : ""}
        onCheckboxGroupChange={handleIndividualCheckbox(setCheckboxState2)}
        className="flex"
      >
        <Input
          value="checked"
          label="독립형 체크박스 (선택되지 않음)"
          id="individual-checkbox2"
        />
      </Container>

      <div className="bg-secondary-900 mt-2 rounded-md p-3">
        <pre className="text-secondary-200 text-sm">
          {JSON.stringify(
            { checkbox1: checkboxState1, checkbox2: checkboxState2 },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};
