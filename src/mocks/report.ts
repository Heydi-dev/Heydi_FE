// Calendar
export interface CalendarProps {
  year: number;
  month: number;
}

export interface CalendarDate {
  day: number;
  current: boolean;
}

export interface Calendar {
  diaryId: number;
  year: number;
  month: number;
  day: number;
}

export const CALENDAR_DUMMY: Calendar[] = [
  { diaryId: 1, year: 2025, month: 12, day: 3 },
  { diaryId: 2, year: 2025, month: 12, day: 5 },
  { diaryId: 3, year: 2025, month: 12, day: 6 },
  { diaryId: 4, year: 2025, month: 12, day: 7 },
  { diaryId: 5, year: 2025, month: 12, day: 20 },
  { diaryId: 6, year: 2025, month: 12, day: 21 },
  { diaryId: 7, year: 2025, month: 12, day: 22 },
  { diaryId: 8, year: 2025, month: 12, day: 25 },
];
