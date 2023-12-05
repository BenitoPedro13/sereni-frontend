"use client";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`flex w-full h-full items-center justify-center rounded-3xl overflow-hidden`}
    >
      <div
        className={`duration-500 flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-48px)] px-4 pt-24 pb-4`}
      >
        <div className="flex-1 flex flex-col items-center justify-center w-full h-full gap-3">
          <h3 className="w-[328px] text-[#775332] text-center text-[62.931px] font-medium leading-[57.267px] tracking-[-3.578px]">
            Tempo Esgotado!
          </h3>
          <p className="w-[182px] text-[#775332] text-center text-base">
            Agora selecione o que você não viu
          </p>
        </div>
        <div className="">
          <Link href={`/themes/praia/`}>
            <button className="inline-flex items-center justify-center w-fit h-fit py-4 px-8 rounded-xl gap-5 bg-[#775332]">
              <p className="text-white text-2xl font-medium leading-[48px]">
                continuar
              </p>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
