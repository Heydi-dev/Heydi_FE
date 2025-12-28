/*
 * Report - 월간 리포트 화면
 *
 * 세부사항:
 * - 이번 달의 감정 변화 차트
 * - 자주 나온 주제 태그 (추후 수정 예정)
 * - 좋아하는 것 / 싫어하는 것
 * - 이번 달 활동 요약
 * - 인사이트 & 피드백
 * - 캘린더
 * - 한 달 전 하루 일기 카드
 * - 하드코딩 된 데이터 사용
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  DefaultHeader,
  BottomNav,
  DiaryCard,
  EmotionChart,
  TopTopics,
  Calendar,
  MonthModal,
} from "@components/index";
import { IoCalendarNumberOutline } from "react-icons/io5";
import {
  EMOTION_CHART_DUMMY,
  TOPICS_DUMMY,
  CALENDAR_DUMMY,
} from "@mocks/report";

const Report = () => {
  const navigate = useNavigate();

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <DefaultHeader />

      <Container withBottomNav={true}>
        <div className="w-full flex flex-col mb-3">
          <div
            className="flex justify-end items-center text-xs font-bold text-[#4A4A4A] gap-1 mb-1 cursor-pointer"
            onClick={() => setIsMonthModalOpen(true)}
          >
            <IoCalendarNumberOutline size={18} color="#76615A" />
            <span>
              {year}년 {month}월
            </span>
          </div>

          <p className="text-base font-bold text-[#4A4A4A]">
            이번달의 감정 변화
          </p>
        </div>
        <EmotionChart data={EMOTION_CHART_DUMMY} />

        <div className="w-full flex flex-col mb-3">
          <p className="text-base font-bold text-[#4A4A4A]">자주 나온 주제</p>
        </div>
        <TopTopics topics={TOPICS_DUMMY} />

        <div className="w-full mb-6">
          <div className="flex justify-between">
            <div className="flex-1 mr-2">
              <p className="text-base font-bold text-[#4A4A4A] mb-2">
                좋아하는 것
              </p>
              <div
                className="
                  py-4 bg-[#EFE8E1] rounded-xl text-xs font-semibold text-[#4A4A4A]
                  flex items-center justify-center
                "
              >
                맛집 탐방
              </div>
            </div>

            <div className="flex-1 ml-2">
              <p className="text-base font-bold text-[#4A4A4A] mb-2">
                싫어하는 것
              </p>
              <div
                className="
                  py-4 bg-[#EFE8E1] rounded-xl text-xs font-semibold text-[#4A4A4A]
                  flex items-center justify-center
                "
              >
                발표
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col mb-3">
          <p className="text-base font-bold text-[#4A4A4A]">
            이런 활동을 많이 했어요
          </p>
        </div>
        <div className="w-full bg-[#EFE8E1] rounded-xl p-4 mb-6">
          <p className="text-[10px] text-[#4A4A4A] leading-5">
            이번 달에는 학교에 가서 친구들과 점심을 많이 먹었어요! 학교 식당에
            가기도 하고 배달 음식을 시켜 먹으며 좋은 추억을 만들었습니다.
          </p>
        </div>

        <div className="w-full flex flex-col mb-3">
          <p className="text-base font-bold text-[#4A4A4A]">
            인사이트 & 피드백
          </p>
        </div>
        <div className="w-full bg-[#EFE8E1] rounded-xl p-4 mb-6">
          <p className="text-[10px] leading-5 text-[#4A4A4A]">
            운동을 한다고 했지만 계속 미루기만 했어요. 다음 달에는 누워있는
            시간을 줄이고 잠깐이라도 운동을 하는 습관을 만들어보면 어떨까요?
          </p>
        </div>

        <div className="w-full flex flex-col mb-3">
          <p className="text-base font-bold text-[#4A4A4A]">캘린더</p>
        </div>

        <Calendar year={year} month={month} calendars={CALENDAR_DUMMY} />

        <div className="w-full mt-6 mb-2">
          <p className="text-base font-bold text-[#4A4A4A] mb-2">
            한 달 전에 이런 하루가 있었어요
          </p>

          <DiaryCard
            date="11월 20일"
            emotion="짜증"
            topic="친구"
            onClick={() => navigate(`/diary/detail/:diaryId`)}
          />
        </div>
      </Container>

      <BottomNav />

      <MonthModal
        isOpen={isMonthModalOpen}
        onClose={() => setIsMonthModalOpen(false)}
        defaultYear={year}
        defaultMonth={month}
        onConfirm={(y, m) => {
          setYear(y);
          setMonth(m);
        }}
      />
    </div>
  );
};

export default Report;
