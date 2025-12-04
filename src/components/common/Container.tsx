import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`
        w-full flex flex-col justify-center items-center
        px-10 mt-4
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
