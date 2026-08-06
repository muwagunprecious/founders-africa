"use client";

import Link from "next/link";
import { useWaitlistModal } from "@/context/WaitlistContext";

export default function Newsletter() {
  const { openWaitlistModal } = useWaitlistModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWaitlistModal();
  };

  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-24 lg:py-24" id="newsletter">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
          Stay Connected
        </p>

        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-[2.65rem]">
          Opportunities, news, and insights - straight to your inbox.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
          Join our community updates and be first to hear about programmes, events, and founder stories.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex w-full max-w-2xl flex-col gap-3 rounded-full bg-[#f5f5f5] p-3 shadow-[0_10px_30px_rgba(13,17,23,0.04)] sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email address"
            disabled
            className="min-w-0 flex-1 rounded-full border border-transparent bg-transparent px-5 py-4 text-base text-black outline-none placeholder:text-neutral-400 focus:border-primary focus:bg-white"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-7 py-4 text-base font-medium text-black hover:brightness-110 cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-sm text-neutral-400">
          No spam. Unsubscribe anytime.
        </p>

        <Link
          href="/privacy"
          className="mt-5 text-sm font-medium text-primary-alt hover:text-primary"
        >
          Read our privacy policy
        </Link>
      </div>
    </section>
  );
}

