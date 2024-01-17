import React, { Dispatch, FC, SetStateAction } from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "600", "500", "700"],
  subsets: ["latin"],
});

export interface IQuizResponseButton {
  label: string;
  handleClick?: (answer: boolean, label: string) => void;
  answer?: boolean;
}

const QuizResponseButton: React.FC<IQuizResponseButton> = ({
  label,
  handleClick = null,
  answer = false,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!handleClick) {
          return;
        }
        handleClick(answer, label);
      }}
      className="relative inline-flex items-center w-fit h-[61px] p-[14px] border-[3px] border-solid border-[#775332] rounded-xl shadow-[4px_4px_#775332]"
    >
      <p
        className={`flex items-center justify-start ${poppins.className} text-[#775332] text-[22.103px] font-bold leading-[33.154px] break-keep w-max`}
      >
        {label}
      </p>
    </button>
  );
};

export default QuizResponseButton;
