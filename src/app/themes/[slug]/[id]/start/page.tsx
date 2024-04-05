"use client";
import BeachThemeStep from "@/../public/images/themes/beach/theme-step-bg.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useThemesStore from "@/stores/Themes";

const variants = {
  hidden: { width: 0 },
  enter: { width: "100%" },
};

export default function Home() {
  const [play, setPlay] = useState(false);
  const router = useRouter();
  const activeTheme = useThemesStore((store) => store.activeTheme);
  const activeThemeStep = useThemesStore((store) => store.activeThemeStep);

  return (
    <main
      className={`flex w-full h-full items-center justify-center rounded-3xl overflow-hidden`}
    >
      <div
        style={{
          backgroundImage: `url(${activeThemeStep?.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`transition-all duration-500 relative flex-1 flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-48px)] px-4 pt-24 pb-4 self-stretch ${
          play ? "after:backdrop-blur-[0px]" : "after:backdrop-blur-[28.25px]"
        } after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0`}
      >
        <div className="relative z-[1] w-full">
          <h3
            className={`transition-all duration-500 ${
              play ? "opacity-0 h-0" : "opacity-100"
            } w-full text-[#F0FDF4] text-center text-[30px] font-medium leading-[36px] tracking-[-0.225px]`}
          >
            {"ótimo, agora olhe pra imagem com calma e serenidade :)"}
          </h3>
          <div
            className={`transition-all duration-500 ${
              play ? "opacity-100" : "opacity-0"
            } h-[3px] self-stretch bg-[#5E5E5E] relative`}
          >
            {play && (
              <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear", duration: 15, delay: 0.5 }}
                onAnimationComplete={() =>
                  router.push(
                    `/themes/${activeTheme?.slug}/${activeThemeStep?.id}/end`
                  )
                }
                className="h-[3px] self-stretch bg-[#F0FDF4]"
              ></motion.div>
            )}
          </div>
        </div>
        <div className="relative z-[1]">
          <button
            onClick={() => setPlay(true)}
            className={`transition-all duration-500 ${
              play ? "opacity-0" : "opacity-100"
            } inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#775332]`}
          >
            <p className="text-white text-2xl font-medium leading-[48px]">
              jogar
            </p>
          </button>
        </div>
      </div>
    </main>
  );
}
