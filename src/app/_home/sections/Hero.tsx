"use client";

import Link from "next/link";
import { useWaitlistModal } from "@/context/WaitlistContext";

export default function Hero() {
  const { openWaitlistModal } = useWaitlistModal();

  return (
    <section
      className="relative w-full min-h-[88svh] overflow-hidden text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.2)
          ),
          url('/images/hero-image.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl w-[40rem] text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-[7rem]">
            Africa Boldest Founders{" "}
            <span className="text-primary">Start Here.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-light leading-7 text-white/90 sm:text-lg lg:text-xl">
            Founders Africa backs the next generation of African entrepreneurs
            through transformative fellowship programmes and the continent&apos;s leading annual summit.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#programmes"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-black cursor-pointer hover:brightness-125 sm:px-10 sm:py-4 sm:text-lg"
            >
              Explore Programmes
            </Link>
            <button
              onClick={openWaitlistModal}
              className="rounded-xl border-2 border-white px-6 py-3.5 text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,1)] sm:px-10 sm:py-4 sm:text-lg"
            >
              Register For Summit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

