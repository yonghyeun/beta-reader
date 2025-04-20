import { Dropdown, DropdownPosition } from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  title: "shared/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger label="드롭다운" />
      <Dropdown.Items>
        <Dropdown.Item onClick={() => console.log("항목 1 클릭됨")}>
          항목 1
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log("항목 2 클릭됨")}>
          항목 2
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log("항목 3 클릭됨")}>
          항목 3
        </Dropdown.Item>
      </Dropdown.Items>
    </Dropdown>
  )
};

export const Padded: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger variant="padded" label="패딩이 있는 드롭다운" />
      <Dropdown.Items>
        <Dropdown.Item onClick={() => console.log("항목 1 클릭됨")}>
          항목 1
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log("항목 2 클릭됨")}>
          항목 2
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log("항목 3 클릭됨")}>
          항목 3
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log("항목 4 클릭됨")}>
          항목 4
        </Dropdown.Item>
      </Dropdown.Items>
    </Dropdown>
  )
};

export const CustomTrigger: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger className="rounded-md bg-purple-700 px-4 py-2 text-white">
        <div className="flex items-center gap-2">
          <span>사용자 지정 트리거</span>
          <span>🔽</span>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Items className="border-purple-300 bg-purple-100">
        <Dropdown.Item
          className="hover:bg-purple-200"
          onClick={() => console.log("옵션 A 클릭됨")}
        >
          옵션 A
        </Dropdown.Item>
        <Dropdown.Item
          className="hover:bg-purple-200"
          onClick={() => console.log("옵션 B 클릭됨")}
        >
          옵션 B
        </Dropdown.Item>
        <Dropdown.Item
          className="hover:bg-purple-200"
          onClick={() => console.log("옵션 C 클릭됨")}
        >
          옵션 C
        </Dropdown.Item>
      </Dropdown.Items>
    </Dropdown>
  )
};

// 다양한 위치 옵션 보여주기
export const DifferentPositions: Story = {
  render: () => {
    // 모든 가능한 위치 옵션
    const positions: DropdownPosition[] = [
      "bottom-left",
      "bottom-right",
      "top-left",
      "top-right",
      "left-top",
      "left-bottom",
      "right-top",
      "right-bottom"
    ];

    return (
      <div className="flex flex-wrap gap-20 p-20">
        {positions.map((position) => (
          <div key={position} className="flex flex-col items-center">
            <h3 className="mb-4 text-sm font-semibold">{position}</h3>
            <Dropdown>
              <Dropdown.Trigger className="rounded bg-blue-600 px-3 py-2 text-white">
                {position}
              </Dropdown.Trigger>
              <Dropdown.Items
                position={position}
                className="border-gray-300 bg-white text-black shadow-md"
              >
                <Dropdown.Item
                  onClick={() => console.log(`${position} 항목 1`)}
                >
                  항목 1
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => console.log(`${position} 항목 2`)}
                >
                  항목 2
                </Dropdown.Item>
              </Dropdown.Items>
            </Dropdown>
          </div>
        ))}
      </div>
    );
  }
};
