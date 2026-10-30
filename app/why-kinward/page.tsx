import type { Metadata } from "next";
import { Difference, Catapult, NextStep, Closing } from "../components/sections";

export const metadata: Metadata = {
  title: "Why Kinward | Kinward",
  description: "Agencies build websites. Apps reach families. Kinward does both.",
};

export default function WhyKinward() {
  return (
    <>
      <Difference />
      <Catapult />
      <NextStep href="/examples" label="Next: see what your website could look like" />
      <Closing />
    </>
  );
}
