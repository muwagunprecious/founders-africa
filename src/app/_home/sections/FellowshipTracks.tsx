import Link from "next/link";

type TrackCard = {
  title: string;
  href: string;
  description: string;
  months: string;
  fellows: string;
  topImage?: string;
  eyebrow?: string;
};

const tracks: TrackCard[] = [
  {
    title: "Tech Incubation",
    href: "/program/tech-incubation",
    description:
      "A structured incubation programme for early-stage and ideation-stage tech founders.",
    months: "4",
    fellows: "25",
    eyebrow: "Most Popular",
    topImage: "/images/tech-incubation-image.png",
  },
  {
    title: "Accelerator Program",
    href: "/program/accelerator-program",
    description:
      "A bootcamp-style programme for businesses with an MVP or early-stage market traction.",
    months: "4",
    fellows: "20",
    topImage: "/images/tech-incubation-image.png",
  },
  {
    title: "Remote Incubation",
    href: "/program/remote-incubation",
    description:
      "A career acceleration programme preparing young talent for the global digital workforce.",
    months: "4",
    fellows: "20",
    topImage: "/images/tech-incubation-image.png",
  },
  {
    title: "Research Internship",
    href: "/program/research-internship",
    description:
      "A research-focused track giving emerging talent structured exposure to applied research.",
    months: "4",
    fellows: "20",
    topImage: "/images/tech-incubation-image.png",
  },
  {
    title: "Founders Summit",
    href: "/summit",
    description:
      "The premier annual gathering connecting founders, investors, and ecosystem leaders.",
    months: "Annual",
    fellows: "1000+",
    topImage: "/images/tech-incubation-image.png",
  },
];

function TrackCardShell({ track }: { track: TrackCard }) {
  return (
    <Link
      href={track.href}
      className="group relative flex h-[30rem] flex-col justify-end overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1px_0_rgba(13,17,23,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(13,17,23,0.08)]"
    >
      <div
        className="absolute top-0 z-0 h-60 w-full bg-[#dfe6b0]"
        style={{
          backgroundImage: `
            linear-gradient(
              0deg,
              rgba(0, 0, 0, 0),
              rgba(255, 255, 255, 0.2)
            ),
            url('${track.topImage}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 flex flex-col rounded-2xl bg-white p-6">
        <h3 className="max-w-40 text-2xl font-semibold leading-tight tracking-tight text-black">
          {track.title}
        </h3>

        <p className="mt-2 max-w-48 text-sm leading-snug text-neutral-400">
          {track.description}
        </p>

        <div className="mt-4 border-t border-black/10 pt-3">
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <p className="text-base font-semibold leading-none text-black">
                {track.months}
              </p>
              <p className="text-base font-semibold leading-none text-black">
                Months
              </p>
              <p className="text-xs leading-tight text-neutral-400">Duration</p>
            </div>

            <div>
              <p className="text-base font-semibold leading-none text-black">
                {track.fellows}
              </p>
              <p className="text-base font-semibold leading-none text-black">
                Fellows
              </p>
              <p className="text-xs leading-tight text-neutral-400">Per Cohort</p>
            </div>
          </div>

          <span className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-primary-alt group-hover:text-primary">
            Learn More
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function FellowshipTracks() {
  return (
    <section className="w-full bg-[#f6faea] px-6 py-20 sm:px-10 lg:px-24" id="programmes">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
          Our Programmes
        </p>

        <h2 className="mt-1 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
          Fellowship Tracks &amp; Summit
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tracks.map((track) => (
            <TrackCardShell key={track.title} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}
