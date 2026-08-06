import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramme, programmes } from "../_data";

type ProgramPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return programmes.map((programme) => ({
    slug: programme.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgramme(slug);

  if (!programme) {
    return {
      title: "Programme not found | Founders Africa",
    };
  }

  return {
    title: `${programme.title} | Founders Africa`,
    description: programme.heroCopy,
  };
}

function getProgramBySlug(slug: string) {
  const programme = getProgramme(slug);

  if (!programme) {
    notFound();
  }

  return programme;
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const programme = getProgramBySlug(slug);

  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden border-b border-black/10 bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src={programme.heroImage}
            alt={programme.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
        </div>

        <div className="relative mx-auto flex min-h-[40rem] w-full max-w-7xl flex-col justify-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {programme.eyebrow}
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
              {programme.heroTitle}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              {programme.heroCopy}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#application"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-black hover:brightness-110 sm:px-8 sm:py-4 sm:text-base"
              >
                {programme.heroCta}
              </Link>
              <div className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-sm sm:px-5 sm:py-4">
                {programme.heroSecondaryCta}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.45fr_0.75fr] lg:gap-14">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                About the Programme
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-500 sm:text-base">
                {programme.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Programme Highlights
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {programme.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_1px_0_rgba(13,17,23,0.05)]"
                  >
                    <p className="text-4xl font-semibold tracking-tight text-black">
                      {highlight.value}
                    </p>
                    <p className="mt-2 text-base font-medium text-black">
                      {highlight.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Eligibility Criteria
              </h2>

              <div className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white">
                {programme.eligibility.map((item, index) => (
                  <div
                    key={item.label}
                    className={`grid grid-cols-[7rem_1fr] gap-4 px-5 py-4 text-sm sm:grid-cols-[9rem_1fr] ${
                      index !== programme.eligibility.length - 1
                        ? "border-b border-black/10"
                        : ""
                    }`}
                  >
                    <div className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-400">
                      {item.label}
                    </div>
                    <div className="font-medium text-primary-alt">{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-3">
                {programme.faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className={`group overflow-hidden rounded-2xl border border-black/10 bg-white open:bg-[#F0F9E0] ${
                      index === 0 ? "bg-[#eef6ce]" : ""
                    }`}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-black marker:hidden">
                      <span>{faq.question}</span>
                      <span className="text-xl text-primary-alt group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-sm leading-7 text-neutral-500">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit lg:sticky lg:top-28" id="application">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(13,17,23,0.08)]">
              <div className="flex items-center gap-2 text-sm font-medium text-primary-alt">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {programme.heroStatus}
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">
                {programme.applicationCard.title}
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                {programme.applicationCard.subtitle}
              </p>

              <div className="mt-6 space-y-4 border-t border-black/10 pt-5">
                {programme.applicationCard.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-neutral-400">{item.label}</span>
                    <span className="font-medium text-black">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#f6faea] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
                  {programme.applicationCard.deadlineLabel}
                </p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-black">
                  {programme.applicationCard.deadlineValue}
                </p>

                <Link
                  href="#application"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-sm font-medium text-black hover:brightness-110"
                >
                  Apply Now
                </Link>

                <p className="mt-3 text-center text-xs text-neutral-500">
                  Save for later • share this programme
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
