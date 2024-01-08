"use client";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import sereniBG from "@/../public/svgs/backgrounds/sereni-flowers.svg";
import Image from "next/image";

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [isViewportSmall, setIsViewportSmall] = useState(false);

  const router = useRouter();
  let viewportHeight = useRef(0);

  // Calculate the proportional values based on the viewport height
  let proportionalWidth: number = (viewportHeight.current * 150) / 830; // Adjust as needed
  let proportionalHeight: number = (viewportHeight.current * 150) / 830; // Adjust as needed
  let proportionalAnimateValue: number = (viewportHeight.current * 254) / 830; // Adjust as needed

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timoutId: NodeJS.Timeout;

    if (!window) {
      viewportHeight.current = 0;
    } else {
      viewportHeight.current = window.innerHeight;
    }

    if (!window) {
      return;
    }

    const handleViewportChange = () => {
      setIsViewportSmall(window.innerHeight < 830);
    };

    window.addEventListener("resize", handleViewportChange);
    handleViewportChange();

    return () => {
      window.removeEventListener("resize", handleViewportChange);
      clearInterval(intervalId);
      clearTimeout(timoutId);
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timoutId: NodeJS.Timeout;

    if (animationCount > 9) {
      return router.push("/themes/praia/start");
    }

    if (animationCount === 0) {
      timoutId = setInterval(() => {
        const startAnimation = async () => {
          await animate(
            scope.current,
            {
              width: isViewportSmall
                ? `${proportionalAnimateValue}px`
                : "368px",
              height: isViewportSmall
                ? `${proportionalAnimateValue}px`
                : "368px",
            },
            { duration: 1.75, ease: "easeInOut" }
          );
        };
        const startAnimation2 = async () => {
          await animate2(
            scope2.current,
            {
              background: "#166534",
            },
            { duration: 1.75, ease: "easeInOut" }
          );
        };

        setAnimationStarted(true);
        setAnimationCount(animationCount + 1);
        startAnimation();
        startAnimation2();
      }, 1000);
    } else {
      intervalId = setInterval(() => {
        if (animationStarted === false) {
          const startAnimation = async () => {
            await animate(
              scope.current,
              {
                width: isViewportSmall
                  ? `${proportionalAnimateValue}px`
                  : "368px",
                height: isViewportSmall
                  ? `${proportionalAnimateValue}px`
                  : "368px",
              },
              { duration: 1.75, ease: "easeInOut" }
            );
          };

          const startAnimation2 = async () => {
            await animate2(
              scope2.current,
              {
                background: "#166534",
              },
              { duration: 1.75, ease: "easeInOut" }
            );
          };

          if (animationCount > 9) {
            return;
          }

          setAnimationStarted(true);
          setAnimationCount(animationCount + 1);
          startAnimation();
          startAnimation2();
        } else {
          const startAnimation = async () => {
            await animate(
              scope.current,
              {
                width: isViewportSmall ? "154px" : "227px",
                height: isViewportSmall ? "154px" : "227px",
              },
              { duration: 1.75, ease: "easeInOut" }
            );
          };
          const startAnimation2 = async () => {
            await animate2(
              scope2.current,
              {
                background: "#94A3B8",
              },
              { duration: 1.75, ease: "linear" }
            );
          };

          if (animationCount > 9) {
            return;
          }

          setAnimationStarted(false);
          setAnimationCount(animationCount + 1);
          startAnimation();
          startAnimation2();
        }
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timoutId);
    };
  }, [
    animate,
    animate2,
    animationStarted,
    scope,
    scope2,
    animationCount,
    router,
    isViewportSmall,
    proportionalAnimateValue,
  ]);

  return (
    <main
      className={`relative flex w-full h-full items-center justify-center rounded-3xl overflow-hidden`}
      style={{
        backgroundImage: sereniBG,
      }}
    >
      <div className="absolute h-full w-full">
        <Image
          src={sereniBG}
          alt="Sereni Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className={`duration-500 flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-48px)] px-4 pt-24 pb-4`}
      >
        <div className="mb-4 w-full space-y-24">
          <h3 className="w-full text-[#775332] text-center text-[30px] font-medium leading-[36px] tracking-[-0.225px]">
            antes de começar, respire{" "}
            <span className="text-[#365314]">bem</span> fundo.
          </h3>
        </div>
        <div
          className={`flex items-center justify-center transition-all duration-500 ${
            animationCount > 9
              ? "opacity-0"
              : "opacity-100 w-auto h-auto min-w-[244px] min-h-[244px]"
          }`}
        >
          <div
            ref={scope}
            className={`flex items-center justify-center ${
              animationCount > 9
                ? "opacity-0 w-0 h-0"
                : `opacity-100 w-auto h-auto min-w-[${proportionalAnimateValue}px] min-h-[${proportionalAnimateValue}px]`
            } bg-[#B6D1C1] rounded-full`}
            style={{
              width: `${proportionalWidth}px`,
              height: `${proportionalHeight}px`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={proportionalWidth}
              height={proportionalHeight}
              viewBox={`0 0 ${proportionalWidth} ${proportionalHeight}`}
              fill="none"
              className={`transition-opacity ${
                animationCount > 9
                  ? "opacity-0"
                  : `opacity-100 w-auto h-auto min-w-[${proportionalWidth}px] min-h-[${proportionalHeight}px] max-w-[${proportionalHeight}px] max-h-[${proportionalHeight}px]`
              }`}
            >
              <circle
                cx={proportionalWidth / 2}
                cy={proportionalHeight / 2}
                r={
                  proportionalWidth < proportionalHeight
                    ? proportionalWidth / 2
                    : proportionalHeight / 2
                } // Use the smaller of the two values to maintain a circle
                fill="#166534"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center gap-14 mt-4">
          <div
            className={`flex items-center justify-center transition-all duration-500 ${
              animationCount > 9 ? "opacity-0" : "opacity-100 w-auto h-auto"
            }`}
          >
            {" "}
            <motion.p
              key={animationStarted ? "nariz" : "boca"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-full text-[#775332] text-center text-[30px] italic leading-[36px] tracking-[-0.225px]"
            >
              {animationCount === 0 ? (
                <p
                  style={{
                    display: "block",
                    content: "",
                    height: "36px",
                    width: "262px",
                  }}
                >
                  {" "}
                </p>
              ) : animationStarted ? (
                <>
                  puxe ar <span className="font-bold">com o nariz</span>
                </>
              ) : (
                <>
                  assopre ar <span className="font-bold">com a boca</span>
                </>
              )}
            </motion.p>
          </div>
          <Link href={`/themes/praia/`}>
            <button
              ref={scope2}
              className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#94A3B8]"
            >
              <p className="text-white text-2xl font-medium leading-[48px]">
                respire
              </p>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
