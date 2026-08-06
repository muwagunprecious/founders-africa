import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-24 lg:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-primary">
            About Us
          </p>

          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.65rem]">
            A home for builders who believe Africa&apos;s time is now.
          </h2>

          <div className="mt-5 space-y-5 text-base leading-7 text-neutral-400 sm:text-lg">
            <p>
              Since 2018, Founders Africa has supported over 1,200 founders across 38 countries.
              We provide structured fellowship tracks, mentorship from world-class operators,
              access to capital, and a community that outlasts the programme.
            </p>

            <p>
              Our annual summit is the continent&apos;s premier gathering for high-growth
              entrepreneurs and the ecosystem that backs them.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 text-base font-medium text-primary-alt hover:text-primary sm:text-lg"
          >
            Read Our Story
            <span aria-hidden="true" className="text-xl leading-none">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(13,17,23,0.12)] sm:max-w-[20rem] lg:max-w-[17rem]">
            <Image
              src="/images/about-section-image.png"
              alt="Founders Africa community members collaborating in a meeting"
              fill
              sizes="(min-width: 1024px) 17rem, (min-width: 640px) 20rem, 18rem"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
