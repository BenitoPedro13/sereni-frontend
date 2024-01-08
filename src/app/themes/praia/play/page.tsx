"use client";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);
  const [scope, animate] = useAnimate();
  const [isViewportSmall, setIsViewportSmall] = useState(false);

  const router = useRouter();

  const viewportHeight = window.innerHeight;

  // Calculate the proportional values based on the viewport height
  const proportionalWidth = (viewportHeight * 150) / 830; // Adjust as needed
  const proportionalHeight = (viewportHeight * 150) / 830; // Adjust as needed
  const proportionalAnimateValue = (viewportHeight * 254) / 830; // Adjust as needed

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timoutId: NodeJS.Timeout;

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

        setAnimationStarted(true);
        setAnimationCount(animationCount + 1);
        startAnimation();
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

          if (animationCount > 9) {
            return;
          }

          setAnimationStarted(true);
          setAnimationCount(animationCount + 1);
          startAnimation();
        } else {
          const startAnimation = async () => {
            await animate(
              scope.current,
              {
                width: isViewportSmall ? "154px" : "227px",
                height: isViewportSmall ? "154px" : "227px",
              },
              { duration: 2, ease: "easeInOut" }
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
  }, [
    animate,
    animationStarted,
    scope,
    animationCount,
    router,
    isViewportSmall,
    proportionalAnimateValue,
  ]);

  return (
    <main
      className={`flex w-full h-full items-center justify-center rounded-3xl overflow-hidden`}
    >
      <div
        className={`duration-500 flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-48px)] px-4 pt-24 pb-4`}
      >
        <div className="mb-4 w-full space-y-24">
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
        <div className="mt-4">
          <Link href={`/themes/praia/`}>
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
