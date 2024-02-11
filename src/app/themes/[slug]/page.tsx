"use client";

import OnboardingBG from "@/../public/images/themes/praia-bg.png";
import useThemesStore, { baseApiUrl } from "@/stores/Themes";
import Link from "next/link";
import { useEffect } from "react";

export default function Home({ params }: { params: { slug: string } }) {
  const data = useThemesStore((store) => store.data);
  const setActiveTheme = useThemesStore((store) => store.setActiveTheme);
  const setActiveThemeStep = useThemesStore(
    (store) => store.setActiveThemeStep
  );
  // const activeTheme = useThemesStore((store) => store.activeTheme);
  const theme = data.find((item) => item.slug === params.slug);

  const themeStep = theme?.themeSteps[0];

  if (!theme || !themeStep) {
    return null;
  }

  setActiveTheme(theme.slug);
  setActiveThemeStep(themeStep.id);

  return (
    <main
      className="flex h-full items-center justify-center px-4"
      style={{
        backgroundImage: `url(${theme?.initialThemeScreenBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-48px)] pt-24 pb-4">
        <div className="">
          <h2 className="flex justify-center items-center text-[#775332] text-[17.25px] font-semibold leading-[23px] tracking-[-0.104px]">
            tema
          </h2>
          <h1 className="flex justify-center items-center h-[65px] text-[#775332] text-[62.931px] font-medium leading-[57.267px] tracking-[-3.578px]">
            {theme?.name}
          </h1>
        </div>
        <div className="">
          <Link href={`/themes/${theme?.slug}/${themeStep?.id}/play`}>
            <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#775332]">
              <p className="text-white text-2xl font-medium leading-[48px]">
                começar
              </p>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
