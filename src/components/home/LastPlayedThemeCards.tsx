import React from "react";

import BeachThemeCardBg from "@/../public/images/themes/beach/card-cover.png";
import DefaultMemoji from "@/../public/images/users/default-memoji.png";

const LastPlayedThemeCards = () => {
  return (
    <div className="flex flex-col items-start w-[358px] h-[358px] rounded-xl overflow-hidden border border-[#EAECF0] bg-white shadow-sm">
      <div
        style={{
          backgroundImage: `url(${BeachThemeCardBg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative flex-1 flex flex-col w-full h-full items-start justify-between p-7 self-stretch after:backdrop-blur-[2px] after:bg-black after:bg-opacity-20 after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0"
      >
        <div className="relative z-[1] flex flex-col items-start pt-2 gap-[21px] self-stretch">
          <div className="h-[3px] self-stretch bg-[#5E5E5E] relative">
            <div className="w-[230px] h-[3px] self-stretch bg-[#F0FDF4]"></div>
            <div
              style={{
                backgroundImage: `url(${DefaultMemoji.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-[50px] h-[50px] flex-shrink-0 absolute top-[-25px] right-[75px]"
            ></div>
            <p className="text-[30px] leading-10 tracking-[-0.15px] absolute right-[-15px] top-[-17px]">
              🏆
            </p>
          </div>
        </div>
        <div className="relative z-[1] flex flex-col items-start gap-[11px] self-stretch">
          <div className="flex flex-col items-start self-stretch">
            <p className="w-full text-left text-white text-2xl font-semibold tracking-[-0.744px] mb-0">
              praia 🏖️
            </p>
            <p className="w-full text-left text-white text-base font-bold leading-7 tracking-[-0.744px] mb-0">
              10 📷
            </p>
          </div>
          <button className="flex items-center justify-center w-fit h-fit py-2 px-4 rounded-md gap-2 bg-[#14532D]">
            <div className="w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.3335 2L12.6668 8L3.3335 14V2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium leading-6">jogar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastPlayedThemeCards;
