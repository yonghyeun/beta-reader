import { Container, Item } from "./Tab";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "shared/Tab",
  component: Container,
  decorators: [(Story) => <div className="w-2xl">{Story()}</div>],
  argTypes: {
    tabList: {
      description: "탭 목록 배열",
      control: "object",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" }
      }
    },
    initialValue: {
      description: "초기 선택 탭",
      control: "text",
      table: {
        type: { summary: "string" }
      }
    },
    className: {
      description: "커스텀 CSS 클래스",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container tabList={["첫번째", "두번째", "세번째"]} initialValue="첫번째">
      <Item on="첫번째">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">첫번째 탭 내용</h2>
          <p>첫번째 탭에 표시될 내용입니다.</p>
        </div>
      </Item>
      <Item on="두번째">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">두번째 탭 내용</h2>
          <p>두번째 탭에 표시될 내용입니다.</p>
        </div>
      </Item>
      <Item on="세번째">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">세번째 탭 내용</h2>
          <p>세번째 탭에 표시될 내용입니다.</p>
        </div>
      </Item>
    </Container>
  )
};

export const WithMoreTabs: Story = {
  render: () => {
    const tabs = ["홈", "프로필", "설정", "알림", "도움말"];
    return (
      <Container tabList={tabs} initialValue="홈">
        {tabs.map((tab) => (
          <Item key={tab} on={tab}>
            <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
              <h2 className="text-title-4-bold mb-2">{tab} 페이지</h2>
              <p>{tab} 탭에 표시될 내용입니다.</p>
            </div>
          </Item>
        ))}
      </Container>
    );
  }
};

export const WithCustomContent: Story = {
  render: () => {
    const categories = ["소설", "시", "에세이"];
    const contents = {
      소설: [
        { title: "별빛 속으로", author: "김작가" },
        { title: "바람의 노래", author: "이작가" }
      ],
      시: [
        { title: "가을의 끝", author: "박시인" },
        { title: "별과 나", author: "최시인" }
      ],
      에세이: [
        { title: "여행의 시작", author: "정에세이" },
        { title: "일상의 발견", author: "한에세이" }
      ]
    };

    return (
      <Container tabList={categories} initialValue="소설">
        {/* String 형식으로 on prop 사용 */}
        <Item on="소설">
          <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
            <h2 className="text-title-4-bold mb-4">소설 목록 (string 방식)</h2>
            <ul className="space-y-2">
              {contents.소설.map((item, index) => (
                <li key={index} className="bg-secondary-700 rounded p-2">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-secondary-300 text-sm">
                    작가: {item.author}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Item>

        {/* 함수 형식으로 on prop 사용 */}
        <Item on={(selectedTab) => selectedTab === "시"}>
          <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
            <h2 className="text-title-4-bold mb-4">시 목록 (함수 방식)</h2>
            <ul className="space-y-2">
              {contents.시.map((item, index) => (
                <li key={index} className="bg-secondary-700 rounded p-2">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-secondary-300 text-sm">
                    작가: {item.author}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Item>

        {/* 복잡한 조건을 가진 함수 형식으로 on prop 사용 */}
        <Item
          on={(selectedTab) => {
            // 복잡한 조건을 적용할 수 있음
            return selectedTab === "에세이" || selectedTab === "기타";
          }}
        >
          <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
            <h2 className="text-title-4-bold mb-4">
              에세이 목록 (복잡한 함수 방식)
            </h2>
            <ul className="space-y-2">
              {contents.에세이.map((item, index) => (
                <li key={index} className="bg-secondary-700 rounded p-2">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-secondary-300 text-sm">
                    작가: {item.author}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Item>
      </Container>
    );
  }
};

export const WithInitialSecondTab: Story = {
  render: () => (
    <Container tabList={["첫번째", "두번째", "세번째"]} initialValue="두번째">
      <Item on="첫번째">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">첫번째 탭 내용</h2>
          <p>첫번째 탭에 표시될 내용입니다.</p>
        </div>
      </Item>
      <Item on="두번째">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">
            두번째 탭 내용 (초기 선택됨)
          </h2>
          <p>두번째 탭에 표시될 내용입니다.</p>
        </div>
      </Item>
      <Item on="세번째">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">세번째 탭 내용</h2>
          <p>세번째 탭에 표시될 내용입니다.</p>
        </div>
      </Item>
    </Container>
  )
};

export const CustomStyle: Story = {
  render: () => (
    <Container
      tabList={["작품정보", "작가소개", "구매정보"]}
      initialValue="작품정보"
      className="w-full max-w-[32rem]"
    >
      <Item on="작품정보">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">작품정보</h2>
          <p>소설의 줄거리와 세계관, 주요 등장인물 등의 정보를 제공합니다.</p>
          <p className="mt-2">
            2025년 베스트셀러 순위에 올랐으며 다양한 독자층에게 사랑받고
            있습니다.
          </p>
        </div>
      </Item>
      <Item on="작가소개">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">작가소개</h2>
          <p>이 작품을 집필한 작가의 이력과 대표작에 대한 정보를 제공합니다.</p>
        </div>
      </Item>
      <Item on="구매정보">
        <div className="bg-secondary-800 mt-6 rounded-lg p-4 px-10">
          <h2 className="text-title-4-bold mb-2">구매정보</h2>
          <p>구매 가능한 옵션 및 가격 정보를 확인할 수 있습니다.</p>
        </div>
      </Item>
    </Container>
  )
};
