import LastPlayedThemeCards from "@/components/home/LastPlayedThemeCards";
import HomeSection from "@/components/home/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sereni | Início",
  description: "Ultimos temas que você jogou",
};

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-4 pt-11 pb-12">
      <div className="flex flex-col items-start w-full max-w-[390px] gap-8">
        <div className="flex flex-col items-center gap-6 self-stretch">
          <h1 className="w-full text-left text-[#003509] text-2xl font-semibold tracking-[-0.144px]">
            🏡 olá, ingrid!
          </h1>
        </div>
        <HomeSection title="recentes" subtitle="ultimos temas que você jogou">
          <LastPlayedThemeCards />
          <LastPlayedThemeCards />
          <LastPlayedThemeCards />
        </HomeSection>
      </div>
    </main>
  );
}
