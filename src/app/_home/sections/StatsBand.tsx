const stats = [
  {
    value: "1,200+",
    label: "Founders supported",
  },
  {
    value: "38",
    label: "Countries reached",
  },
  {
    value: "$84M",
    label: "In capital raised",
  },
  {
    value: "6",
    label: "Fellowship tracks",
  },
  {
    value: "92%",
    label: "Would recommend us",
  },
];

export default function StatsBand() {
  return (
    <section className="w-full bg-[#0d1016] px-6 py-14 text-white sm:px-10 lg:px-24" id="impact">
      <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {stat.value}
            </p>
            <p className="text-sm uppercase tracking-[0.22em] text-white/55">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
