export default function Hero() {
  return (
    <section
      className="w-full h-screen text-white p-24 flex flex-col items-start justify-center"
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
      <h1 className="text-[7rem] w-[44rem] leading-none my-4">
        Africa Boldest Founders <span className="text-primary">Start Here.</span>
      </h1>

      <p className="font-light text-xl w-6/12">
        Founders Africa backs the next generation of African entrepreneurs 
        through transformative fellowship programmes and the continent's leading annual summit.
      </p>

      <div className="mt-16 flex flex-row items-center gap-4">
        <button className="bg-primary py-4 px-12 text-black text-xl font-medium rounded-xl cursor-pointer hover:brightness-125">
          Explore Programmes
        </button>
        <button className="py-4 px-12 text-xl font-medium rounded-xl border border-2 border-white cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,1)]">
          Register For Summit
        </button>
      </div>
    </section>
  );
}