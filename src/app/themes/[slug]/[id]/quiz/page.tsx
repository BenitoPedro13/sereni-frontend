"use client";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuizResponseButton from "@/components/quiz/QuizResponseButton";
import Image from "next/image";

import SuccessMemoji from "@/../public/images/success-quiz.png";
import FailMemoji from "@/../public/images/fail-quiz.png";
import useThemesStore from "@/stores/Themes";

export default function Home({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const [remainingTries, setRemainingTries] = useState(3);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const activeTheme = useThemesStore((store) => store.activeTheme);
  const activeThemeStep = useThemesStore((store) => store.activeThemeStep);

  const setActiveTheme = useThemesStore((store) => store.setActiveTheme);
  const setActiveThemeStep = useThemesStore(
    (store) => store.setActiveThemeStep
  );

  const isLastThemeStep =
    activeTheme?.themeSteps[activeTheme?.themeSteps.length - 1].id ===
    activeThemeStep?.id;

  let nextThemeStepId: number | null = null;

  if (!isLastThemeStep && activeTheme !== null) {
    nextThemeStepId =
      activeTheme?.themeSteps[
        activeTheme?.themeSteps.findIndex(
          (item) => item.id === activeThemeStep?.id
        ) + 1
      ].id;
  }

  const nextUrl = isLastThemeStep
    ? `/home`
    : `/themes/${activeTheme?.slug}/${nextThemeStepId}/start`;

  const router = useRouter();

  const handleQuizButtonClick = (answer: boolean, label: string) => {
    if (!answer) {
      setRemainingTries((prevState) => {
        console.log("Tente novamente!");
        if (prevState > 0) {
          return prevState - 1;
        } else {
          return 0;
        }
      });
      setSuccess(false);
      setSelectedAnswer(label);
    } else {
      console.log("Parabéns você acertou!");
      setSuccess(true);
      setSelectedAnswer(label);
    }
  };

  useEffect(() => {
    console.log("success", success);
    console.log("selectedAnswer", selectedAnswer);
  }, [success, selectedAnswer]);

  return (
    <main
      className={`relative flex w-full h-full items-center justify-center rounded-3xl overflow-hidden`}
    >
      <div
        className={`duration-500 flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-48px)] px-4 pt-24 pb-4`}
      >
        {success === true ? (
          <div className="flex flex-col justify-between items-center min-h-[calc(100vh-160px)]">
            <div className="flex flex-col justify-start">
              <div className="flex flex-col items-center justify-start w-full h-full gap-3">
                <h3 className="w-[368px] text-[#775332] text-center text-[51px] font-medium leading-[53.371px] tracking-[-2px] mb-5">
                  Parabéns você acertou!
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center w-full flex-wrap gap-5">
                <Image src={SuccessMemoji} alt="Parabéns você acertou!" />
                <QuizResponseButton
                  // handleClick={handleQuizButtonClick}
                  label={selectedAnswer ?? ""}
                  // answer
                />
                <p className="w-[342px] text-[#775332] text-center text-lg font-semibold">
                  não está presente na foto
                </p>
              </div>
            </div>
            <Link
              href={nextUrl}
              onClick={(e) => {
                // e.preventDefault();
                if (isLastThemeStep) {
                  setActiveTheme("reiniciar tema");
                  setActiveThemeStep(Infinity);
                } else {
                  console.log(nextThemeStepId);
                  setActiveThemeStep(nextThemeStepId ?? +params.id);
                }
                e.stopPropagation();
                setSelectedAnswer(null);
                setSuccess(null);
              }}
            >
              <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#166534]">
                <p className="text-white text-2xl font-medium leading-[48px]">
                  continuar
                </p>
              </button>
            </Link>
          </div>
        ) : success === false ? (
          <div className="flex flex-col justify-between items-center min-h-[calc(100vh-160px)]">
            <div className="flex flex-col justify-start">
              <div className="flex flex-col items-center justify-start w-full h-full gap-3">
                <h3 className="w-[368px] text-[#775332] text-center text-[51px] font-medium leading-[53.371px] tracking-[-2px] mb-5">
                  Tente novamente!
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center w-full flex-wrap gap-5">
                <Image src={FailMemoji} alt="Tente novamente!" />
                <QuizResponseButton
                  // handleClick={handleQuizButtonClick}
                  label={selectedAnswer ?? ""}
                  // answer
                />
                <p className="w-[342px] text-[#775332] text-center text-lg font-semibold">
                  está presente na foto
                </p>
              </div>
            </div>
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedAnswer(null);
                setSuccess(null);
              }}
            >
              <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#166534]">
                <p className="text-white text-2xl font-medium leading-[48px]">
                  continuar
                </p>
              </button>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <div className=" flex flex-col items-center justify-start w-full h-full gap-3">
              <h3 className="w-[373px] text-[#775332] text-center text-[51px] font-medium leading-[53.371px] tracking-[-2px]">
                Clique no que você não viu
              </h3>
              <p className="w-[235px] text-[#775332] text-center font-semibold text-lg">
                Selecione o que você não viu nas imagens
              </p>
            </div>
            <div className="flex justify-center w-full flex-wrap gap-3">
              {activeThemeStep?.answers.map((item) => (
                <QuizResponseButton
                  key={item.id}
                  handleClick={handleQuizButtonClick}
                  label={item.word}
                  answer={item.correct}
                />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-2 mb-[38px]">
                <p className="text-[#775332] text-center text-[33.819px] font-medium, leading-[35.391px] tracking-[-1.326px] m-0">
                  Tentativas Restantes
                </p>
                <p className="text-[#775332] text-center text-[33.819px] font-medium, leading-[35.391px] tracking-[-1.326px] m-0">
                  {remainingTries}/3
                </p>
              </div>
              <Link href="#">
                <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#166534]">
                  <p className="text-white text-2xl font-medium leading-[48px]">
                    continuar
                  </p>
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
