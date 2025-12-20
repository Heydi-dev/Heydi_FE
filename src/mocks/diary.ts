import { EmotionKey } from "@constants/emotions";

export interface DiaryMessage {
  role: "assistant" | "user";
  content: string;
}

export interface DiaryDetailDummy {
  id: string;
  title: string;
  createdAt: string;
  totalTalkTime: string;
  emotion: EmotionKey;
  topics: string[];
  oneLine: string;
  content: string;
  conversations: DiaryMessage[];
}

export const DIARY_DETAIL_DUMMY: DiaryDetailDummy = {
  id: "1",
  title: "12월 7일의 일기",
  createdAt: "2025.12.07",
  totalTalkTime: "07:32",
  emotion: "happy",
  topics: ["여행", "맛집"],
  oneLine: "일본 여행을 시작한 첫 날이에요.",
  content:
    "오늘은 일본 여행 1일차예요. 아침 일찍 비행기를 타고 인천공항에서 간사이 공항으로 이동했어요. 오랜만에 하는 여행이라서 매우 설렜어요. 공항에 도착한 뒤에는 짐을 찾고 바로 숙소로 이동했어요. 저녁에는 숙소 주변에서 간단하게 라멘을 먹었는데, 진한 국물 향이 피곤함을 싹 날려줬어요. 오랜 이동으로 몸은 조금 피곤했지만, 드디어 여행이 시작됐다는 설렘이 더 컸어요. 이제 내일은 본격적으로 여러 곳을 돌아다닐 생각이라 벌써부터 기대가 돼요.",
  conversations: [
    { role: "assistant", content: "안녕! 오늘은 어떤 하루를 보냈어?" },
    {
      role: "user",
      content:
        "오늘 일본 여행을 시작했어. 오사카에 가는데 아침에 일찍 일어났더니 피곤하네. 하지만 기분은 좋아!",
    },
    {
      role: "assistant",
      content: "와! 재밌었겠다. 일본에 도착한 뒤에 어떤 걸 했어?",
    },
    {
      role: "user",
      content: "공항에 도착하자마자 짐을 찾고 바로 숙소로 이동했어.",
    },
  ],
};
