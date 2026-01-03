import { BsThreeDotsVertical } from "react-icons/bs";
import DefaultProfile from "@assets/icons/profile_s.svg";
import { CommunityComment } from "@mocks/community";

interface CommentItemProps {
  comment: CommunityComment;
  currentUser: string;
}

const CommentItem = ({ comment, currentUser }: CommentItemProps) => {
  const isMine = comment.user === currentUser;

  return (
    <div className="flex gap-3 w-full">
      <img
        src={comment.profile || DefaultProfile}
        className="w-7 h-7 rounded-full opacity-60 shrink-0 shadow-sm"
      />

      <div className="flex-1">
        <div className="flex items-center justify-between mb-3">
          <p
            className={`text-xs font-bold ${
              isMine ? "text-[#B28C7E]" : "text-[#4A4A4A]"
            }`}
          >
            {comment.user}
          </p>

          {isMine && <BsThreeDotsVertical size={16} color="#76615A" />}
        </div>

        <div
          className="
            inline-block
            w-fit
            max-w-[260px]
            bg-[#FAF7F5]
            px-4 py-3
            text-xs text-[#4A4A4A]
            leading-4 break-words
            rounded-tr-lg rounded-br-lg rounded-bl-lg
          "
        >
          {comment.content}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
