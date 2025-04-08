import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "white"]
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"]
    },
    rounded: {
      control: { type: "radio" },
      options: ["md", "full"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6.12217 6.98808C6.00038 7.2821 6.00038 7.65487 6.00037 8.40033C6.00036 9.14562 6.00035 9.51854 6.12212 9.81252C6.2845 10.2046 6.596 10.516 6.98802 10.6784C7.28205 10.8002 7.65479 10.8002 8.40026 10.8002C9.14532 10.8002 9.51854 10.8002 9.81248 10.6784C10.2045 10.516 10.516 10.2045 10.6784 9.8125C10.8002 9.51847 10.8002 9.14573 10.8002 8.40025C10.8002 7.65477 10.7997 7.28258 10.6779 6.98856C10.5155 6.59653 10.204 6.28503 9.81198 6.12265C9.51796 6.00087 9.1458 6.00036 8.40032 6.00037C7.65485 6.00038 7.2821 6.00038 6.98808 6.12217C6.59605 6.28456 6.28456 6.59605 6.12217 6.98808Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.12181 14.1879C6.00001 14.4819 6.00001 14.8547 6 15.6001C5.99999 16.3454 5.99999 16.7183 6.12175 17.0123C6.28413 17.4044 6.59563 17.7158 6.98766 17.8782C7.28168 18 7.65443 18 8.3999 18C9.14495 18 9.51817 18 9.81211 17.8782C10.2041 17.7158 10.5156 17.4043 10.678 17.0123C10.7998 16.7183 10.7998 16.3455 10.7998 15.6001C10.7999 14.8546 10.7993 14.4824 10.6775 14.1884C10.5151 13.7963 10.2036 13.4848 9.81162 13.3225C9.5176 13.2007 9.14544 13.2002 8.39996 13.2002C7.65448 13.2002 7.28174 13.2002 6.98772 13.322C6.59568 13.4844 6.28419 13.7959 6.12181 14.1879Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.2002 8.39996C13.2001 9.14525 13.2001 9.51817 13.3219 9.81216C13.4843 10.2042 13.7958 10.5157 14.1878 10.6781C14.4818 10.7998 14.8546 10.7998 15.6001 10.7998C16.3451 10.7998 16.7183 10.7998 17.0123 10.6781C17.4043 10.5157 17.7158 10.2042 17.8782 9.81213C18 9.51811 18 9.14537 18 8.39989C18 7.65442 17.9995 7.28221 17.8777 6.98819C17.7153 6.59616 17.4038 6.28467 17.0118 6.12229C16.7178 6.0005 16.3456 5.99999 15.6001 6C14.8546 6.00001 14.4819 6.00001 14.1879 6.12181C13.7958 6.2842 13.4844 6.59568 13.322 6.98772C13.2002 7.28174 13.2002 7.65449 13.2002 8.39996Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.3219 14.1878C13.2001 14.4818 13.2001 14.8546 13.2001 15.6C13.2001 16.3453 13.2001 16.7183 13.3218 17.0122C13.4842 17.4043 13.7957 17.7158 14.1877 17.8781C14.4817 17.9999 14.8545 17.9999 15.6 17.9999C16.345 17.9999 16.7182 17.9999 17.0122 17.8781C17.4042 17.7157 17.7157 17.4042 17.8781 17.0122C17.9999 16.7182 17.9999 16.3454 17.9999 15.6C17.9999 14.8545 17.9994 14.4823 17.8776 14.1883C17.7152 13.7962 17.4037 13.4847 17.0117 13.3224C16.7177 13.2006 16.3455 13.2001 15.6 13.2001C14.8546 13.2001 14.4818 13.2001 14.1878 13.3219C13.7958 13.4843 13.4843 13.7958 13.3219 14.1878Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

// 기본 버튼 스토리
export const Default: Story = {
  args: {
    variant: "primary",
    size: "md",
    rounded: "md",
    children: "Button"
  },

  render: ({ children, ...args }) => (
    <Button {...args}>
      <Icon />
      {children}
    </Button>
  )
};

// 사이즈별 버튼
export const Size: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="sm" rounded="md">
        <Icon />
        Small
      </Button>
      <Button variant="primary" size="md" rounded="md">
        <Icon />
        Medium
      </Button>
      <Button variant="primary" size="lg" rounded="md">
        <Icon />
        Large
      </Button>
    </div>
  )
};

// 색상 변형별 버튼
export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="md" rounded="md">
        <Icon />
        Primary
      </Button>
      <Button variant="secondary" size="md" rounded="md">
        <Icon />
        secondary
      </Button>
      <Button variant="white" size="md" rounded="md">
        <Icon />
        White
      </Button>
    </div>
  )
};

// 모서리 스타일별 버튼
export const Rounded: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="md" rounded="md">
        <Icon />
        Rounded Medium
      </Button>
      <Button variant="primary" size="md" rounded="full">
        <Icon />
        Rounded Full
      </Button>
    </div>
  )
};

// 비활성화 버튼
export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="md" rounded="md" disabled>
        <Icon />
        Primary
      </Button>
      <Button variant="secondary" size="md" rounded="md" disabled>
        <Icon />
        secondary
      </Button>
      <Button variant="white" size="md" rounded="md" disabled>
        <Icon />
        White
      </Button>
    </div>
  )
};
