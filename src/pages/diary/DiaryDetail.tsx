/*
 * DiaryDetail - 일기 상세보기 화면
 *
 * 세부사항:
 * - 일기 세부내용 표시
 * - 리포트로 보내기 버튼
 * - 임시 더미 데이터 사용
 * - 사진 업로드 기능은 UI만 구현
 */

import { useParams } from "react-router-dom";
import { Container, Button, BackHeader, DiaryInfoBox } from "@components/index";
import Plus from "@assets/icons/plus.svg?react";
import { DIARY_DETAIL_DUMMY } from "@mocks/diary";
import { EMOTION_SENTENCE } from "@constants/emotions";

const DiaryDetail = () => {
  const { diaryId } = useParams<{ diaryId: string }>();
  const diary = DIARY_DETAIL_DUMMY;

  const handleSendToReport = () => {
    console.log("send to report");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <BackHeader rightIcon="menu" diaryId={diaryId} />

      <Container className="pb-10">
        <div className="w-full bg-white border border-[#E0CFC5] rounded-xl p-4 mb-4">
          <p className="text-sm font-bold text-[#4A4A4A] mb-2">{diary.title}</p>
          <p className="text-xs text-[#4A4A4A]">작성 날짜: {diary.createdAt}</p>
          <p className="text-xs text-[#4A4A4A]">
            총 대화 시간: {diary.totalTalkTime}
          </p>
        </div>

        <DiaryInfoBox label="오늘의 감정상태">
          오늘은 {EMOTION_SENTENCE[diary.emotion]} 하루를 보냈어요.
        </DiaryInfoBox>

        <DiaryInfoBox label="오늘의 주제">{diary.topics}</DiaryInfoBox>

        <DiaryInfoBox label="오늘의 한 줄 일기">{diary.oneLine}</DiaryInfoBox>

        <DiaryInfoBox label="오늘의 일기">
          <p className="text-xs leading-5">{diary.content}</p>
        </DiaryInfoBox>

        <DiaryInfoBox label="오늘의 대화 내용">
          <div className="w-full flex flex-col gap-2 max-h-[300px] overflow-y-auto">
            {diary.conversations.map((msg, idx) => (
              <div
                key={idx}
                className={`text-[10px] p-2 rounded-lg ${
                  msg.role === "assistant"
                    ? "bg-[#EFE8E1] text-[#4A4A4A] max-w-[60%]"
                    : "bg-[#B28C7E] text-white self-end max-w-[80%]"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
        </DiaryInfoBox>

        <DiaryInfoBox label="오늘의 사진">
          <label
            className="w-full h-[120px] bg-[#EFE8E1] rounded-xl border border-[#E0CFC5]
                       flex flex-col items-center justify-center cursor-pointer"
          >
            <Plus />
          </label>

          <p className="text-[10px] text-[#B28C7E] text-center mt-2">
            사진은 최대 4장까지 업로드 할 수 있어요.
          </p>
        </DiaryInfoBox>

        <Button
          variant="full"
          className="w-full mt-8"
          onClick={handleSendToReport}
        >
          리포트로 보내기
        </Button>
      </Container>
    </div>
  );
};

export default DiaryDetail;
