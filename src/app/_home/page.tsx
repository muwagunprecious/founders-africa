import Hero from "./sections/Hero";
import About from "./sections/About";
import FellowshipTracks from "./sections/FellowshipTracks";
import StatsBand from "./sections/StatsBand";
import PressBar from "./sections/PressBar";
import Newsletter from "./sections/Newsletter";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <About />
      <FellowshipTracks />
      <StatsBand />
      <PressBar />
      <Newsletter />
    </div>
  );
}
