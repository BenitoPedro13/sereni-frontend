import Link from "next/link";
import BeachThemeStep from "@/../public/images/themes/beach/theme-step-bg.png";

export default function Home() {
  return (
    <main
      className={`flex w-full h-full items-center justify-center rounded-3xl overflow-hidden`}
    >
      <div
        style={{
          backgroundImage: `url(${BeachThemeStep.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`relative flex-1 flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-48px)] px-4 pt-24 pb-4 self-stretch after:backdrop-blur-[28.25px]  after:bg-opacity-20 after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0`}
      >
        <div className="relative z-[1] w-full space-y-24">
          <h3 className="w-full text-[#F0FDF4] text-center text-[30px] font-medium leading-[36px] tracking-[-0.225px]">
            {"ótimo, agora olhe pra imagem com calma e serenidade :)"}
          </h3>
        </div>
        <div className="relative z-[1]">
          <Link href="/themes/praia/play">
            <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#775332]">
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
