import { Closing, Hero, NextStep, Overview, PostRoutes, Problem, Proof } from "./components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Proof />
      <PostRoutes />
      <Overview />
      <NextStep href="/solutions" label="Next: see the solutions" />
      <Closing />
    </>
  );
}
