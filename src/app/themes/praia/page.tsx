import OnboardingBG from "@/../public/images/themes/praia-bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex h-full items-center justify-center px-4"
      style={{
        backgroundImage: `url(${OnboardingBG.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-between w-full h-full min-h-[95vh] pt-24 pb-4">
        <div className="">
          <h2 className="flex justify-center items-center text-[#775332] text-[17.25px] font-semibold leading-[23px] tracking-[-0.104px]">
            tema
          </h2>
          <h1 className="flex justify-center items-center h-[65px] text-[#775332] text-[62.931px] font-medium leading-[57.267px] tracking-[-3.578px]">
            praia
          </h1>
        </div>
        <div className="">
          <Link href="/themes/praia/play">
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
