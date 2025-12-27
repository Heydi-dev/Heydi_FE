// Emotion Chart
import type { EmotionKey } from "@/constants/emotions";

export interface EmotionChartItem {
  week: string;
  percent: number;
  emotion: EmotionKey;
}

export const EMOTION_CHART_DUMMY: EmotionChartItem[] = [
  { week: "1주", percent: 72, emotion: "happy" },
  { week: "2주", percent: 54, emotion: "sad" },
  { week: "3주", percent: 68, emotion: "joy" },
  { week: "4주", percent: 72, emotion: "happy" },
  { week: "5주", percent: 38, emotion: "neutral" },
];

// Calendar
export interface CalendarProps {
  year: number;
  month: number;
}

export interface CalendarDate {
  day: number;
  current: boolean;
}

export interface CalendarEntry {
  diaryId: number;
  year: number;
  month: number;
  day: number;
}

export const CALENDAR_DUMMY: CalendarEntry[] = [
  { diaryId: 1, year: 2025, month: 12, day: 3 },
  { diaryId: 2, year: 2025, month: 12, day: 5 },
  { diaryId: 3, year: 2025, month: 12, day: 6 },
  { diaryId: 4, year: 2025, month: 12, day: 7 },
  { diaryId: 5, year: 2025, month: 12, day: 20 },
  { diaryId: 6, year: 2025, month: 12, day: 21 },
  { diaryId: 7, year: 2025, month: 12, day: 22 },
  { diaryId: 8, year: 2025, month: 12, day: 25 },
];
