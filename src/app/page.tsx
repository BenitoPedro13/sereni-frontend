import OnboardingBG from "@/../public/images/onboarding-gb.png";
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
      <div className="flex flex-col items-center justify-between w-full h-full min-h-[85vh] pt-24 pb-10">
        <div className="">
          <h1 className="flex justify-center items-center h-[65px] text-[#FFF7ED] text-[62.931px] font-medium leading-[57.267px] tracking-[-3.578px]">
            sereni
          </h1>
          <h2 className="flex justify-center items-center text-[#FFF7ED] text-[17.25px] font-semibold leading-[23px] tracking-[-0.104px]">
            atenção plena
          </h2>
        </div>
        <div className="">
          <Link href="/home">
            <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#14532D]">
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
