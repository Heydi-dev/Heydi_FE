/*
 * DiaryEdit - 일기 수정 화면
 *
 * 세부사항:
 * - 일기 수정 내용 표시
 * - 임시 더미 데이터 사용
 */

import { Container, BackHeader, DiaryInfoBox } from "@components/index";
import Plus from "@assets/icons/plus.svg?react";

const DiaryEdit = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <BackHeader rightIcon="save" />

      <Container className="pb-8">
        <div className="w-full bg-white border border-[#E0CFC5] rounded-xl p-4 mb-4">
          <p className="text-sm font-bold text-[#4A4A4A] mb-2">
            12월 7일의 일기
          </p>
          <p className="text-xs text-[#4A4A4A]">작성 날짜: 2025.12.07</p>
          <p className="text-xs text-[#4A4A4A]">총 대화 시간: 07:32</p>
        </div>

        <DiaryInfoBox
          label="오늘의 감정상태"
          type="edit"
          onEditClick={() => console.log("edit emotion")}
        >
          오늘은 행복한 하루를 보냈어요.
        </DiaryInfoBox>

        <DiaryInfoBox
          label="오늘의 주제"
          type="edit"
          onEditClick={() => console.log("edit topic")}
        >
          여행 / 맛집
        </DiaryInfoBox>

        <DiaryInfoBox
          label="오늘의 한 줄 일기"
          type="edit"
          onEditClick={() => console.log("edit one line")}
        >
          일본 여행을 시작한 첫 날이에요.
        </DiaryInfoBox>

        <DiaryInfoBox
          label="오늘의 일기"
          type="edit"
          onEditClick={() => console.log("edit diary")}
        >
          <p className="text-xs leading-5">
            오늘은 일본 여행 1일차예요. 아침 일찍 비행기를 타고 인천공항에서
            간사이 공항으로 이동했어요. 오랜만에 하는 여행이라서 매우 설렜어요.
            공항에 도착한 뒤에는 짐을 찾고 바로 숙소로 이동했어요. 저녁에는 숙소
            주변에서 간단하게 라멘을 먹었는데, 진한 국물 향이 피곤함을 싹
            날려줬어요. 오랜 이동으로 몸은 조금 피곤했지만, 드디어 여행이
            시작됐다는 설렘이 더 컸어요. 이제 내일은 본격적으로 여러 곳을
            돌아다닐 생각이라 벌써부터 기대가 돼요.
          </p>
        </DiaryInfoBox>

        <DiaryInfoBox label="오늘의 대화 내용">
          <div className="w-full flex flex-col gap-2 max-h-[300px] overflow-y-auto">
            <div className="bg-[#EFE8E1] text-[#4A4A4A] text-[10px] p-2 rounded-lg max-w-[60%]">
              안녕! 오늘은 어떤 하루를 보냈어?
            </div>

            <div className="bg-[#B28C7E] text-white text-[10px] p-2 rounded-lg self-end max-w-[80%]">
              오늘 일본 여행을 시작했어. 오사카에 가는데 아침에 일찍 일어났더니
              피곤하네. 하지만 기분은 좋아!
            </div>

            <div className="bg-[#EFE8E1] text-[#4A4A4A] text-[10px] p-2 rounded-lg max-w-[60%]">
              와! 재밌었겠다. 일본에 도착한 뒤에 어떤 걸 했어?
            </div>

            <div className="bg-[#B28C7E] text-white text-[10px] p-2 rounded-lg self-end max-w-[80%]">
              공항에 도착하자마자 짐을 찾고 바로 숙소로 이동했어.
            </div>
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
    </div>
  );
};

export default DiaryEdit;
