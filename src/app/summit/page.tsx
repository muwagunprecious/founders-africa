import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founders Summit | Founders Africa",
  description:
    "The premier annual gathering connecting Africa's boldest tech founders, investors, and ecosystem leaders.",
};

export default function SummitPage() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden border-b border-black/10 bg-black text-white">
        <div className="mx-auto flex min-h-[35rem] w-full max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Annual Gathering
            </p>

            <h1 className="text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Founders Summit 2026
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              Where the Summit is a moment, the fellowship is a process. The Founders Summit brings together high-growth entrepreneurs, operators, and investors driving Africa&apos;s digital future.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="cursor-pointer rounded-xl bg-primary px-8 py-4 text-base font-medium text-black hover:brightness-110">
                Register For Summit
              </button>
              <Link
                href="/program/tech-incubation"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-base font-medium text-white/90 backdrop-blur-sm hover:bg-white/10"
              >
                Explore Fellowship Tracks
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
                About The Summit
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                Connecting the builders of Africa&apos;s tech ecosystem.
              </h2>
              <p className="mt-5 text-base leading-7 text-neutral-500">
                The Founders Summit is the continent&apos;s premier annual gathering for high-growth entrepreneurs and the ecosystem that backs them. Featuring keynote addresses, high-stakes pitch sessions, and deep-dive masterclasses, the summit is where deals get done and partnerships are forged.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-[#f6faea] p-6">
                <p className="text-3xl font-semibold text-black">1,000+</p>
                <p className="mt-1 text-sm font-medium text-black">Attendees</p>
                <p className="mt-2 text-xs leading-5 text-neutral-500">Founders, operators, policy makers &amp; investors.</p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-[#f6faea] p-6">
                <p className="text-3xl font-semibold text-black">30+</p>
                <p className="mt-1 text-sm font-medium text-black">Countries</p>
                <p className="mt-2 text-xs leading-5 text-neutral-500">Pan-African representation across key tech hubs.</p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-[#f6faea] p-6">
                <p className="text-3xl font-semibold text-black">50+</p>
                <p className="mt-1 text-sm font-medium text-black">Speakers</p>
                <p className="mt-2 text-xs leading-5 text-neutral-500">World-class founders and venture partners.</p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-[#f6faea] p-6">
                <p className="text-3xl font-semibold text-black">4 Months</p>
                <p className="mt-1 text-sm font-medium text-black">Follow-on Fellowship</p>
                <p className="mt-2 text-xs leading-5 text-neutral-500">Transitioning summit moments into structured growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
