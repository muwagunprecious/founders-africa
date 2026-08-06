import Image from "next/image";

const pressLogos = [
  { src: "/images/press/ait.png", alt: "AIT" },
  { src: "/images/press/arise.png", alt: "Arise News" },
  { src: "/images/press/bella-naija.png", alt: "BellaNaija" },
  { src: "/images/press/channels.png", alt: "Channels TV" },
  { src: "/images/press/daily-times.png", alt: "Daily Times" },
  { src: "/images/press/guardian.png", alt: "The Guardian" },
  { src: "/images/press/legit-ng.png", alt: "Legit.ng" },
  { src: "/images/press/lib.png", alt: "Lagos Business School" },
  { src: "/images/press/ltv.png", alt: "Lagos Television" },
  { src: "/images/press/nairametrics.png", alt: "Nairametrics" },
  { src: "/images/press/nta.png", alt: "NTA" },
  { src: "/images/press/pulse.png", alt: "Pulse Nigeria" },
  { src: "/images/press/tech-cabal.png", alt: "TechCabal" },
  { src: "/images/press/the-nation.png", alt: "The Nation" },
  { src: "/images/press/this-day.png", alt: "ThisDay" },
  { src: "/images/press/tribune.png", alt: "Tribune" },
  { src: "/images/press/vanguard.png", alt: "Vanguard" },
];

export default function PressBar() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
            Featured In
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Press coverage from the ecosystem and beyond
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {pressLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center rounded-2xl border border-black/5 bg-[#fbfbfb] px-4 py-5"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="160px"
                  className="object-contain grayscale opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
