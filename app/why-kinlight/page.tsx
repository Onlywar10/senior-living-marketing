import type { Metadata } from "next";
import { Difference, Catapult, NextStep, Closing } from "../components/sections";

export const metadata: Metadata = {
  title: "Why Kinlight | Kinlight",
  description: "Agencies build websites. Apps reach families. Kinlight does both.",
};

export default function WhyKinlight() {
  return (
    <>
      <Difference />
      <Catapult />
      <NextStep href="/examples" label="Next: see what your website could look like" />
      <Closing />
    </>
  );
}
