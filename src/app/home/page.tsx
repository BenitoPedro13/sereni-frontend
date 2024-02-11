"use client";

import LastPlayedThemeCards from "@/components/home/LastPlayedThemeCards";
import HomeSection from "@/components/home/Section";
import useThemesStore from "@/stores/Themes";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Sereni | Início",
//   description: "Ultimos temas que você jogou",
// };

export default function Home() {
  const data = useThemesStore((store) => store.data);

  return (
    <main className="flex h-full w-full justify-center px-4 pt-11 pb-12">
      <div className="flex flex-1 flex-col items-start w-full max-w-[390px] h-full gap-8 self-stretch">
        <div className="flex flex-col items-center gap-6 self-stretch">
          <h1 className="w-full text-left text-[#003509] text-2xl font-semibold tracking-[-0.144px]">
            🏡 olá, ingrid!
          </h1>
        </div>
        <HomeSection
          title="recentes"
          subtitle="ultimos temas que você jogou"
          titleIcon={
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="_24x24_On_Light_Recent"
                data-name="24x24/On Light/Recent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect id="view-box" width="24" height="24" fill="none" />
                <path
                  id="Shape"
                  d="M9.682,18.75a.75.75,0,0,1,.75-.75,8.25,8.25,0,1,0-6.189-2.795V12.568a.75.75,0,0,1,1.5,0v4.243a.75.75,0,0,1-.751.75H.75a.75.75,0,0,1,0-1.5H3a9.75,9.75,0,1,1,7.433,3.44A.75.75,0,0,1,9.682,18.75Zm2.875-4.814L9.9,11.281a.754.754,0,0,1-.22-.531V5.55a.75.75,0,1,1,1.5,0v4.889l2.436,2.436a.75.75,0,1,1-1.061,1.06Z"
                  transform="translate(1.568 2.25)"
                  stroke="black"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          }
        >
          {data.map((item) => (
            <LastPlayedThemeCards key={item.id} theme={item} />
          ))}
        </HomeSection>
        {/* <HomeSection
          title="Meus favoritos"
          subtitle="seus temas favoritos"
          titleIcon={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.4201 4.57999C19.9184 4.07656 19.3223 3.67713 18.6659 3.40458C18.0095 3.13203 17.3058 2.99173 16.5951 2.99173C15.8844 2.99173 15.1806 3.13203 14.5243 3.40458C13.8679 3.67713 13.2718 4.07656 12.7701 4.57999L12.0001 5.35999L11.2301 4.57999C10.7284 4.07656 10.1323 3.67713 9.47591 3.40458C8.81953 3.13203 8.1158 2.99173 7.40509 2.99173C6.69437 2.99173 5.99065 3.13203 5.33427 3.40458C4.67789 3.67713 4.08176 4.07656 3.58009 4.57999C1.46009 6.69999 1.33009 10.28 4.00009 13L12.0001 21L20.0001 13C22.6701 10.28 22.5401 6.69999 20.4201 4.57999Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          }
        >
          <LastPlayedThemeCards />
          <LastPlayedThemeCards />
          <LastPlayedThemeCards />
        </HomeSection> */}
      </div>
    </main>
  );
}
