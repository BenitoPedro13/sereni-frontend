"use client";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuizResponseButton from "@/components/quiz/QuizResponseButton";

export default function Home() {
  const [remainingTries, setRemainingTries] = useState(3);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleQuizButtonClick = (answer: boolean) => {
    if (!answer) {
      setRemainingTries((prevState) => {
        console.log("Tente novamente!");
        if (prevState > 0) {
          return prevState - 1;
        } else {
          return 0;
        }
      });
    } else {
      console.log("Parabéns você acertou!");
      setSuccess(true);
    }
  };

  return (
    <main
      className={`flex w-full h-full items-center justify-center rounded-3xl overflow-hidden`}
    >
      <div
        className={`duration-500 flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-48px)] px-4 pt-24 pb-4`}
      >
        <div className=" flex flex-col items-center justify-start w-full h-full gap-3">
          <h3 className="w-[373px] text-[#775332] text-center text-[51px] font-medium leading-[53.371px] tracking-[-2px]">
            Clique no que você não viu
          </h3>
          <p className="w-[235px] text-[#775332] text-center font-semibold text-lg">
            Selecione o que você não viu nas imagens
          </p>
        </div>
        <div className="flex justify-center w-full flex-wrap gap-3">
          <QuizResponseButton
            handleClick={handleQuizButtonClick}
            label={"Boné 🧢"}
            answer
          />
          <QuizResponseButton
            handleClick={handleQuizButtonClick}
            label={"Guarda-Sol ⛱️"}
          />
          <QuizResponseButton
            handleClick={handleQuizButtonClick}
            label={"Água 💧"}
          />
          <QuizResponseButton
            handleClick={handleQuizButtonClick}
            label={"Areia 🏝️"}
          />
        </div>
        <div className="">
          <Link href={`/themes/praia/`}>
            <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#775332]">
              <p className="text-white text-2xl font-medium leading-[48px]">
                continuar
              </p>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
