"use client";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: { width: 254, heigh: 254 },
  final: { width: 368, heigh: 368 },
};

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCount, setAnimationCount] = useState(5);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timoutId: NodeJS.Timeout;

    if (animationCount === 0) {
      timoutId = setInterval(() => {
        const startAnimation = async () => {
          console.log("animationStarted");
          await animate(
            scope.current,
            {
              width: "368px",
              height: "368px",
            },
            { duration: 2, ease: "linear" }
          );
        };

        setAnimationStarted(true);
        setAnimationCount(animationCount + 1);
        startAnimation();
      }, 1000);
    } else if (animationCount > 10) {
      return;
    } else {
      intervalId = setInterval(() => {
        console.log("interval", animationCount);
        if (animationStarted === false) {
          const startAnimation = async () => {
            console.log("animationStarted");
            await animate(
              scope.current,
              {
                width: "368px",
                height: "368px",
              },
              { duration: 2, ease: "linear" }
            );
          };

          if (animationCount > 9) {
            return;
          }

          setAnimationStarted(true);
          setAnimationCount(animationCount + 1);
          startAnimation();
        } else {
          const startAnimation = async () => {
            console.log("animationStarted");
            await animate(
              scope.current,
              {
                width: "227px",
                height: "227px",
              },
              { duration: 2, ease: "linear" }
            );
          };

          if (animationCount > 9) {
            return;
          }

          setAnimationStarted(false);
          setAnimationCount(animationCount + 1);
          startAnimation();
        }
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timoutId);
    };
  }, [animate, animationStarted, scope, animationCount]);

  return (
    <main className="flex h-full items-center justify-center px-4">
      <div className="flex flex-col items-center justify-between w-full h-full min-h-[95vh] px-4 pt-6">
        <div className="w-full space-y-24">
          <h3 className="w-full text-[#775332] text-center text-[30px] font-medium leading-[36px] tracking-[-0.225px]">
            antes de começar, respire{" "}
            <span className="text-[#365314]">bem</span> fundo.
          </h3>
          <div
            className={`flex items-center justify-center transition-all duration-500 ${
              animationCount > 9 ? "opacity-0" : "opacity-100 w-auto h-auto"
            }`}
          >
            {" "}
            <p className="w-full text-[#775332] text-center text-[19.362px] font-medium leading-[23.234px] tracking-[-0.145px]">
              {animationStarted
                ? "puxe ar com o nariz"
                : "assopre ar com a boca"}
            </p>
          </div>
        </div>

        <div
          className={`flex items-center justify-center transition-all duration-500 ${
            animationCount > 9
              ? "opacity-0"
              : "opacity-100 w-auto h-auto min-w-[254px] min-h-[254px]"
          }`}
        >
          <div
            ref={scope}
            className={`flex items-center justify-center ${
              animationCount > 9
                ? "opacity-0 w-0 h-0"
                : "opacity-100 w-auto h-auto min-w-[254px] min-h-[254px]"
            } bg-[#B6D1C1] rounded-full`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              className={`transition-opacity ${
                animationCount > 9
                  ? "opacity-0"
                  : "opacity-100 w-auto h-auto min-w-[200px] min-h-[200px]"
              }`}
            >
              <circle cx="100" cy="100" r="100" fill="#166534" />
            </svg>
          </div>
        </div>
        <div className="">
          <Link href="/themes/praia">
            <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#94A3B8]">
              <p className="text-white text-2xl font-medium leading-[48px]">
                jogar
              </p>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
