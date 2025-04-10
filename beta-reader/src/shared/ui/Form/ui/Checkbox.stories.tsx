import { useState } from "react";

import { Checkbox, CheckboxGroup } from "./Checkbox";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Form/Checkbox",
  component: Checkbox
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    value: "default_option",
    label: "기본 옵션"
  },
  render: (args) => (
    <CheckboxGroup
      name="DefaultCheckboxStory"
      value={[]}
      onCheckboxGroupChange={action("체크박스 값 변경")}
    >
      <Checkbox {...args} />
    </CheckboxGroup>
  )
};

export const Checked: Story = {
  args: {
    value: "checked_option",
    label: "선택된 옵션"
  },
  render: (args) => (
    <CheckboxGroup
      name="CheckedCheckboxStory"
      value={["checked_option"]}
      onCheckboxGroupChange={action("체크박스 값 변경")}
    >
      <Checkbox {...args} />
    </CheckboxGroup>
  )
};

export const WithoutLabel: Story = {
  args: {
    value: "no_label_option"
  },
  render: (args) => (
    <CheckboxGroup
      name="WithoutLabelCheckboxStory"
      value={[]}
      onCheckboxGroupChange={action("체크박스 값 변경")}
    >
      <Checkbox {...args} />
    </CheckboxGroup>
  )
};

export const MultipleOptions: Story = {
  render: () => (
    <CheckboxGroup
      name="MultipleOptionsCheckboxStory"
      value={["multiple_option2"]}
      className="flex flex-col gap-2"
      onCheckboxGroupChange={action("체크박스 그룹 값 변경")}
    >
      <Checkbox value="multiple_option1" label="첫 번째 옵션" />
      <Checkbox value="multiple_option2" label="두 번째 옵션" />
      <Checkbox value="multiple_option3" label="세 번째 옵션" />
    </CheckboxGroup>
  )
};

export const HorizontalGroup: Story = {
  render: () => (
    <CheckboxGroup
      name="HorizontalCheckboxGroupStory"
      value={["horizontal_option1", "horizontal_option3"]}
      className="flex flex-row gap-4"
      onCheckboxGroupChange={action("체크박스 그룹 값 변경")}
    >
      <Checkbox value="horizontal_option1" label="옵션 A" />
      <Checkbox value="horizontal_option2" label="옵션 B" />
      <Checkbox value="horizontal_option3" label="옵션 C" />
    </CheckboxGroup>
  )
};

export const WithStateTracking: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<string[]>([
      "option1",
      "option3"
    ]);

    return (
      <div className="flex flex-col gap-4">
        <div className="bg-secondary-800 text-secondary-white rounded-lg p-3">
          <p className="mb-2">현재 선택된 값:</p>
          <ul className="list-disc pl-5">
            {selectedValues.length > 0 ? (
              selectedValues.map((value) => (
                <li key={value}>
                  <strong>{value}</strong>
                </li>
              ))
            ) : (
              <li>선택된 항목 없음</li>
            )}
          </ul>
        </div>
        <CheckboxGroup
          name="WithStateTrackingCheckboxStory"
          value={selectedValues}
          onCheckboxGroupChange={(values) => {
            setSelectedValues(values);
            action("선택된 옵션이 변경되었습니다")(values);
          }}
          className="flex flex-col gap-2"
        >
          <Checkbox value="option1" label="첫 번째 옵션" />
          <Checkbox value="option2" label="두 번째 옵션" />
          <Checkbox value="option3" label="세 번째 옵션" />
          <Checkbox value="option4" label="네 번째 옵션" />
        </CheckboxGroup>
      </div>
    );
  }
};

// 커스텀 스타일 체크박스
export const CustomStyleCheckbox: Story = {
  args: {
    value: "custom_styled",
    label: "커스텀 스타일 옵션",
    className: "bg-blue-100 hover:bg-blue-200"
  },
  render: (args) => (
    <CheckboxGroup
      name="CustomStyleCheckboxStory"
      value={["custom_styled"]}
      onCheckboxGroupChange={action("커스텀 체크박스 값 변경")}
    >
      <Checkbox {...args} />
    </CheckboxGroup>
  )
};

// 여러 커스텀 스타일 체크박스들
export const MultipleCustomStyles: Story = {
  render: () => (
    <CheckboxGroup
      name="MultipleCustomStylesStory"
      value={["custom_style2"]}
      className="text-secondary-400 flex flex-col gap-3"
      onCheckboxGroupChange={action("커스텀 체크박스 그룹 값 변경")}
    >
      <Checkbox
        value="custom_style1"
        label="파란색 스타일"
        className="rounded-lg bg-blue-100 hover:bg-blue-200"
      />
      <Checkbox
        value="custom_style2"
        label="초록색 스타일"
        className="rounded-lg bg-green-100 hover:bg-green-200"
      />
      <Checkbox
        value="custom_style3"
        label="빨간색 스타일"
        className="rounded-lg bg-red-100 hover:bg-red-200"
      />
    </CheckboxGroup>
  )
};

// 권한 선택기 예제
export const PermissionsSelector: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [permissions, setPermissions] = useState<string[]>([
      "read",
      "comment"
    ]);

    return (
      <div className="flex flex-col gap-4">
        <div className="bg-secondary-800 text-secondary-white rounded-lg p-4">
          <p className="mb-2 font-bold">부여된 권한:</p>
          <div className="flex flex-wrap gap-2">
            {permissions.includes("read") && (
              <span className="rounded-md bg-blue-600 px-2 py-1 text-sm text-white">
                읽기
              </span>
            )}
            {permissions.includes("write") && (
              <span className="rounded-md bg-green-600 px-2 py-1 text-sm text-white">
                쓰기
              </span>
            )}
            {permissions.includes("delete") && (
              <span className="rounded-md bg-red-600 px-2 py-1 text-sm text-white">
                삭제
              </span>
            )}
            {permissions.includes("comment") && (
              <span className="rounded-md bg-purple-600 px-2 py-1 text-sm text-white">
                댓글
              </span>
            )}
            {permissions.length === 0 && (
              <span className="rounded-md bg-gray-500 px-2 py-1 text-sm text-white">
                권한 없음
              </span>
            )}
          </div>
        </div>

        <CheckboxGroup
          name="PermissionsSelectorStory"
          value={permissions}
          onCheckboxGroupChange={(values) => {
            setPermissions(values);
            action("권한이 변경됨")(values);
          }}
          className="grid grid-cols-2 gap-3"
        >
          <Checkbox
            value="read"
            label="읽기 권한"
            className="border border-blue-200 bg-blue-50 text-blue-800"
          />
          <Checkbox
            value="write"
            label="쓰기 권한"
            className="border border-green-200 bg-green-50 text-green-800"
          />
          <Checkbox
            value="delete"
            label="삭제 권한"
            className="border border-red-200 bg-red-50 text-red-800"
          />
          <Checkbox
            value="comment"
            label="댓글 권한"
            className="border border-purple-200 bg-purple-50 text-purple-800"
          />
        </CheckboxGroup>
      </div>
    );
  }
};
