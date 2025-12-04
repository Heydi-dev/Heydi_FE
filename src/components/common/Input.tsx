import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  type?: string;
}

const Input = ({
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = "",
  type = "text",
}: InputProps) => {
  return (
    <div className={`w-full flex flex-col gap-1 ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full h-12 px-4
          rounded-[8px]
          border text-sm outline-none   /* ← text-sm (14px) */

          placeholder-[#D0D0D0]
          ${error ? "text-[#E94235]" : "text-[#4A4A4A]"}

          ${
            disabled
              ? "bg-[#ffffff] border-[#D9D9D9] cursor-not-allowed"
              : error
                ? "border-[#E94235]"
                : "border-[#D9D9D9]"
          }

          transition-none
        `}
      />
    </div>
  );
};

export default Input;
