import { Container, Wrapper } from "./Form";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "shared/Form",
  component: Container,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Form 컨테이너의 추가 클래스명",
      control: "text"
    },
    children: {
      description: "Form 내부 컨텐츠",
      control: "object"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container onSubmit={(e) => e.preventDefault()}>
      <Wrapper>
        <div className="flex flex-col gap-4">
          <h2 className="text-headline-1">폼 제목</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-body-1-medium">
              이름
            </label>
            <input
              id="name"
              type="text"
              className="border-secondary-700 rounded-lg border bg-transparent p-2"
              placeholder="이름을 입력하세요"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-200 mt-4 rounded-lg px-4 py-2 text-black"
          >
            제출하기
          </button>
        </div>
      </Wrapper>
    </Container>
  )
};

export const WithoutWrapper: Story = {
  render: () => (
    <Container className="max-w-md" onSubmit={(e) => e.preventDefault()}>
      <div className="border-secondary-700 flex flex-col gap-4 rounded-lg border p-4">
        <h2 className="text-headline-2">래퍼 없는 폼</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-body-1-medium">
            이메일
          </label>
          <input
            id="email"
            type="email"
            className="border-secondary-700 rounded-lg border bg-transparent p-2"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <button
          type="submit"
          className="bg-primary-200 mt-2 rounded-lg px-4 py-2 text-black"
        >
          제출하기
        </button>
      </div>
    </Container>
  )
};

export const WrapperOnly: Story = {
  render: () => (
    <Wrapper className="max-w-md">
      <div className="flex flex-col gap-4">
        <h2 className="text-headline-2">래퍼만 사용한 예시</h2>
        <p className="text-body-2-regular">
          이 예시는 폼 래퍼만 사용하여 배경과 패딩을 적용한 컨테이너입니다. 폼
          기능은 포함되지 않습니다.
        </p>
      </div>
    </Wrapper>
  )
};

export const ComplexForm: Story = {
  render: () => (
    <Container className="max-w-xl" onSubmit={(e) => e.preventDefault()}>
      <Wrapper>
        <div className="flex flex-col gap-6">
          <h2 className="text-headline-1">복잡한 폼 예시</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-body-1-medium">
                이름
              </label>
              <input
                id="firstName"
                type="text"
                className="border-secondary-700 rounded-lg border bg-transparent p-2"
                placeholder="이름"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-body-1-medium">
                성
              </label>
              <input
                id="lastName"
                type="text"
                className="border-secondary-700 rounded-lg border bg-transparent p-2"
                placeholder="성"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="email" className="text-body-1-medium">
                이메일
              </label>
              <input
                id="email"
                type="email"
                className="border-secondary-700 rounded-lg border bg-transparent p-2"
                placeholder="이메일 주소"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-body-1-medium">
                메시지
              </label>
              <textarea
                id="message"
                rows={4}
                className="border-secondary-700 rounded-lg border bg-transparent p-2"
                placeholder="메시지를 입력하세요"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary-200 mt-2 self-end rounded-lg px-4 py-2 text-black"
          >
            제출하기
          </button>
        </div>
      </Wrapper>
    </Container>
  )
};
