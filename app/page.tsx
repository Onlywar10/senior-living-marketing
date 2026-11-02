import { Closing, FoundingOffer, Hero, HomeFaq, HowItWorks, NextStep, Overview, PostRoutes, Problem, Proof, RealLife, TrustStrip } from "./components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <Proof />
      <PostRoutes />
      <RealLife />
      <Overview />
      <HowItWorks />
      <FoundingOffer />
      <HomeFaq />
      <NextStep href="/solutions/live-website" label="Next: see the solutions" />
      <Closing />
    </>
  );
}
