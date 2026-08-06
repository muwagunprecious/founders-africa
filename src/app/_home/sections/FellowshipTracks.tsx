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
    href: "/programmes/tech-incubation",
    description:
      "A 6-month programme for early-stage tech founders building scalable solutions across Africa.",
    months: "6",
    fellows: "25",
    topImage: "/images/tech-incubation-image.png",
    eyebrow: "Most Popular",
  },
  {
    title: "Accelerator Program",
    href: "/programmes/accelerator-program",
    description:
      "A bootcamp-style programme for businesses with an existing MVP or early-stage market traction.",
    months: "4",
    fellows: "20",
  },
  {
    title: "Remote Incubation",
    href: "/programmes/remote-incubation",
    description:
      "A bootcamp-style programme for distributed founders building from anywhere on the continent.",
    months: "4",
    fellows: "20",
  },
  {
    title: "Research Internship",
    href: "/programmes/research-internship",
    description:
      "Preparing young Nigerians for successful careers in the global digital and remote workforce.",
    months: "4",
    fellows: "20",
  },
  {
    title: "Founders Summit",
    href: "/summit",
    description:
      "A bootcamp-style programme for founders attending the annual summit and growth sessions.",
    months: "4",
    fellows: "20",
  },
];

function TrackCardShell({ track }: { track: TrackCard }) {
  return (
    <Link
      href={track.href}
      className="relative group flex h-[30rem] flex-col justify-end overflow-hidden rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_0_rgba(13,17,23,0.05) hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(13,17,23,0.08)]"
    >
      <div 
        className="absolute z-0 top-0 w-full h-[15rem] bg-[#dfe6b0]"
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
      ></div>

      <div className="flex flex-col p-6 rounded-[1.25rem] relative z-10 bg-white">
        <h3 className="max-w-[10rem] text-2xl font-semibold leading-[1.02] tracking-[-0.03em] text-black">
          {track.title}
        </h3>

        <p className="mt-2 max-w-[12rem] text-[0.8rem] leading-tight text-neutral-400">
          {track.description}
        </p>

        <div className="mt-4 border-t border-black/10 pt-3">
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <p className="text-[1rem] font-semibold leading-none text-black">
                {track.months}
              </p>
              <p className="text-[1rem] font-semibold leading-none text-black">Months</p>
              <p className="text-[0.6rem] leading-tight text-neutral-400">Duration</p>
            </div>

            <div>
              <p className="text-[1rem] font-semibold leading-none text-black">
                {track.fellows}
              </p>
              <p className="text-[1rem] font-semibold leading-none text-black">Fellows</p>
              <p className="text-[0.6rem] leading-tight text-neutral-400">Per Cohort</p>
            </div>
          </div>

          <span className="mt-3 inline-flex items-center gap-2 text-[0.72rem] font-medium text-primary-alt group-hover:text-primary">
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
    <section className="w-full bg-[#f6faea] px-6 py-18 sm:px-10 lg:px-24 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
          Our Programmes
        </p>

        <h2 className="mt-1 text-[2.4rem] font-semibold tracking-[-0.04em] text-black sm:text-[2.8rem]">
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
