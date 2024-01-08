import React from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "600", "500", "700"],
  subsets: ["latin"],
});

interface IQuizResponseButton {
  label: string;
  handleClick: (answer: boolean) => void;
  answer?: boolean;
}

const QuizResponseButton: React.FC<IQuizResponseButton> = ({
  label,
  handleClick,
  answer = false,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClick(answer);
      }}
      className="relative inline-flex items-center w-fit h-[67px]"
    >
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="67"
          viewBox="0 0 28 67"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7931 3.68377C14.2714 3.68377 11.8599 4.71784 10.1216 6.54465L6.5703 10.2766C4.94105 11.9887 4.03241 14.2617 4.03241 16.6251V53.4147C4.03241 58.501 8.15561 62.6242 13.2418 62.6242H27.9769V66.3079H13.2418C6.12112 66.3079 0.348633 60.5355 0.348633 53.4147V16.6251C0.348633 13.3163 1.62074 10.1341 3.90169 7.73714L7.45295 4.00522C9.88667 1.44769 13.2627 0 16.7931 0H27.9769V3.68377H16.7931Z"
            fill="#775332"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4688 63.975L17.0735 53.1539L20.4631 54.5963L15.8584 65.4174L12.4688 63.975Z"
            fill="#775332"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.03382 53.5979L11.7038 46.6252L13.8584 49.6132L4.18837 56.5859L2.03382 53.5979Z"
            fill="#775332"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.4508 3.65333C17.3646 3.65333 13.2414 7.74246 13.2414 12.7867V42.47C13.2414 47.5142 17.3646 51.6033 22.4508 51.6033H27.9765V55.2566H22.4508C15.3301 55.2566 9.55762 49.5318 9.55762 42.47V12.7867C9.55762 5.72478 15.3301 0 22.4508 0H27.9765V3.65333H22.4508Z"
            fill="#775332"
          />
        </svg>
      </div>
      <div className="w-fit flex flex-col items-start gap-[7.368px]">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M160.977 3.68377H0.976562V0H160.977V3.68377Z"
          fill="#775332"
          className="w-[102%] border-t-[3.68px] border-[#775332]"
        />
        <p
          className={`flex items-center justify-start ${poppins.className} text-[#775332] text-[22.103px] font-bold leading-[33.154px] break-keep w-max`}
        >
          {label}
        </p>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M160.977 4.1026H0.976562V0.418823H160.977V4.1026Z"
          fill="#775332"
          className="w-[102%] border-t-[3.68px] border-[#775332]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M160.977 4.15399H0.976562V0.470215H160.977V4.15399Z"
          fill="#775332"
          className="w-[102%] border-t-[3.68px] border-[#775332]"
        />
      </div>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="67"
          viewBox="0 0 29 67"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.161 3.68377C14.6827 3.68377 17.0942 4.71784 18.8325 6.54465L22.3838 10.2766C24.013 11.9887 24.9217 14.2617 24.9217 16.6251V53.4147C24.9217 58.501 20.7985 62.6242 15.7123 62.6242H0.977162V66.3079H15.7123C22.833 66.3079 28.6055 60.5355 28.6055 53.4147V16.6251C28.6055 13.3163 27.3334 10.1341 25.0524 7.73714L21.5012 4.00522C19.0674 1.44769 15.6914 0 12.161 0H0.977162V3.68377H12.161Z"
            fill="#775332"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.4863 63.9751L11.8816 53.1541L8.49197 54.5965L13.0967 65.4175L16.4863 63.9751Z"
            fill="#775332"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.9203 53.5979L17.2503 46.6252L15.0957 49.6132L24.7657 56.5859L26.9203 53.5979Z"
            fill="#775332"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.50327 3.65333C11.5895 3.65333 15.7127 7.74246 15.7127 12.7867V42.47C15.7127 47.5142 11.5895 51.6033 6.50327 51.6033H0.977612V55.2566H6.50327C13.624 55.2566 19.3965 49.5318 19.3965 42.47V12.7867C19.3965 5.72478 13.624 0 6.50327 0H0.977612V3.65333H6.50327Z"
            fill="#775332"
          />
        </svg>
      </div>
    </button>
  );
};

export default QuizResponseButton;
