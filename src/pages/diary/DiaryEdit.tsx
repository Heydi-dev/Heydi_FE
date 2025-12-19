/*
 * DiaryEdit - 일기 수정 화면
 *
 * 세부사항:
 * - 일기 수정 내용 표시
 * - 임시 더미 데이터 사용
 */

import { useState } from "react";
import {
  Container,
  BackHeader,
  DiaryInfoBox,
  EmotionModal,
} from "@components/index";
import Plus from "@assets/icons/plus.svg?react";
import { EMOTION_SENTENCE, EMOTION_S_ICONS } from "@constants/emotions";
import { DIARY_DETAIL_DUMMY } from "@mocks/diary";

const DiaryEdit = () => {
  const [diary, setDiary] = useState(DIARY_DETAIL_DUMMY);
  const [emotionModalOpen, setEmotionModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <BackHeader rightIcon="save" />

      <Container className="pb-8">
        <div className="w-full bg-white border border-[#E0CFC5] rounded-xl p-4 mb-4">
          <p className="text-sm font-bold text-[#4A4A4A] mb-2">{diary.title}</p>
          <p className="text-xs text-[#4A4A4A]">작성 날짜: {diary.createdAt}</p>
          <p className="text-xs text-[#4A4A4A]">
            총 대화 시간: {diary.totalTalkTime}
          </p>
        </div>

        <DiaryInfoBox
          label="오늘의 감정상태"
          type="edit"
          onEditClick={() => setEmotionModalOpen(true)}
        >
          <div className="flex items-center gap-1">
            <span className="flex items-center">
              {EMOTION_S_ICONS[diary.emotion]}
            </span>
            <span>
              오늘은 {EMOTION_SENTENCE[diary.emotion]} 하루를 보냈어요.
            </span>
          </div>
        </DiaryInfoBox>

        <DiaryInfoBox
          label="오늘의 주제"
          type="edit"
          onEditClick={() => console.log("edit topic")}
        >
          {diary.topics}
        </DiaryInfoBox>

        <DiaryInfoBox
          label="오늘의 한 줄 일기"
          type="edit"
          onEditClick={() => console.log("edit one line")}
        >
          {diary.oneLine}
        </DiaryInfoBox>

        <DiaryInfoBox
          label="오늘의 일기"
          type="edit"
          onEditClick={() => console.log("edit diary")}
        >
          <p className="text-xs leading-5">{diary.content}</p>
        </DiaryInfoBox>

        <DiaryInfoBox label="오늘의 대화 내용">
          <div className="w-full flex flex-col gap-2 max-h-[300px] overflow-y-auto pt-2">
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
      </Container>

      <EmotionModal
        isOpen={emotionModalOpen}
        defaultEmotion={diary.emotion}
        onClose={() => setEmotionModalOpen(false)}
        onConfirm={nextEmotion => {
          setDiary(prev => ({
            ...prev,
            emotion: nextEmotion,
          }));
        }}
      />
    </div>
  );
};

export default DiaryEdit;
