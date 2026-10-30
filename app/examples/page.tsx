import type { Metadata } from "next";
import { Examples, NextStep, Closing } from "../components/sections";

export const metadata: Metadata = {
  title: "Examples | Kinward",
  description: "See what your senior living community's website could look like.",
};

export default function ExamplesPage() {
  return (
    <>
      <Examples />
      <NextStep href="/offer" label="Next: the offer" />
      <Closing />
    </>
  );
}
