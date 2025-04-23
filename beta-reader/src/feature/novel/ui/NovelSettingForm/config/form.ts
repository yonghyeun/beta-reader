export const NOVEL_SETTING_FORM = {
  TITLE: {
    name: "title",
    placeholder: "연재물 제목을 입력하세요"
  },

  GENRE: {
    name: "genre",
    options: [
      { label: "로맨스", value: "ROMANCE" },
      { label: "로맨스 판타지", value: "ROMANCE_FANTASY" },
      { label: "판타지", value: "FANTASY" },
      { label: "현대 판타지", value: "MODERN_FANTASY" },
      { label: "추리", value: "MYSTERY" },
      { label: "BL", value: "BL" },
      { label: "GL", value: "GL" },
      { label: "공포", value: "HORROR" },
      { label: "무협", value: "MARTIAL_ARTS" },
      { label: "드라마", value: "DRAMA" }
    ]
  },
  AGE_GROUP: {
    name: "ageGroup",
    options: [
      { label: "전체 이용가", value: "GENERAL_AUDIENCE" },
      { label: "15세 이상 이용가", value: "FIFTEEN_ABOVE" },
      { label: "19세 이상 이용가", value: "NINETEEN_ABOVE" }
    ]
  },

  PLOT: {
    name: "plot",
    placeholder: "플롯을 입력해주세요"
  },

  KEYWORDS: {
    name: "keywords",
    placeholder: "키워드를 입력하고 엔터를 눌러주세요"
  },

  CHARACTER: {
    ROLE: {
      options: [
        { label: "주연", value: "PROTAGONIST" },
        {
          label: "조연",
          value: "SECONDARY"
        }
      ]
    }
  }
} as const;
