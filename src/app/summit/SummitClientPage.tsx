"use client";

import Image from "next/image";
import { HiMapPin, HiUsers, HiCheck } from "react-icons/hi2";
import { useWaitlistModal } from "@/context/WaitlistContext";

export default function SummitClientPage() {
  const { openWaitlistModal } = useWaitlistModal();

  return (
    <main className="w-full bg-white text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[550px] w-full overflow-hidden bg-black text-white py-24 px-6 sm:px-10 lg:px-16 flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/summit-hero-image.png"
            alt="Founders Africa Summit audience"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Founders Africa <span className="text-primary">Summit 2026</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            Three days. 2,000+ founders, investors, and ecosystem builders. The multi-island event for African tech entrepreneurs.
          </p>

          {/* CTA & Deadline */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={openWaitlistModal}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-black transition-all hover:bg-primary/90 hover:scale-[1.02] cursor-pointer"
            >
              Get Your Ticket
            </button>
            <span className="text-sm font-medium text-white/90">
              Deadline: <span className="font-semibold">31st August 2026</span>
            </span>
          </div>

          {/* Location & Attendance Metadata */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <HiMapPin className="h-4 w-4 text-primary" />
              <span>Kigali Convention Centre, Rwanda</span>
            </div>
            <div className="flex items-center gap-2">
              <HiUsers className="h-4 w-4 text-primary" />
              <span>2,000+ Attendees</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION (3-COLUMN HIGHLIGHTS) */}
      <section className="bg-[#f5f6f3] border-b border-black/5 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">World-Class Speakers</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Learn from Africa&apos;s most successful founders, global investors, and ecosystem leaders.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">Investor Access</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Meet 100+ active venture capitalists, angel investors, and family offices looking to fund founders.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">Pan-African Community</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Network with 2,000+ peers from 30+ African countries and build lasting connections.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE SUMMIT */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              About the Summit
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              The Founders Applied Research Fellowship is an intensive, research-focused internship designed to give emerging talent structured exposure to the forefront of sustainability, startup execution, and ecosystem innovation. Built to bridge academic inquiry and real-world market intelligence, the program develops deep analytical capacity while directly shaping the content, strategies, and insights that power the broader Founders community platform.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              The Founders Applied Research Fellowship is an intensive, research-focused internship designed to give emerging talent structured exposure to the forefront of sustainability, startup execution, and ecosystem innovation. Built to bridge academic inquiry and real-world market intelligence, the program develops deep analytical capacity while directly shaping the content, strategies, and insights that power the broader Founders community platform.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-md">
            <Image
              src="/images/about-summit-image.png"
              alt="Attendees networking at Founders Africa Summit"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 4. EVENT AGENDA */}
      <section className="bg-[#f5f6f3] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-alt mb-2">
              EVENT AGENDA
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Packed Schedule of Keynotes, Workshops &amp; Networking
            </h2>
          </div>

          {/* Agenda Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between border-b border-black/10 pb-4">
            <h3 className="text-sm font-bold tracking-wide uppercase text-primary-alt">
              DAY 1: OPENING &amp; KEYNOTES
            </h3>
            <span className="text-sm text-neutral-500 font-medium">
              Tuesday, 14 October 2026
            </span>
          </div>

          {/* Agenda Items Card */}
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm divide-y divide-black/5">
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-3 hover:bg-black/[0.02]">
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-sm font-semibold text-neutral-500 w-14 shrink-0">09:00</span>
                <div>
                  <h4 className="text-base font-semibold text-black">Opening Keynote: Africa&apos;s Startup Renaissance</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Keynote Speech</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-3 hover:bg-black/[0.02]">
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-sm font-semibold text-neutral-500 w-14 shrink-0">10:15</span>
                <div>
                  <h4 className="text-base font-semibold text-black">Fireside Chat: Scale: 0 to 1</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">3 Unicorn CEOs</p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-3 hover:bg-black/[0.02]">
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-sm font-semibold text-neutral-500 w-14 shrink-0">11:30</span>
                <div>
                  <h4 className="text-base font-semibold text-black">Networking Break &amp; Coffee</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Main Hall</p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-3 hover:bg-black/[0.02]">
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-sm font-semibold text-neutral-500 w-14 shrink-0">12:30</span>
                <div>
                  <h4 className="text-base font-semibold text-black">Panel: Raising Capital in 2026</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Venture VCs</p>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-3 hover:bg-black/[0.02]">
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-sm font-semibold text-neutral-500 w-14 shrink-0">14:00</span>
                <div>
                  <h4 className="text-base font-semibold text-black">Lunch &amp; Deal Room Pitching</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">VIP Lounge</p>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-3 hover:bg-black/[0.02]">
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-sm font-semibold text-neutral-500 w-14 shrink-0">15:30</span>
                <div>
                  <h4 className="text-base font-semibold text-black">Breakout Workshops (Session 1)</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Tech / Design / Growth Tracks</p>
                </div>
              </div>
            </div>

            {/* Item 7 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-3 hover:bg-black/[0.02]">
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-sm font-semibold text-neutral-500 w-14 shrink-0">18:00</span>
                <div>
                  <h4 className="text-base font-semibold text-black">Founders Dinner</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Invites only &amp; VIP Passholders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TICKETS & PRICING */}
      <section id="tickets" className="bg-[#FAF9F5] py-20 px-6 sm:px-10 lg:px-16 scroll-mt-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-alt mb-2">
              TICKETS &amp; PRICING
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Choose Your Summit Experience
            </h2>
            <p className="mt-3 text-sm text-neutral-500">
              Early bird pricing available through 31st August 2026. Group discounts for 5+.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* CARD 1: GENERAL ACCESS */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  GENERAL ACCESS
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-black">$149</span>
                </div>
                <p className="mt-3 text-xs text-neutral-500 leading-relaxed min-h-[2.5rem]">
                  Full summit access for early-stage founders and ecosystem builders.
                </p>

                <ul className="mt-8 space-y-3 border-t border-black/5 pt-6 text-sm text-neutral-700">
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>All keynotes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>Networking sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>Summit app access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>Certificate of attendance</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <button
                  onClick={openWaitlistModal}
                  className="w-full rounded-2xl bg-[#d4f668] py-3.5 text-sm font-semibold text-black transition-all hover:brightness-95 cursor-pointer"
                >
                  Get Your Ticket
                </button>
              </div>
            </div>

            {/* CARD 2: MOST POPULAR (VIP / FEATURED DARK CARD) */}
            <div className="relative flex flex-col justify-between rounded-3xl bg-[#111418] p-8 text-white shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-black">
                MOST POPULAR
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  VIP
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$499</span>
                </div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed min-h-[2.5rem]">
                  Premium access for series A founders and scaleup team leaders.
                </p>

                <ul className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-white/90">
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Everything in General</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>VIP lounge lounge</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>1-on-1 meet with speakers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Exec workshops &amp; networking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Exclusive dinners</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <button
                  onClick={openWaitlistModal}
                  className="w-full rounded-2xl bg-primary py-3.5 text-sm font-semibold text-black transition-all hover:brightness-105 cursor-pointer"
                >
                  Get Your Ticket
                </button>
              </div>
            </div>

            {/* CARD 3: DEAL ROOM ACCESS */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  DEAL ROOM ACCESS
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-black">$999</span>
                </div>
                <p className="mt-3 text-xs text-neutral-500 leading-relaxed min-h-[2.5rem]">
                  For investors and multi-making venture decision makers.
                </p>

                <ul className="mt-8 space-y-3 border-t border-black/5 pt-6 text-sm text-neutral-700">
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>Everything in VIP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>Deal room access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>Investor meetings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>Portfolio exhibition access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiCheck className="h-4 w-4 text-black shrink-0" />
                    <span>Premium lounge package</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <button
                  onClick={openWaitlistModal}
                  className="w-full rounded-2xl bg-[#d4f668] py-3.5 text-sm font-semibold text-black transition-all hover:brightness-95 cursor-pointer"
                >
                  Get Your Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 text-center bg-white border-t border-black/5">
        <div className="mx-auto max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Ready to Join Africa&apos;s Premier Founder Summit?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
            Don&apos;t miss the opportunity to connect with 2,000+ founders, investors, and ecosystem leaders. Secure your spot before pricing tier changes.
          </p>

          <div className="mt-8">
            <button
              onClick={openWaitlistModal}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-black transition-all hover:bg-primary/90 hover:scale-[1.02] cursor-pointer"
            >
              Get Your Ticket Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
