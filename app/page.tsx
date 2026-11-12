import { Circle, Closing, FoundingOffer, Hero, HomeFaq, HowItWorks, Lifecycle, NextStep, Overview, PilotMeasures, PostRoutes, Problem, Proof, RealLife, TrustStrip } from "./components/sections";
import { solutionsHref } from "./content";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Circle />
      <Proof />
      <Problem />
      <PostRoutes />
      <RealLife />
      <Lifecycle />
      <Overview />
      <HowItWorks />
      <PilotMeasures />
      <FoundingOffer />
      <HomeFaq />
      <NextStep href={solutionsHref} label="Next: see the solutions" />
      <Closing />
    </>
  );
}
