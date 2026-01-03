import { useEffect, useRef, useState } from "react";
import CommentItem from "./CommentItem";
import Send from "@assets/icons/send.svg?react";
import { CommunityComment } from "@mocks/community";

interface CommentProps {
  initialComments: CommunityComment[];
  currentUser: string;
}

const Comment = ({ initialComments, currentUser }: CommentProps) => {
  const [comments, setComments] = useState<CommunityComment[]>(initialComments);
  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const isAddedByMe = useRef(false);

  const handleAddComment = () => {
    if (!inputValue.trim()) return;

    isAddedByMe.current = true;

    setComments(prev => [
      ...prev,
      {
        user: currentUser,
        profile: "",
        content: inputValue,
      },
    ]);

    setInputValue("");
  };

  useEffect(() => {
    if (!isAddedByMe.current) return;

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    isAddedByMe.current = false;
  }, [comments.length]);

  return (
    <>
      <div className="flex flex-col gap-6 w-full mb-20">
        {comments.map((comment, idx) => (
          <CommentItem key={idx} comment={comment} currentUser={currentUser} />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[425px] bg-white py-3 px-4 flex items-center gap-2 border-t border-[#eee]">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="내용을 입력하세요"
          className="flex-1 h-10 border rounded-lg border-[#D9D9D9] px-3 text-[12px] outline-none"
        />
        <button onClick={handleAddComment}>
          <Send />
        </button>
      </div>
    </>
  );
};

export default Comment;
